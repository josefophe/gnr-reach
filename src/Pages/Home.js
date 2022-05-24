import React, { useState, useEffect } from 'react'
import MyAlgoConnect from '@randlabs/myalgo-connect';
import Identicon from 'react-identicons';
import Card from '../components/Card'
import AppViews from './views/AppViews';
import CreatorViews from './views/CreatorViews';
import BuyerViews from './views/BuyerViews';
import BrokerViews from './views/BrokerViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import {loadStdlib} from '@reach-sh/stdlib';
import LargeCard from '../components/LargeCard'
import { collection, getDocs } from "firebase/firestore"
import { db } from '../storage'
import '../styles/home.css'

function Home() {

  const [selectedNFT, setSelectedNFT] = useState({
    img: 'https://publish.one37pm.net/wp-content/uploads/2021/02/how-to-buy-a-cryptopunk_0001_03.jpg?fit=750%2C500',
    name:"Noogler punk",
    owner:'0x00000000000000000000000000000',
    description:'lorem ipusm dissile dolorem portura nartro reveress',
    price:0.05
  })

  const [nfts, setNfts] = useState([])
  const [address, setAddress] = useState('')

  const connectWallet = async() => {
    const myAlgoConnect = new MyAlgoConnect();
    const accountsSharedByUser = await myAlgoConnect.connect();
    setAddress(accountsSharedByUser[0].address)
  }


const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '3', standardUnit};

//reach.setProviderByName('TestNet');
// reach.setProviderByName('MainNet');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'ConnectAccount', ...defaults};
  }
  
  async componentDidMount() {
    const now = await reach.getNetworkTime();
    reach.setQueryLowerBound(reach.sub(now, 3000));

    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({acc, bal});
    if (await reach.canFundFromFaucet()) {
      this.setState({view: 'FundAccount'});
    } else {
      this.setState({view: 'DeployerOrAttacher'});
    }
  }

  async fundAccount(fundAmount) {
    await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({view: 'DeployerOrAttacher'});
  }

  async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); }
  selectCreator() { this.setState({view: 'Wrapper', ContentView: Creator}); }
  selectBuyer() { this.setState({view: 'Wrapper', ContentView: Buyer}); }
  selectBroker() { this.setState({view: 'Wrapper', ContentView: Broker}); }
  render() { return renderView(this, AppViews); }
}

class Creator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'SetInfo'};
  }
  setInfo(id, price, tax) { this.setState({view: 'Deploy', id, price, tax}); }
  getId() {return this.state.id;}
  getPrice() {return this.state.price;}
  getTax() {return this.state.tax;}

  async deploy() {
    const ctc = this.props.acc.deploy(backend);
    this.setState({view: 'Deploying', ctc});
    this.id = reach.parseCurrency(this.state.id); // UInt
    this.price = reach.parseCurrency(this.state.price); // UInt
    this.tax = reach.parseCurrency(this.state.tax); // UInt
    backend.A(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForAttacher', ctcInfoStr});
  }
  render() { return renderView(this, CreatorViews); }
}

class Buyer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach'};
  }

  attach(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.B(ctc, this);
  }

  async buy(idAtomic, priceAtomic) {
    console.log(idAtomic, priceAtomic);
    const id = idAtomic.toNumber();
    const price = priceAtomic.toNumber();
    console.log(id, price);
    return await new Promise(bought => {
      this.setState({view: 'BuyNFT', id, price, standardUnit, bought});
    });
  }

  buyIt() {
    console.log("buy it");
    this.state.bought();
  }

  async pawn() {
    return await new Promise(pawned => {
      this.setState({view: 'Pawn', standardUnit, pawned});
    });
  }

  pawnIt(pawnPrice, redeemPrice, endDate) {
    this.setState({view: 'WaitingForPawn', pawnPrice, redeemPrice, endDate});
    this.state.pawned();
  }

  async redeem(id, redeemPriceAtomic, endDateAtomic) {
    console.log("redeem in");
    const redeemPrice = redeemPriceAtomic.toNumber();
    const endDate = endDateAtomic.toNumber();
    return await new Promise(redeemed => {
      this.setState({view: 'Redeem', id, standardUnit,  redeemPrice, endDate, redeemed});
    });
  }

  redeemIt(id) {
    this.state.redeemed();
    this.setState({view: 'RedeemSuccess', id});
  }

  getPawnPrice()   { return this.state.pawnPrice };
  getRedeemPrice() { return this.state.redeemPrice };
  getEndDate()     { return this.state.endDate };
  getCurrentDate() { return 0 };

  render() { return renderView(this, BuyerViews); }
}

class Broker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach'};
  }
  
  attach(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.C(ctc, this);
  }

  async accept(idAtomic, pawnPriceAtomic, redeemPriceAtomic, endDateAtomic) { // Fun([UInt], Null)
    console.log("start accept");
    const id = idAtomic.toNumber();
    const pawnPrice = pawnPriceAtomic.toNumber();
    const redeemPrice = redeemPriceAtomic.toNumber();
    const endDate = endDateAtomic.toNumber();
    return await new Promise(accepted => {
      this.setState({view: 'acceptPawn', id, pawnPrice, redeemPrice, endDate, accepted});
    });
  }
  
  acceptIt() {
    this.state.accepted();
    this.setState({view: 'WaitingForRedeem'});
  }

  render() { return renderView(this, BrokerViews); }
}

  useEffect(() => {
    const getData = async() => {
      const querySnapshot = await getDocs(collection(db, "nfts"))
      let result = []
      querySnapshot.forEach((doc) => {
        const {id }= doc
        const data = doc.data()
        result.push({id, data})
      })
      setNfts(result)
    }

    getData()
  }, [])

  return (
    <div className='home'>
      <nav>
        <h1>TREE</h1>
        <section>
          {!address && <button onClick={connectWallet}>Connect wallet</button>}
          {address && <Identicon string={address} size={20}/>}
        </section>
        <a href="/mint">+</a>
      </nav>
      <div className='board'>
        <div className='board__left'>
          {nfts?.map(({id, data}) => <Card key={id} id={id} creator={data.creator} owner={data.owner} price={data.price} royalty={data.royalty} metadata={data.metadata}  selectNFt={setSelectedNFT} />)}
        </div>
        <div className='board__right'>
        <LargeCard img={selectedNFT.img} owner={selectedNFT.owner} price={selectedNFT.price} name ={selectedNFT.name} description={selectedNFT.description} />
        </div>
      </div>
    </div>
  )
}

renderDOM(<App />);

export default Home
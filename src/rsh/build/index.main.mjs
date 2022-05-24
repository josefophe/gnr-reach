// Automatically generated with Reach 0.1.10 (b3269997)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (b3269997)';
export const _backendVersion = 13;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      2: [ctc0, ctc1, ctc0],
      3: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1],
      4: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc0],
      5: [ctc0, ctc1, ctc0, ctc1, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function A(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for A expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for A expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  
  
  const v122 = stdlib.protect(ctc0, await interact.getId(), {
    at: './index.rsh:48:41:application',
    fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:13:function exp)'],
    msg: 'getId',
    who: 'A'
    });
  const v123 = stdlib.protect(ctc0, await interact.getPrice(), {
    at: './index.rsh:49:47:application',
    fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:13:function exp)'],
    msg: 'getPrice',
    who: 'A'
    });
  const v124 = stdlib.protect(ctc0, await interact.getTax(), {
    at: './index.rsh:50:43:application',
    fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:13:function exp)'],
    msg: 'getTax',
    who: 'A'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v122, v123, v124],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v126, v127, v128], secs: v130, time: v129, didSend: v34, from: v125 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v126, v127, v128], secs: v130, time: v129, didSend: v34, from: v125 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v135, time: v134, didSend: v43, from: v133 } = txn2;
  ;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 2,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v148, v149, v150], secs: v152, time: v151, didSend: v61, from: v147 } = txn3;
  ;
  const v153 = stdlib.addressEq(v133, v147);
  stdlib.assert(v153, {
    at: './index.rsh:70:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'A'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v158, time: v157, didSend: v70, from: v156 } = txn4;
  ;
  const v161 = stdlib.sub(v148, v128);
  ;
  ;
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v174], secs: v176, time: v175, didSend: v89, from: v173 } = txn5;
  ;
  const v177 = stdlib.addressEq(v133, v173);
  stdlib.assert(v177, {
    at: './index.rsh:89:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'A'
    });
  const v178 = stdlib.ge(v150, v174);
  if (v178) {
    const v179 = stdlib.sub(v149, v128);
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v182, time: v181, didSend: v98, from: v180 } = txn6;
    ;
    const v185 = stdlib.addressEq(v133, v180);
    stdlib.assert(v185, {
      at: './index.rsh:94:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'A'
      });
    ;
    ;
    return;
    
    
    }
  else {
    return;
    }
  
  
  
  
  
  
  
  
  
  };
export async function B(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for B expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for B expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v126, v127, v128], secs: v130, time: v129, didSend: v34, from: v125 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.buy(v126, v127), {
    at: './index.rsh:57:17:application',
    fs: ['at ./index.rsh:56:9:application call to [unknown function] (defined at: ./index.rsh:56:13:function exp)'],
    msg: 'buy',
    who: 'B'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v125, v127, v128],
    evt_cnt: 0,
    funcNum: 1,
    lct: v129,
    onlyIf: true,
    out_tys: [],
    pay: [v127, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v135, time: v134, didSend: v43, from: v133 } = txn2;
      
      sim_r.txns.push({
        amt: v127,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: v127,
        kind: 'from',
        to: v125,
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v135, time: v134, didSend: v43, from: v133 } = txn2;
  ;
  ;
  stdlib.protect(ctc1, await interact.pawn(), {
    at: './index.rsh:65:18:application',
    fs: ['at ./index.rsh:64:9:application call to [unknown function] (defined at: ./index.rsh:64:13:function exp)'],
    msg: 'pawn',
    who: 'B'
    });
  const v144 = stdlib.protect(ctc0, await interact.getPawnPrice(), {
    at: './index.rsh:66:55:application',
    fs: ['at ./index.rsh:64:9:application call to [unknown function] (defined at: ./index.rsh:64:13:function exp)'],
    msg: 'getPawnPrice',
    who: 'B'
    });
  const v145 = stdlib.protect(ctc0, await interact.getRedeemPrice(), {
    at: './index.rsh:67:59:application',
    fs: ['at ./index.rsh:64:9:application call to [unknown function] (defined at: ./index.rsh:64:13:function exp)'],
    msg: 'getRedeemPrice',
    who: 'B'
    });
  const v146 = stdlib.protect(ctc0, await interact.getEndDate(), {
    at: './index.rsh:68:51:application',
    fs: ['at ./index.rsh:64:9:application call to [unknown function] (defined at: ./index.rsh:64:13:function exp)'],
    msg: 'getEndDate',
    who: 'B'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v125, v128, v133, v144, v145, v146],
    evt_cnt: 3,
    funcNum: 2,
    lct: v134,
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:70:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v148, v149, v150], secs: v152, time: v151, didSend: v61, from: v147 } = txn3;
      
      ;
      const v153 = stdlib.addressEq(v133, v147);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v148, v149, v150], secs: v152, time: v151, didSend: v61, from: v147 } = txn3;
  ;
  const v153 = stdlib.addressEq(v133, v147);
  stdlib.assert(v153, {
    at: './index.rsh:70:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v158, time: v157, didSend: v70, from: v156 } = txn4;
  ;
  const v161 = stdlib.sub(v148, v128);
  ;
  ;
  const v172 = stdlib.protect(ctc0, await interact.getCurrentDate(), {
    at: './index.rsh:86:59:application',
    fs: ['at ./index.rsh:85:9:application call to [unknown function] (defined at: ./index.rsh:85:13:function exp)'],
    msg: 'getCurrentDate',
    who: 'B'
    });
  stdlib.protect(ctc1, await interact.redeem(v126, v149, v150), {
    at: './index.rsh:87:20:application',
    fs: ['at ./index.rsh:85:9:application call to [unknown function] (defined at: ./index.rsh:85:13:function exp)'],
    msg: 'redeem',
    who: 'B'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v125, v128, v133, v149, v150, v156, v172],
    evt_cnt: 1,
    funcNum: 4,
    lct: v157,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:89:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v174], secs: v176, time: v175, didSend: v89, from: v173 } = txn5;
      
      ;
      const v177 = stdlib.addressEq(v133, v173);
      ;
      const v178 = stdlib.ge(v150, v174);
      if (v178) {
        const v179 = stdlib.sub(v149, v128);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc2, ctc0, ctc0, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v174], secs: v176, time: v175, didSend: v89, from: v173 } = txn5;
  ;
  const v177 = stdlib.addressEq(v133, v173);
  stdlib.assert(v177, {
    at: './index.rsh:89:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  const v178 = stdlib.ge(v150, v174);
  if (v178) {
    const v179 = stdlib.sub(v149, v128);
    const txn6 = await (ctc.sendrecv({
      args: [v125, v128, v133, v149, v156, v179],
      evt_cnt: 0,
      funcNum: 5,
      lct: v175,
      onlyIf: true,
      out_tys: [],
      pay: [v149, []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v182, time: v181, didSend: v98, from: v180 } = txn6;
        
        sim_r.txns.push({
          amt: v149,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        const v185 = stdlib.addressEq(v133, v180);
        ;
        sim_r.txns.push({
          amt: v128,
          kind: 'from',
          to: v125,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          amt: v179,
          kind: 'from',
          to: v156,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc2, ctc0, ctc2, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v182, time: v181, didSend: v98, from: v180 } = txn6;
    ;
    const v185 = stdlib.addressEq(v133, v180);
    stdlib.assert(v185, {
      at: './index.rsh:94:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'B'
      });
    ;
    ;
    return;
    
    
    }
  else {
    return;
    }
  
  
  
  
  
  
  
  
  
  };
export async function C(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for C expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for C expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v126, v127, v128], secs: v130, time: v129, didSend: v34, from: v125 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v135, time: v134, didSend: v43, from: v133 } = txn2;
  ;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 2,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v148, v149, v150], secs: v152, time: v151, didSend: v61, from: v147 } = txn3;
  ;
  const v153 = stdlib.addressEq(v133, v147);
  stdlib.assert(v153, {
    at: './index.rsh:70:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'C'
    });
  stdlib.protect(ctc1, await interact.accept(v126, v148, v149, v150), {
    at: './index.rsh:75:20:application',
    fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:12:function exp)'],
    msg: 'accept',
    who: 'C'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v125, v128, v133, v148, v149, v150],
    evt_cnt: 0,
    funcNum: 3,
    lct: v151,
    onlyIf: true,
    out_tys: [],
    pay: [v148, []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v158, time: v157, didSend: v70, from: v156 } = txn4;
      
      sim_r.txns.push({
        amt: v148,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v161 = stdlib.sub(v148, v128);
      sim_r.txns.push({
        amt: v128,
        kind: 'from',
        to: v125,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: v161,
        kind: 'from',
        to: v133,
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v158, time: v157, didSend: v70, from: v156 } = txn4;
  ;
  const v161 = stdlib.sub(v148, v128);
  ;
  ;
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v174], secs: v176, time: v175, didSend: v89, from: v173 } = txn5;
  ;
  const v177 = stdlib.addressEq(v133, v173);
  stdlib.assert(v177, {
    at: './index.rsh:89:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'C'
    });
  const v178 = stdlib.ge(v150, v174);
  if (v178) {
    const v179 = stdlib.sub(v149, v128);
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v182, time: v181, didSend: v98, from: v180 } = txn6;
    ;
    const v185 = stdlib.addressEq(v133, v180);
    stdlib.assert(v185, {
      at: './index.rsh:94:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'C'
      });
    ;
    ;
    return;
    
    
    }
  else {
    return;
    }
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiALAAEFIAgDBEgCUBAmAgEAACI1ADEYQQM5KWRJIls1ASEEWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBQxAAXtJIQYMQADnSSQMQABdJBJEJDQBEkQ0BEkiEkw0AhIRRChkNQOABMyZklywNAMhB1uIAuA0A1coIDEAEkSxIrIBNAMlW7III7IQNANXACCyB7OxIrIBNAOBcFuyCCOyEDQDV1AgsgezQgJRSCEGNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yVbNf5XKCA1/SEHWzX8V1ggNftJNQUXNfqABPmLr3g0+hZQsDT9MQASRDQDIQlbNPoPQQAtNPw0/gk1+TT/NP4WUDT9UDT8FlA0+1A0+RZQKEsBVwB4Z0gkNQEyBjUCQgHrQgHNSCEFNAESRDQESSISTDQCEhFEKGRJNQNJSkpXACA1/yVbNf5XKCA1/SEHWzX8IQlbNfuBWFs1+oAEp2XEtLA0/IgB4rEisgE0/rIII7IQNP+yB7OxIrIBNPw0/gmyCCOyEDT9sgezNP80/hZQNP1QNPsWUDT6FlAxAFAoSwFXAHhnSCEGNQEyBjUCQgFbSSMMQADgSSEIDEAAe0ghCDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yVbNf5XKCA1/Uk1BUlJIls1/CEEWzX7IQpbNfqABKu630k0/BZQNPsWUDT6FlCwNP0xABJENP80/hZQNP1QNPwWUDT7FlA0+hZQKEsBVwBgZ0ghBTUBMgY1AkIA00gjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/JVs1/oEoWzX9gASai5F0sDT+iADesSKyATT+sggjshA0/7IHszT/NP0WUDEAUChLAVcASGdIIQg1ATIGNQJCAHVIIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yEEWzX+IQpbNf2ABPdxE000/xZQNP4WUDT9FlCwgaCNBogAdDEANP4WUDT9FlAoSwFXADBnSCM1ATIGNQJCABsxGSQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 120,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v126",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v127",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v128",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v126",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v127",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v128",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v148",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v149",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v150",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v174",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v148",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v149",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v150",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v174",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620014653803806200146583398101604081905262000026916200023e565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a1620000953415600762000137565b620000c3604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805182015182850190815290516040908101518186019081526001600081905543905581519384019490945290519082015290516060820152608001604051602081830303815290604052600290805190602001906200012e92919062000161565b50505062000312565b816200015d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200016f90620002d5565b90600052602060002090601f016020900481019282620001935760008555620001de565b82601f10620001ae57805160ff1916838001178555620001de565b82800160010185558215620001de579182015b82811115620001de578251825591602001919060010190620001c1565b50620001ec929150620001f0565b5090565b5b80821115620001ec5760008155600101620001f1565b604051606081016001600160401b03811182821017156200023857634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200025257600080fd5b604080519081016001600160401b03811182821017156200028357634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200029d57600080fd5b620002a762000207565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c90821680620002ea57607f821691505b602082108114156200030c57634e487b7160e01b600052602260045260246000fd5b50919050565b61114380620003226000396000f3fe6080604052600436106100795760003560e01c80638e3147691161004b5780638e314769146100e1578063a209ad4e146100f4578063ab53f2c614610107578063b5fe06bf1461012a57005b80631e93b0f1146100825780632c10a159146100a657806373b4522c146100b957806383230757146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610d93565b61013d565b6100806100c7366004610d93565b61031c565b3480156100d857600080fd5b50600154610093565b6100806100ef366004610d93565b610567565b610080610102366004610d93565b610735565b34801561011357600080fd5b5061011c6109b3565b60405161009d929190610db6565b610080610138366004610e13565b610a50565b61014d6001600054146009610c80565b6101678135158061016057506001548235145b600a610c80565b60008080556002805461017990610e25565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610e25565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610ede565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161023d929190610f21565b60405180910390a1610256816020015134146008610c80565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610293573d6000803e3d6000fd5b5060408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289890151845233835260029095554360015587519384019490945290519582019590955293511690830152906080015b60405160208183030381529060405260029080519060200190610316929190610ca5565b50505050565b61032c6003600054146010610c80565b6103468135158061033f57506001548235145b6011610c80565b60008080556002805461035890610e25565b80601f016020809104026020016040519081016040528092919081815260200182805461038490610e25565b80156103d15780601f106103a6576101008083540402835291602001916103d1565b820191906000526020600020905b8154815290600101906020018083116103b457829003601f168201915b50505050508060200190518101906103e99190610f5e565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c6338360405161041c929190610f21565b60405180910390a161043581606001513414600f610c80565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610472573d6000803e3d6000fd5b5080604001516001600160a01b03166108fc826020015183606001516104989190610fc6565b6040518115909202916000818181858888f193505050501580156104c0573d6000803e3d6000fd5b506040805160c08082018352600080835260208084018281528486018381526060808701858152608080890187815260a0808b018981528d516001600160a01b03908116808e528f8b01518a528f8f0151821689528f86015187528f84015185523383526004909b55436001558d51998a019a909a5296519b88019b909b52935187169286019290925251908401525195820195909552935116908301529060e0016102f2565b6105776005600054146018610c80565b6105918135158061058a57506001548235145b6019610c80565b6000808055600280546105a390610e25565b80601f01602080910402602001604051908101604052809291908181526020018280546105cf90610e25565b801561061c5780601f106105f15761010080835404028352916020019161061c565b820191906000526020600020905b8154815290600101906020018083116105ff57829003601f168201915b50505050508060200190518101906106349190610feb565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3383604051610667929190610f21565b60405180910390a1610680816060015134146016610c80565b604081015161069b906001600160a01b031633146017610c80565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106d8573d6000803e3d6000fd5b5080608001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f1935050505015801561071a573d6000803e3d6000fd5b506000808055600181905561073190600290610d29565b5050565b6107456004600054146014610c80565b61075f8135158061075857506001548235145b6015610c80565b60008080556002805461077190610e25565b80601f016020809104026020016040519081016040528092919081815260200182805461079d90610e25565b80156107ea5780601f106107bf576101008083540402835291602001916107ea565b820191906000526020600020905b8154815290600101906020018083116107cd57829003601f168201915b5050505050806020019051810190610802919061105a565b905061081a6040518060200160405280600081525090565b6040805133815284356020808301919091528501358183015290517f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc09181900360600190a161086b34156012610c80565b6040820151610886906001600160a01b031633146013610c80565b608082015160208401351161099857816020015182606001516108a99190610fc6565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b0390811680835260208086015181850190815260408088015185168187019081526060808a015181890190815260a0808c015189166080808c019182528c51838d019081526005600055436001558751998a019a909a529651958801959095529251881691860191909152519284019290925251909316928101929092525160c082015260e00160405160208183030381529060405260029080519060200190610991929190610ca5565b5050505050565b600080805560018190556109ae90600290610d29565b505050565b6000606060005460028080546109c890610e25565b80601f01602080910402602001604051908101604052809291908181526020018280546109f490610e25565b8015610a415780601f10610a1657610100808354040283529160200191610a41565b820191906000526020600020905b815481529060010190602001808311610a2457829003601f168201915b50505050509050915091509091565b610a60600260005414600d610c80565b610a7a81351580610a7357506001548235145b600e610c80565b600080805560028054610a8c90610e25565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab890610e25565b8015610b055780601f10610ada57610100808354040283529160200191610b05565b820191906000526020600020905b815481529060010190602001808311610ae857829003601f168201915b5050505050806020019051810190610b1d91906110c6565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808201529091507fc46825bad574405d7958995edaec2978c76057131a41e5fc5cc2e6f74b174a259060a00160405180910390a1610b873415600b610c80565b6040810151610ba2906001600160a01b03163314600c610c80565b610bed6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015185168187019081528884013560608089019182528a8401356080808b01918252828d013560a0808d019182526003600055436001558751998a019a909a52965195880195909552925190971696850196909652945190830152925191810191909152905160c082015260e0016102f2565b816107315760405163100960cb60e01b81526004810182905260240160405180910390fd5b828054610cb190610e25565b90600052602060002090601f016020900481019282610cd35760008555610d19565b82601f10610cec57805160ff1916838001178555610d19565b82800160010185558215610d19579182015b82811115610d19578251825591602001919060010190610cfe565b50610d25929150610d66565b5090565b508054610d3590610e25565b6000825580601f10610d45575050565b601f016020900490600052602060002090810190610d639190610d66565b50565b5b80821115610d255760008155600101610d67565b600060408284031215610d8d57600080fd5b50919050565b600060408284031215610da557600080fd5b610daf8383610d7b565b9392505050565b82815260006020604081840152835180604085015260005b81811015610dea57858101830151858201606001528201610dce565b81811115610dfc576000606083870101525b50601f01601f191692909201606001949350505050565b600060808284031215610d8d57600080fd5b600181811c90821680610e3957607f821691505b60208210811415610d8d57634e487b7160e01b600052602260045260246000fd5b6040516060810167ffffffffffffffff81118282101715610e8b57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c0810167ffffffffffffffff81118282101715610e8b57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114610ed957600080fd5b919050565b600060608284031215610ef057600080fd5b610ef8610e5a565b610f0183610ec2565b815260208301516020820152604083015160408201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610f4f57600080fd5b80604085015250509392505050565b600060c08284031215610f7057600080fd5b610f78610e91565b610f8183610ec2565b815260208301516020820152610f9960408401610ec2565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b600082821015610fe657634e487b7160e01b600052601160045260246000fd5b500390565b600060c08284031215610ffd57600080fd5b611005610e91565b61100e83610ec2565b81526020830151602082015261102660408401610ec2565b60408201526060830151606082015261104160808401610ec2565b608082015260a083015160a08201528091505092915050565b600060c0828403121561106c57600080fd5b611074610e91565b61107d83610ec2565b81526020830151602082015261109560408401610ec2565b604082015260608301516060820152608083015160808201526110ba60a08401610ec2565b60a08201529392505050565b6000606082840312156110d857600080fd5b6110e0610e5a565b6110e983610ec2565b81526020830151602082015261110160408401610ec2565b6040820152939250505056fea2646970667358221220fcd53d07fc12cd14866c0a67e8c68d2a36082731116b74daa261471fb40342a064736f6c634300080c0033`,
  BytecodeLen: 5221,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:53:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:61:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:71:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:82:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:92:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:98:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:98:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "A": A,
  "B": B,
  "C": C
  };
export const _APIs = {
  };

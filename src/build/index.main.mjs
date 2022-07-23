// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

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
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  
  return {
    infos: {
      howManyAttached: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v137, v141] = svs;
            return (await ((async () => {
              
              
              return v141;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v137, v141] = svs;
            return (await ((async () => {
              
              
              return v141;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        }
      },
    views: {
      2: [ctc0, ctc1],
      4: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:22:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:22:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v139, time: v138, didSend: v22, from: v137 } = txn1;
      
      ;
      
      const v141 = stdlib.checkedBigNumberify('./index.rsh:28:34:decimal', stdlib.UInt_max, '0');
      const v142 = v138;
      
      if (await (async () => {
        const v148 = stdlib.lt(v141, stdlib.checkedBigNumberify('./index.rsh:31:22:decimal', stdlib.UInt_max, '5'));
        
        return v148;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v139, time: v138, didSend: v22, from: v137 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:23:23:application',
    fs: ['at ./index.rsh:23:23:application call to [unknown function] (defined at: ./index.rsh:23:23:function exp)', 'at ./index.rsh:23:23:application call to "liftedInteract" (defined at: ./index.rsh:23:23:application)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  let v141 = stdlib.checkedBigNumberify('./index.rsh:28:34:decimal', stdlib.UInt_max, '0');
  let v142 = v138;
  
  while (await (async () => {
    const v148 = stdlib.lt(v141, stdlib.checkedBigNumberify('./index.rsh:31:22:decimal', stdlib.UInt_max, '5'));
    
    return v148;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v155], secs: v157, time: v156, didSend: v61, from: v154 } = txn2;
    undefined /* setApiDetails */;
    ;
    const v159 = null;
    await txn2.getOutput('Bobs_attach', 'v159', ctc0, v159);
    await stdlib.mapSet(map0, v154, null);
    const v166 = stdlib.add(v141, stdlib.checkedBigNumberify('./index.rsh:40:26:decimal', stdlib.UInt_max, '1'));
    const cv141 = v166;
    const cv142 = v156;
    
    v141 = cv141;
    v142 = cv142;
    
    continue;
    
    }
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v174], secs: v176, time: v175, didSend: v115, from: v173 } = txn2;
  undefined /* setApiDetails */;
  const v178 = stdlib.addressEq(v173, v137);
  stdlib.assert(v178, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:48:24:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:47:5:application call to [unknown function] (defined at: ./index.rsh:48:15:function exp)'],
    msg: null,
    who: 'Alice'
    });
  ;
  const v180 = null;
  await txn2.getOutput('AliceAPI_end', 'v180', ctc0, v180);
  return;
  
  
  
  
  };
export async function _AliceAPI_end2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AliceAPI_end2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AliceAPI_end2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v137, v141] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc2, ctc3]);
  const v167 = ctc.selfAddress();
  const v169 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:47:5:application',
    fs: ['at ./index.rsh:47:5:application call to [unknown function] (defined at: ./index.rsh:47:5:function exp)'],
    msg: 'in',
    who: 'AliceAPI_end'
    });
  
  const v171 = stdlib.addressEq(v167, v137);
  stdlib.assert(v171, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:48:24:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:47:5:application call to [unknown function] (defined at: ./index.rsh:48:15:function exp)'],
    msg: null,
    who: 'AliceAPI_end'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v137, v141, v169],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v174], secs: v176, time: v175, didSend: v115, from: v173 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "AliceAPI_end"
        });
      ;
      const v180 = null;
      const v181 = await txn1.getOutput('AliceAPI_end', 'v180', ctc0, v180);
      
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v174], secs: v176, time: v175, didSend: v115, from: v173 } = txn1;
  undefined /* setApiDetails */;
  const v178 = stdlib.addressEq(v173, v137);
  stdlib.assert(v178, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:48:24:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:47:5:application call to [unknown function] (defined at: ./index.rsh:48:15:function exp)'],
    msg: null,
    who: 'AliceAPI_end'
    });
  ;
  const v180 = null;
  const v181 = await txn1.getOutput('AliceAPI_end', 'v180', ctc0, v180);
  stdlib.protect(ctc0, await interact.out(v174, v181), {
    at: './index.rsh:47:5:application',
    fs: ['at ./index.rsh:47:5:application call to [unknown function] (defined at: ./index.rsh:47:5:function exp)', 'at ./index.rsh:49:7:application call to "k2" (defined at: ./index.rsh:47:5:function exp)'],
    msg: 'out',
    who: 'AliceAPI_end'
    });
  
  return;
  
  
  
  };
export async function _Bobs_attach4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bobs_attach4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bobs_attach4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v137, v141] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3]);
  const v151 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:34:10:application call to [unknown function] (defined at: ./index.rsh:34:10:function exp)', 'at ./index.rsh:34:10:application call to [unknown function] (defined at: ./index.rsh:34:10:function exp)'],
    msg: 'in',
    who: 'Bobs_attach'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v137, v141, v151],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:35:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v155], secs: v157, time: v156, didSend: v61, from: v154 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bobs_attach"
        });
      ;
      const v159 = null;
      const v160 = await txn1.getOutput('Bobs_attach', 'v159', ctc0, v159);
      
      await stdlib.simMapSet(sim_r, 0, v154, null);
      const v166 = stdlib.add(v141, stdlib.checkedBigNumberify('./index.rsh:40:26:decimal', stdlib.UInt_max, '1'));
      const v272 = v166;
      const v274 = stdlib.lt(v166, stdlib.checkedBigNumberify('./index.rsh:31:22:decimal', stdlib.UInt_max, '5'));
      if (v274) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v155], secs: v157, time: v156, didSend: v61, from: v154 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v159 = null;
  const v160 = await txn1.getOutput('Bobs_attach', 'v159', ctc0, v159);
  if (v61) {
    stdlib.protect(ctc0, await interact.out(v155, v160), {
      at: './index.rsh:32:10:application',
      fs: ['at ./index.rsh:32:10:application call to [unknown function] (defined at: ./index.rsh:32:10:function exp)', 'at ./index.rsh:38:10:application call to "k" (defined at: ./index.rsh:36:11:function exp)', 'at ./index.rsh:36:11:application call to [unknown function] (defined at: ./index.rsh:36:11:function exp)'],
      msg: 'out',
      who: 'Bobs_attach'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v154, null);
  const v166 = stdlib.add(v141, stdlib.checkedBigNumberify('./index.rsh:40:26:decimal', stdlib.UInt_max, '1'));
  const v272 = v166;
  const v274 = stdlib.lt(v166, stdlib.checkedBigNumberify('./index.rsh:31:22:decimal', stdlib.UInt_max, '5'));
  if (v274) {
    return;
    }
  else {
    return;
    }
  
  
  };
export async function AliceAPI_end(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AliceAPI_end expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AliceAPI_end expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 2, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [2]');
  if (step == 2) {return _AliceAPI_end2(ctcTop, interact);}
  };
export async function Bobs_attach(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bobs_attach expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bobs_attach expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Bobs_attach4(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`AliceAPI_end()byte[0]`, `Bobs_attach()byte[0]`],
    pure: [`howManyAttached()uint64`],
    sigs: [`AliceAPI_end()byte[0]`, `Bobs_attach()byte[0]`, `howManyAttached()uint64`]
    },
  appApproval: `BiAIAAECBPaN7PsC7ID/kA0DBSYCAQAAIjUAMRhBAdMpZEkiWzUBgQhbNQIxGSMSQQAIMQAoKGZCAaE2GgAXSUEAVCI1BCM1BkkhBAxAADtJIQUMQAAsIQUSRDQBSSUMQAAQJRJEKGRJNQNXIAg1B0IBeCQSRChkSTUDVyAINQdCAWghBBJEKUIAKoHJsP/SAhJEKUIAaDYaAhc1BDYaAzYaARdJJAxAAJJJIQYMQABNIQYSRCU0ARJENARJIhJMNAISEUQoZDUDSTUFNf+ABMiaD7s0/1CwgAgAAAAAAAAAn7ApNQcxACiAAQFmNANXACA0A4EgWyMIMgZCAGdIJDQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AEJTy31zT/ULAxADQDVwAgEkSACAAAAAAAAAC0sCk1B0IAZyISRIGgjQaIAMoiNAESRDQESSISTDQCEhFEgARfDav6sDEAIjIGQgAANf81/jX9NP4hBwxBABg0/TT+FlAoSwFXAChnSCU1ATIGNQJCADQ0/TT+FlAoSwFXAChnSCQ1ATIGNQJCABwxGSEHEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCMxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 40,
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v174",
                "type": "bool"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v155",
                "type": "bool"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
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
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v159",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v180",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "AliceAPI_end",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bobs_attach",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
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
            "components": [
              {
                "internalType": "bool",
                "name": "v174",
                "type": "bool"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v155",
                "type": "bool"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
    "inputs": [],
    "name": "howManyAttached",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200108038038062001080833981016040819052620000269162000299565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156008620000b5565b6200008d620001b6565b805133905260208082018051600090525143910152620000ad81620000df565b505062000341565b81620000db5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b602081015151600511156200016557604080518082018252600080825260208083018281528551516001600160a01b031680855286830151518252600490935543600155845191820192909252905192810192909252906060015b6040516020818303038152906040526002908051906020019062000160929190620001f3565b505050565b604080518082018252600080825260208083018281528551516001600160a01b031680855286830151518252600290935543600155845191820192909252905192810192909252906060016200013a565b6040805160608101825260009181019182529081908152602001620001ee604051806040016040528060008152602001600081525090565b905290565b828054620002019062000304565b90600052602060002090601f01602090048101928262000225576000855562000270565b82601f106200024057805160ff191683800117855562000270565b8280016001018555821562000270579182015b828111156200027057825182559160200191906001019062000253565b506200027e92915062000282565b5090565b5b808211156200027e576000815560010162000283565b600060408284031215620002ac57600080fd5b604080519081016001600160401b0381118282101715620002dd57634e487b7160e01b600052604160045260246000fd5b6040528251815260208301518015158114620002f857600080fd5b60208201529392505050565b600181811c908216806200031957607f821691505b602082108114156200033b57634e487b7160e01b600052602260045260246000fd5b50919050565b610d2f80620003516000396000f3fe6080604052600436106100845760003560e01c806377897e791161005657806377897e7914610106578063832307571461011e578063ab3bc15a14610133578063ab53f2c61461013b578063e2186a081461015e57005b80631e93b0f11461008d5780633bc5b7bf146100b15780633e59bac4146100de57806353e32851146100f157005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100bd57600080fd5b506100d16100cc366004610a2f565b610171565b6040516100a89190610a69565b61008b6100ec366004610ac8565b61019d565b3480156100fd57600080fd5b5061009e6101cd565b61010e6102ad565b60405190151581526020016100a8565b34801561012a57600080fd5b5060015461009e565b61010e6102e5565b34801561014757600080fd5b50610150610316565b6040516100a8929190610ae4565b61008b61016c366004610ac8565b6103b3565b6040805160608101825260008082526020820181905291810191909152610197826103df565b92915050565b60408051808201909152600080825260208201526101c96101c336849003840184610bf2565b826104b7565b5050565b600060026000541415610284576000600280546101e990610c0e565b80601f016020809104026020016040519081016040528092919081815260200182805461021590610c0e565b80156102625780601f1061023757610100808354040283529160200191610262565b820191906000526020600020905b81548152906001019060200180831161024557829003601f168201915b505050505080602001905181019061027a9190610c43565b6020015192915050565b6004600054141561029e576000600280546101e990610c0e565b6102aa60006007610636565b90565b60006102b76108e1565b60208082015160009081905260408051808201909152818152918201526102de82826104b7565b5192915050565b60006102ef6108e1565b602080820151600090819052604080518082019091528181529182015261027a828261065b565b60006060600054600280805461032b90610c0e565b80601f016020809104026020016040519081016040528092919081815260200182805461035790610c0e565b80156103a45780601f10610379576101008083540402835291602001916103a4565b820191906000526020600020905b81548152906001019060200180831161038757829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526101c96103d936849003840184610bf2565b8261065b565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561042b5761042b610a53565b14156104a8576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561046c5761046c610a53565b600181111561047d5761047d610a53565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b6104c7600260005414600b610636565b81516104e29015806104db57508251600154145b600c610636565b6000808055600280546104f490610c0e565b80601f016020809104026020016040519081016040528092919081815260200182805461052090610c0e565b801561056d5780601f106105425761010080835404028352916020019161056d565b820191906000526020600020905b81548152906001019060200180831161055057829003601f168201915b50505050508060200190518101906105859190610c43565b90507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd33846040516105b8929190610ca9565b60405180910390a180516105d8906001600160a01b031633146009610636565b6105e43415600a610636565b604051600081527f214a3f1b778340ed11717c52d12254535f5203c0b409b3a14394059b64dff9769060200160405180910390a16000808352808055600181905561063190600290610910565b505050565b816101c95760405163100960cb60e01b81526004810182905260240160405180910390fd5b61066b600460005414600e610636565b815161068690158061067f57508251600154145b600f610636565b60008080556002805461069890610c0e565b80601f01602080910402602001604051908101604052809291908181526020018280546106c490610c0e565b80156107115780601f106106e657610100808354040283529160200191610711565b820191906000526020600020905b8154815290600101906020018083116106f457829003601f168201915b50505050508060200190518101906107299190610c43565b90507fa5a264ad7bcb9788928e7795891942e9811712d8346314f9c3672363842f4e35338460405161075c929190610ca9565b60405180910390a16107703415600d610636565b604051600081527f1039e87788fa5a0d59714d7cd56555f0c9c9c93882ffa595abe3d5c0011c5cef9060200160405180910390a1600060208381018290523382526004905260409020805462ff00ff191660011790556107ce61094a565b815181516001600160a01b03909116905260208201516107f090600190610cd3565b602080830180519290925290514391015261080a81610810565b50505050565b6020810151516005111561088e57604080518082018252600080825260208083018281528551516001600160a01b031680855286830151518252600490935543600155845191820192909252905192810192909252906060015b60405160208183030381529060405260029080519060200190610631929190610981565b604080518082018252600080825260208083018281528551516001600160a01b0316808552868301515182526002909355436001558451918201929092529051928101929092529060600161086a565b50565b60405180604001604052806000815260200161090b60405180602001604052806000151581525090565b905290565b50805461091c90610c0e565b6000825580601f1061092c575050565b601f0160209004906000526020600020908101906108de9190610a05565b604080516060810182526000918101918252908190815260200161090b604051806040016040528060008152602001600081525090565b82805461098d90610c0e565b90600052602060002090601f0160209004810192826109af57600085556109f5565b82601f106109c857805160ff19168380011785556109f5565b828001600101855582156109f5579182015b828111156109f55782518255916020019190600101906109da565b50610a01929150610a05565b5090565b5b80821115610a015760008155600101610a06565b6001600160a01b03811681146108de57600080fd5b600060208284031215610a4157600080fd5b8135610a4c81610a1a565b9392505050565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110610a8e57634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b600060408284031215610ac257600080fd5b50919050565b600060408284031215610ada57600080fd5b610a4c8383610ab0565b82815260006020604081840152835180604085015260005b81811015610b1857858101830151858201606001528201610afc565b81811115610b2a576000606083870101525b50601f01601f191692909201606001949350505050565b6000818303604080821215610b5557600080fd5b805181810167ffffffffffffffff8282108183111715610b8557634e487b7160e01b600052604160045260246000fd5b818452829550863583526020601f1986011215610ba157600080fd5b835194506020850191508482108183111715610bcd57634e487b7160e01b600052604160045260246000fd5b509091526020840135908115158214610be557600080fd5b9082526020015292915050565b600060408284031215610c0457600080fd5b610a4c8383610b41565b600181811c90821680610c2257607f821691505b60208210811415610ac257634e487b7160e01b600052602260045260246000fd5b600060408284031215610c5557600080fd5b6040516040810181811067ffffffffffffffff82111715610c8657634e487b7160e01b600052604160045260246000fd5b6040528251610c9481610a1a565b81526020928301519281019290925250919050565b6001600160a01b038316815260608101610a4c602083018480518252602090810151511515910152565b60008219821115610cf457634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220616edfd2491d1a259ae9d2fe78261a605498fbb5ea6022f47f6aaf28f00cab7364736f6c634300080c0033`,
  BytecodeLen: 4224,
  Which: `oD`,
  version: 7,
  views: {
    howManyAttached: `howManyAttached`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:45:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:51:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:28:33:after expr stmt semicolon',
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
  "Alice": Alice,
  "AliceAPI_end": AliceAPI_end,
  "Bobs_attach": Bobs_attach
  };
export const _APIs = {
  AliceAPI: {
    end: AliceAPI_end
    },
  Bobs: {
    attach: Bobs_attach
    }
  };

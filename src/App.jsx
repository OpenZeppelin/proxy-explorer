import './App.css';
import React, { useReducer } from 'react';

import { useWeb3Network } from '@openzeppelin/network/react';

import { DispatchContext, Web3Context } from './contexts';
import { CHANGE_TARGET_ADDRESS, CHANGE_NETWORK } from './actions';

import NavBar from './components/NavBar';
import NetworkSelector from './components/NetworkSelector';
import AddressSelector from './components/AddressSelector';
import ProxyInspector from './components/ProxyInspector';

const INFURA_PROJECT_ID = 'c3422181d0594697a38defe7706a1e5b';
const ZEP_TOKEN_ADDRESS = '0x00fdae9174357424a78afaad98da36fd66dd9e03';
const INITIAL_STATE = { targetAddress: ZEP_TOKEN_ADDRESS, network: 'mainnet' };

function reducer(state, action) {
  switch (action.type) {
    case CHANGE_TARGET_ADDRESS:
      return { ...state, targetAddress: action.value };
    case CHANGE_NETWORK:
      return { ...state, network: action.value };
    default:
      throw new Error(`Unknown action: '${action.type}'`);
  }
}

function App() {
  const [ state, dispatch ] = useReducer(reducer, INITIAL_STATE);
  const { targetAddress, network } = state;

  const { lib: web3 } = useWeb3Network(`https://${network}.infura.io/v3/${INFURA_PROJECT_ID}`);

  return (
    <DispatchContext.Provider value={ dispatch }>
      <Web3Context.Provider value={ web3 }>
        <div className="Wrapper">
          <NavBar />
          <div className='Container'>
            <h1>OpenZeppelin Proxy Explorer</h1>
            <div className="Form">
              <NetworkSelector defaultNetwork={ INITIAL_STATE.network }/>
              <AddressSelector defaultAddress={ INITIAL_STATE.targetAddress } />
            </div>
            { targetAddress !== null && <ProxyInspector proxyAddress={ targetAddress } /> }
          </div>
        </div>
      </Web3Context.Provider>
    </DispatchContext.Provider>
  );
}

export default App;

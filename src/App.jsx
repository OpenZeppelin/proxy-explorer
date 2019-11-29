import React, { useReducer } from 'react';
import './App.css';
import { DispatchContext, Web3Context } from './contexts';
import NetworkSelector from './NetworkSelector';
import AddressSelector from './AddressSelector';
import ProxyInspector from './ProxyInspector';

import { useWeb3Network } from '@openzeppelin/network/react';

const infuraProjectId = 'c3422181d0594697a38defe7706a1e5b';

const ZEP_TOKEN_ADDRESS = '0x00fdae9174357424a78afaad98da36fd66dd9e03';
const INITIAL_STATE = { targetAddress: ZEP_TOKEN_ADDRESS, network: 'mainnet' };

function reducer(state, action) {
  switch (action.type) {
    case 'changeTargetAddress':
      return { ...state, targetAddress: action.value };
    case 'changeNetwork':
      return { ...state, network: action.value };
    default:
      throw new Error(`Unknown action: '${action.type}'`);
  }
}

function App() {
  const [ state, dispatch ] = useReducer(reducer, INITIAL_STATE);
  const { targetAddress, network } = state;

  const { networkId, networkName, providerName, lib: web3 } = useWeb3Network(`https://${network}.infura.io/v3/${infuraProjectId}`);

  return (
    <DispatchContext.Provider value={ dispatch }>
      <Web3Context.Provider value={ web3 }>
        <div className="App">
          <h1>OpenZeppelin Proxy Explorer</h1>
          <div>
            <NetworkSelector defaultNetwork={ INITIAL_STATE.network }/>
          </div>
          <div>Network: {networkId ? `${networkId} – ${networkName}` : 'No connection'}</div>
          <div>State network: {network}</div>
          <div>Provider: {providerName}</div>
          <div>
            <AddressSelector defaultAddress={ INITIAL_STATE.targetAddress } />
          </div>
          <div>
            { targetAddress !== null && <ProxyInspector proxyAddress={ targetAddress } /> }
          </div>
        </div>
      </Web3Context.Provider>
    </DispatchContext.Provider>
  );
}

export default App;

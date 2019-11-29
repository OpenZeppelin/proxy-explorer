import React, { useState } from 'react';
import './App.css';
import AddressSelector from './AddressSelector.js';
import ProxyInspector from './ProxyInspector.js';

import { useWeb3Network } from '@openzeppelin/network/react';

const infuraProjectId = 'c3422181d0594697a38defe7706a1e5b';

const ZEP_TOKEN_ADDRESS = '0x00fdae9174357424a78afaad98da36fd66dd9e03';

function App() {
  const web3Context = useWeb3Network(`wss://mainnet.infura.io/ws/v3/${infuraProjectId}`);
  const { networkId, networkName, providerName, lib: web3 } = web3Context;

  const [ proxyAddress, setProxyAddress ] = useState(ZEP_TOKEN_ADDRESS);

  return (
    <div className="App">
      <div>
        <h1>OpenZeppelin Proxy Explorer</h1>
        <div>Network: {networkId ? `${networkId} – ${networkName}` : 'No connection'}</div>
        <div>Provider: {providerName}</div>
      </div>
      <div>
        <AddressSelector web3={web3} onAddressChanged={setProxyAddress} defaultAddress={ZEP_TOKEN_ADDRESS} />
      </div>
      <div>
        { proxyAddress !== null && <ProxyInspector web3={web3} proxyAddress={proxyAddress} /> }
      </div>
    </div>
  );
}

export default App;

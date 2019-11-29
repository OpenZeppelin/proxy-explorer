import React, { useState, useEffect } from 'react';
import ProxyView from './ProxyView';

export default function ({ proxyAddress, web3 }) {
  const [ proxyData, setProxyData ] = useState(null);

  useEffect(() => {
    (async () => {
      const implSlot = await web3.eth.getStorageAt(proxyAddress, '0x7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c3');
      const adminSlot = await web3.eth.getStorageAt(proxyAddress, '0x7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c3');

      const isProxy = implSlot !== '0x0000000000000000000000000000000000000000000000000000000000000000';

      setProxyData({ isProxy, implSlot, adminSlot })
    })();
  }, [web3.eth, proxyAddress]);

  return (
      proxyData === null ?
        <span> 'loading' </span> :
        proxyData.isProxy ?
          <ProxyView implAddress={ proxyData.implSlot } adminAddress={ proxyData.adminSlot } /> :
          <span> 'not a proxy' </span>
  );
}

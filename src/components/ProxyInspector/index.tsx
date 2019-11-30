import React, { useState, useEffect, useContext } from 'react';
import { Web3Context } from '../../contexts';
import ProxyView from '../ProxyView';
import './index.css';

type ProxyInspectorProps = { proxyAddress: string, networkName: string };
export default function ({ proxyAddress, networkName }: ProxyInspectorProps) {
  const web3 = useContext(Web3Context)!;

  type ProxyData = { isProxy: boolean, implSlot?: string, adminSlot?: string };
  const [ proxyData, setProxyData ] = useState<ProxyData | null>(null);

  const OLD_IMPL_SLOT = '0x7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c3';
  const OLD_ADMIN_SLOT = '0x10d6a54a4754c8869d6886b5f5d7fbfa5b4522237ea5c60d11bc4e7a1ff9390b';
  const NEW_IMPL_SLOT = '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc';
  const NEW_ADMIN_SLOT = '0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103';

  useEffect(() => {
    (async () => {
      setProxyData(null); // enter loading state

      const [ oldImplSlot, oldAdminSlot, newImplSlot, newAdminSlot ] = await Promise.all([
        web3.eth.getStorageAt(proxyAddress, OLD_IMPL_SLOT),
        web3.eth.getStorageAt(proxyAddress, OLD_ADMIN_SLOT),
        web3.eth.getStorageAt(proxyAddress, NEW_IMPL_SLOT),
        web3.eth.getStorageAt(proxyAddress, NEW_ADMIN_SLOT),
      ]);

      if (oldImplSlot !== '0x0000000000000000000000000000000000000000000000000000000000000000') {
        setProxyData({ isProxy: true, implSlot: oldImplSlot, adminSlot: oldAdminSlot });
      } else if (newImplSlot !== '0x0000000000000000000000000000000000000000000000000000000000000000') {
        setProxyData({ isProxy: true, implSlot: newImplSlot, adminSlot: newAdminSlot });
      } else {
        setProxyData({ isProxy: false });
      }
    })();
  }, [web3, proxyAddress]);

  if (proxyData === null) {
    return (<div className='Loading'>Loading...</div>);
  }

  if (!proxyData.isProxy) {
    return (<div className='NotProxy'>This does not look like a proxy</div>);
  }

  // When isProxy is true, implSlot and adminSlot are not null
  return (<ProxyView implSlot={ proxyData.implSlot! } adminSlot={ proxyData.adminSlot! } networkName={ networkName } />);
}

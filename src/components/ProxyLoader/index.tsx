import React, { useState, useEffect, useContext } from 'react';

import { Web3Context } from '../../contexts';
import { Network } from '../../networks';
import { analyze, Proxy } from '../../proxy-inspector';
import ProxyView from '../ProxyView';

import './index.css';

type ProxyLoaderProps = { address: string, network: Network };
export default function ({ address, network }: ProxyLoaderProps) {
  const web3 = useContext(Web3Context)!;

  type ProxyData =
    | { isProxy: false }
    | { isProxy: true, proxy: Proxy };

  const [ proxyData, setProxyData ] = useState<ProxyData | null>(null);

  useEffect(() => {
    (async () => {
      setProxyData(null); // enter loading state

      const proxy = await analyze(web3, address);

      if (proxy === null) {
        setProxyData({ isProxy: false });
      } else {
        setProxyData({ isProxy: true, proxy });
      }
    })();
  }, [web3, address]);

  if (proxyData === null) {
    return (<div className='Loading'>Loading...</div>);
  }

  if (!proxyData.isProxy) {
    return (<div className='NotProxy'>This does not look like a proxy</div>);
  }

  return (<ProxyView proxy={ proxyData.proxy } network={ network } />);
}

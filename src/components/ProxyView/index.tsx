import React from 'react';

import { Network } from '../../networks';

import './index.css';

import { Proxy } from '../../proxy-inspector';

type ProxyViewProps = { proxy: Proxy, network: Network };
export default function ({ proxy, network }: ProxyViewProps) {
  return (
    <div className='ProxyView'>
      <ProxyViewItem label='Implementation' value={proxy.implementation} network={network} />
      <ProxyViewItem label='Admin' value={proxy.admin} network={network} />
    </div>
  );
}

type ProxyViewItemProps = { label: string, value:string, network: Network };
function ProxyViewItem({ label, value, network }: ProxyViewItemProps) {
  return (
    <div className='ProxyViewItem'>
      <span className='Label'>{label}:</span>
      <a target='_blank' rel='noopener noreferrer' href={network.explorer + '/address/' + value} className='Address'>{value}</a>
    </div>
  );
}

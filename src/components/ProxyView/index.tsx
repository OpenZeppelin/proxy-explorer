import React from 'react';
import './index.css';

import { Proxy } from '../../proxy-inspector';

function getLink(networkName: string, value: string) {
  if (networkName === 'mainnet') {
    return `https://etherscan.io/address/${value}`;
  } else {
    return `https://${networkName}.etherscan.io/address/${value}`;
  }
}

type ProxyViewProps = { proxy: Proxy, networkName: string };
export default function ({ proxy, networkName }: ProxyViewProps) {
  return (
    <div className='ProxyView'>
      <ProxyViewItem label='Implementation' value={proxy.implementation} networkName={networkName} />
      <ProxyViewItem label='Admin' value={proxy.admin} networkName={networkName} />
    </div>
  );
}

type ProxyViewItemProps = { label: string, value:string, networkName: string };
function ProxyViewItem({ label, value, networkName }: ProxyViewItemProps) {
  return (
    <div className='ProxyViewItem'>
      <span className='Label'>{label}:</span>
      <a target='_blank' rel='noopener noreferrer' href={getLink(networkName, value)} className='Address'>{value}</a>
    </div>
  );
}

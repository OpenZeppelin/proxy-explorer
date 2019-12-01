import React from 'react';

import { Network } from '../../networks';

import './index.css';

function slotToAddress(slot: string): string {
  return '0x' + slot.substring(26);
}

type ProxyViewProps = { implSlot: string, adminSlot:string, network: Network };
export default function ({ implSlot, adminSlot, network }: ProxyViewProps) {
  const implAddress = slotToAddress(implSlot);
  const adminAddress = slotToAddress(adminSlot);

  return (
    <div className='ProxyView'>
      <ProxyViewItem label='Implementation' value={implAddress} network={network} />
      <ProxyViewItem label='Admin' value={adminAddress} network={network} />
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

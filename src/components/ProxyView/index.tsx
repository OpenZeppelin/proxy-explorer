import React from 'react';
import './index.css';

function slotToAddress(slot: string): string {
  return '0x' + slot.substring(26);
}

function getLink(networkName: string, value: string) {
  if (networkName === 'mainnet') {
    return `https://etherscan.io/address/${value}`;
  } else {
    return `https://${networkName}.etherscan.io/address/${value}`;
  }
}

type ProxyViewProps = { implSlot: string, adminSlot:string, networkName: string };
export default function ({ implSlot, adminSlot, networkName }: ProxyViewProps) {
  const implAddress = slotToAddress(implSlot);
  const adminAddress = slotToAddress(adminSlot);

  return (
    <div className='ProxyView'>
      <ProxyViewItem label='Implementation' value={implAddress} networkName={networkName} />
      <ProxyViewItem label='Admin' value={adminAddress} networkName={networkName} />
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

import React from 'react';
import './index.css';

function slotToAddress(slot) {
  return '0x' + slot.substring(26);
}

function getLink(networkName, value) {
  return 'http://example.com';
}

export default function ({ implSlot, adminSlot, networkName }) {
  const implAddress = slotToAddress(implSlot);
  const adminAddress = slotToAddress(adminSlot);

  return (
    <div className='ProxyView'>
      <ProxyViewItem label='Implementation' value={implAddress} networkName={networkName} />
      <ProxyViewItem label='Admin' value={adminAddress} networkName={networkName} />
    </div>
  );
}

function ProxyViewItem({ label, value, networkName }) {
  return (
    <div className='ProxyViewItem'>
      <span className='Label'>{label}:</span>
      <a target='_blank' rel='noopener noreferrer' href={getLink(networkName, value)} className='Address'>{value}</a>
    </div>
  );
}

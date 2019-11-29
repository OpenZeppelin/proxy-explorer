import React from 'react';

function slotToAddress(slot) {
  return '0x' + slot.substring(26);
}

export default function ({ implSlot, adminSlot }) {
  const implAddress = slotToAddress(implSlot);
  const adminAddress = slotToAddress(adminSlot);

  return (
    <div>
      <span> Implementation Address: { implAddress }  </span>
      <br/>
      <span> Admin Address: { adminAddress }  </span>
    </div>
  );
}

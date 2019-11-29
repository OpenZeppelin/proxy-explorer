import React from 'react';

export default function ({ implAddress, adminAddress }) {
  return (
      <div>
        <span> Implementation Address: { implAddress }  </span>
        <br/>
        <span> Admin Address: { adminAddress }  </span>
      </div>
  );
}

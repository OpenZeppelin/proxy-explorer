import React, { useState } from 'react';

export default function ({ onAddressChanged, web3, defaultAddress }) {
  const [ errorMessage, setErrorMessage ] = useState('');

  const handleChange = (event) => {
    const input = event.target.value;
    if (web3.utils.isAddress(input)) {
      setErrorMessage('');
      onAddressChanged(input);
    } else {
      setErrorMessage('invalid address :(');
      onAddressChanged(null);
    }
  };

  return (
    <>
      <span> Proxy: </span>
      <input type='text' defaultValue={defaultAddress} onChange={handleChange} />
      <span> {errorMessage} </span>
    </>
  );
}

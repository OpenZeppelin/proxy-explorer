import React, { useState, useContext } from 'react';
import { DispatchContext, Web3Context } from '../../contexts';

export default function ({ defaultAddress }) {
  const [ errorMessage, setErrorMessage ] = useState('');

  const dispatch = useContext(DispatchContext);
  const web3 = useContext(Web3Context);

  const handleChange = (event) => {
    const input = event.target.value;
    if (web3.utils.isAddress(input)) {
      setErrorMessage('');
      dispatch({ type: 'changeTargetAddress', value: input })
    } else {
      setErrorMessage('invalid address :(');
      dispatch({ type: 'changeTargetAddress', value: null })
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

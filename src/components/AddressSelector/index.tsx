import React, { useState, useContext } from 'react';
import { DispatchContext, Web3Context } from '../../contexts';
import '../styles/Selector.css';

type AddressSelectorProps = { defaultAddress: string };
export default function ({ defaultAddress }: AddressSelectorProps) {
  const [ errorMessage, setErrorMessage ] = useState('');

  const dispatch = useContext(DispatchContext)!;
  const web3 = useContext(Web3Context)!;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (web3.utils.isAddress(input)) {
      setErrorMessage('');
      dispatch({ type: 'changeTargetAddress', value: input });
    } else {
      setErrorMessage('Invalid address');
      dispatch({ type: 'changeTargetAddress', value: null });
    }
  };

  return (
    <div className='FormField'>
      <label>Proxy:</label>
      <div className='FormInput'>
        <input type='text' defaultValue={defaultAddress} onChange={handleChange} />
        <p className='ErrorMsg'>{errorMessage}</p>
      </div>
    </div>
  );
}

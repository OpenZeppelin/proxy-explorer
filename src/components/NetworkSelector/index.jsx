import React, { useContext } from 'react';
import { DispatchContext } from '../../contexts';

export default function ({ defaultNetwork }) {
  const dispatch = useContext(DispatchContext);

  const handleChange = (event) => {
    const input = event.target.value;
    dispatch({ type: 'changeNetwork', value: input })
  };

  return (
    <select defaultValue={defaultNetwork} onChange={handleChange}>
      <option value='mainnet'>Mainnet</option>
      <option value='rinkeby'>Rinkeby</option>
    </select>
  );
}

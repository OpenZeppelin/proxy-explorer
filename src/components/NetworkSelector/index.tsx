import React, { useContext } from 'react';
import { DispatchContext } from '../../contexts';
import '../styles/Selector.css';

import { NetworkId, networks } from '../../networks';

type NetworkSelectorProps = { defaultNetwork: NetworkId };
export default function ({ defaultNetwork }: NetworkSelectorProps) {
  const dispatch = useContext(DispatchContext)!;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const input = event.target.value;
    dispatch({ type: 'changeNetwork', value: networks[input] });
  };

  return (
    <div className='FormField'>
      <label>Network:</label>
      <div className='FormInput'>
        <select defaultValue={defaultNetwork} onChange={handleChange}>
          {Object.keys(networks).map(id =>
            <option value={id}>{networks[id].name}</option>
          )}
        </select>
      </div>
    </div>
  );
}

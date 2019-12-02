import { Dispatch, createContext } from 'react';
import { Action } from './actions';

import Web3 from 'web3';

export const Web3Context = createContext<Web3 | null>(null);
export const DispatchContext = createContext<Dispatch<Action> | null>(null);

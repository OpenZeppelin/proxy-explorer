import { Network } from './networks';

type ChangeAddressAction = { type: 'changeAddress', value: string | null };
type ChangeNetworkAction = { type: 'changeNetwork', value: Network };

export type Action =
  | ChangeAddressAction
  | ChangeNetworkAction;

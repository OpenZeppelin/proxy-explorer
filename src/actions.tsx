import { Network } from './networks';

type ChangeTargetAddressAction = { type: 'changeTargetAddress', value: string | null };
type ChangeNetworkAction = { type: 'changeNetwork', value: Network };

export type Action =
  | ChangeTargetAddressAction
  | ChangeNetworkAction;

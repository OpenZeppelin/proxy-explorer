type ChangeTargetAddressAction = { type: 'changeTargetAddress', value: string | null };
type ChangeNetworkAction = { type: 'changeNetwork', value: string };

export type Action =
  | ChangeTargetAddressAction
  | ChangeNetworkAction;

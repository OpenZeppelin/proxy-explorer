type ChangeAddressAction = { type: 'changeAddress', value: string | null };
type ChangeNetworkAction = { type: 'changeNetwork', value: string };

export type Action =
  | ChangeAddressAction
  | ChangeNetworkAction;

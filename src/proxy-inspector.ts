import Web3 from 'web3';

enum ProxyType {
  EIP1967,
  EIP1967ZOS,
}

type ProxyEIP1967 = { type: ProxyType.EIP1967, implementation: string, admin: string };
type ProxyEIP1967ZOS = { type: ProxyType.EIP1967ZOS, implementation: string, admin: string };

export type Proxy =
  | ProxyEIP1967
  | ProxyEIP1967ZOS;


export async function analyze(web3: Web3, address: string): Promise<Proxy | null>  {
  const EIP1967_ZOS_IMPL_SLOT = '0x7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c3';
  const EIP1967_ZOS_ADMIN_SLOT = '0x10d6a54a4754c8869d6886b5f5d7fbfa5b4522237ea5c60d11bc4e7a1ff9390b';
  const EIP1967_IMPL_SLOT = '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc';
  const EIP1967_ADMIN_SLOT = '0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103';

  const [ EIP1967ZOSImplStorage, EIP1967ZOSAdminStorage, EIP1967ImplStorage, EIP1967AdminStorage ] = await Promise.all(
    [EIP1967_ZOS_IMPL_SLOT, EIP1967_ZOS_ADMIN_SLOT, EIP1967_IMPL_SLOT, EIP1967_ADMIN_SLOT].map(
      slot => web3.eth.getStorageAt(address, slot)
    )
  );

  const EMPTY_STORAGE = '0x0000000000000000000000000000000000000000000000000000000000000000';

  if (EIP1967ImplStorage !== EMPTY_STORAGE) {
    return {
      type: ProxyType.EIP1967,
      implementation: addressInStorage(EIP1967ImplStorage),
      admin: addressInStorage(EIP1967AdminStorage)
    };
  }

  if (EIP1967ZOSImplStorage !== EMPTY_STORAGE) {
    return {
      type: ProxyType.EIP1967ZOS,
      implementation: addressInStorage(EIP1967ZOSImplStorage),
      admin: addressInStorage(EIP1967ZOSAdminStorage)
    };
  }

  return null;
}

function addressInStorage(slot: string): string {
  return '0x' + slot.substring(26);
}

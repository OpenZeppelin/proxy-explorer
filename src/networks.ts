const INFURA_PROJECT_ID = 'c3422181d0594697a38defe7706a1e5b';

export type NetworkId =
  | 'mainnet'
  | 'ropsten'
  | 'rinkeby'
  | 'kovan';

export type Network = {
  name: string;
  query: string;
  explorer: string;
};

export const networks: { [key in NetworkId]: Network } = {
  'mainnet': {
    name: 'Mainnet',
    query: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
    explorer: 'https://etherscan.io'
  },
  'ropsten': {
    name: 'Ropsten',
    query: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
    explorer: 'https://ropsten.etherscan.io'
  },
  'rinkeby': {
    name: 'Rinkeby',
    query: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
    explorer: 'https://rinkeby.etherscan.io'
  },
  'kovan': {
    name: 'Kovan',
    query: `https://kovan.infura.io/v3/${INFURA_PROJECT_ID}`,
    explorer: 'https://kovan.etherscan.io'
  },
};

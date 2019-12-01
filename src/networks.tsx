const INFURA_PROJECT_ID = 'c3422181d0594697a38defe7706a1e5b';

export enum NetworkId {
  Mainnet,
  Ropsten,
  Rinkeby,
  Kovan,
};

export type Network = {
  name: string;
  query: string;
  explorer: string;
};

export const networks: { [key in NetworkId]: Network } = {
  [ NetworkId.Mainnet ]: {
    name: 'Mainnet',
    query: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
    explorer: 'https://etherscan.io'
  },
  [ NetworkId.Ropsten ]: {
    name: 'Ropsten',
    query: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
    explorer: 'https://ropsten.etherscan.io'
  },
  [ NetworkId.Rinkeby ]: {
    name: 'Rinkeby',
    query: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
    explorer: 'https://rinkeby.etherscan.io'
  },
  [ NetworkId.Kovan ]: {
    name: 'Kovan',
    query: `https://kovan.infura.io/v3/${INFURA_PROJECT_ID}`,
    explorer: 'https://kovan.etherscan.io'
  },
};

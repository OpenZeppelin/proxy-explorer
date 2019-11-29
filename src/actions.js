export const CHANGE_TARGET_ADDRESS = 'changeTargetAddress';
export const CHANGE_NETWORK = 'changeNetwork';

export function changeTargetAddress(value) {
  return { type: CHANGE_TARGET_ADDRESS, value };
}

export function changeNetwork(value) {
  return { type: CHANGE_NETWORK, value };
}
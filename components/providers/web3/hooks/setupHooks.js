import { handler as createAccountHook } from "./useAccount"
import { handler as createNetworkHook } from "./useNetwork"

//returns an object whose keys are function names and values are functions.
export const setupHooks = (...deps) => {

  return {
    useAccount: createAccountHook(...deps),
    useNetwork: createNetworkHook(...deps),
  }
}
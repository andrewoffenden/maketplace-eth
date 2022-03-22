import { handler as createUseAccount } from "./useAccount"

//returns an object whose keys are function names and values are functions.
export const setupHooks = web3 => {

  return {
    useAccount: createUseAccount(web3)
  }
}
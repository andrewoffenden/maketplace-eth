import { handler as createUseAccount } from "./useAccount"

//returns an object whose keys are function names and values are functions.
export const setupHooks = (...deps) => {

  return {
    useAccount: createUseAccount(...deps)
  }
}
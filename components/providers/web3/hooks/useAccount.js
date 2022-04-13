import { useEffect } from 'react'
import useSWR from 'swr'

const adminAddresses = {
  "0x244e39a9f614fb43da9f0784f2453b4e8a714240782be9aec7aab7cd3fbea46d": true,
}

export const handler = (web3, provider) =>  {

  const { data, mutate, ...rest } = useSWR(
    web3 ? "web3/accounts" : null,
    async () => {
      const accounts = await web3.eth.getAccounts()

      return accounts[0]
    }
  )

  useEffect(() => {
    provider &&
    provider.on("accountsChanged",
      accounts => mutate(accounts[0] ?? null)
    )
  },[provider])

  return {
    account: {
      data,
      isAdmin: (data && adminAddresses[web3.utils.sha3(data)]) || false,
      mutate,
      ...rest
    }
  }
}
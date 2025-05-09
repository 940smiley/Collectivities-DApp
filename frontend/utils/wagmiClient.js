import { configureChains, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const { publicClient } = configureChains([mainnet], [publicProvider()])

export const config = createConfig({
  autoConnect: true,
  publicClient
})

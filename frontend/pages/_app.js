import '@/styles/globals.css'
import { WagmiConfig } from 'wagmi'
import { config } from '@/utils/wagmiClient'

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={config}>
      <Component {...pageProps} />
    </WagmiConfig>
  )
}

import Head from 'next/head'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export default function Home() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-gray-900 text-white p-8">
      <Head>
        <title>Collectivities DApp</title>
      </Head>
      <main className="text-center space-y-8 max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold">🎴 Collectivities DApp</h1>
        {isConnected ? (
          <>
            <p className="text-xl">Connected: {address}</p>
            <button onClick={() => disconnect()} className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-xl shadow-xl transition">Disconnect</button>
            <section className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white bg-opacity-10 p-4 rounded-xl hover:scale-105 transition transform shadow-lg">
                  <div className="h-40 bg-gray-800 rounded-md mb-4 animate-pulse"></div>
                  <h3 className="font-bold text-lg">Card #{i + 1}</h3>
                  <p className="text-sm text-gray-300">Set: Legendary</p>
                  <p className="text-sm text-gray-300">Brand: CollectX</p>
                </div>
              ))}
            </section>
          </>
        ) : (
          <button onClick={() => connect()} className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl shadow-xl transition">Connect Wallet</button>
        )}
      </main>
    </div>
  )
}

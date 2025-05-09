import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ethers } from "ethers";

function App() {
  const [wallet, setWallet] = useState<string | null>(null);

  const connectWallet = async () => {
    if ((window as any).ethereum) {
      try {
        const accounts: string[] = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
        setWallet(accounts[0]);
      } catch (err) {
        console.error("User rejected wallet connection:", err);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Collectivities DApp</h1>
      {wallet ? (
        <p>Connected as {wallet}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

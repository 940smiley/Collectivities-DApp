import { useEffect, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Collectivities</h1>
      <ConnectButton />
    </div>
  );
}

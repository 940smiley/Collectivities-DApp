# Collectivities DApp

This project is a production‑ready Web3 decentralized application built using:

- **Smart Contracts** (ERC‑20 & ERC‑721) via Solidity and Hardhat  
- **Frontend**: A React app (built with Vite) with MetaMask wallet connectivity  
- **Backend**: Supabase SQL schema for off‑chain storage  
- **Deployment**: Use free tiers on testnets (e.g. Sepolia) and host the frontend on Vercel or Netlify

## Project Structure
##Home Directory##
Collectivities-DApp/ 

├── contracts/ 
│ ├── CollectivitiesNFT.sol 
│ └── CollectivitiesToken.sol 

├── scripts/ 
│ └── deploy.js 

├── test/ 
│ ├── nft.test.js 
│ └── token.test.js 

├── frontend/ 
│ ├── index.html 
│ └── src/ 
│ └── index.tsx 

├── backend/ 
│ └── schema.sql 

├── .env.template 
├── hardhat.config.js 
├── package.json 
└── README.md
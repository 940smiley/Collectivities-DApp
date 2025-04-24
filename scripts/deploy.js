const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const Token = await ethers.getContractFactory("CollectivitiesToken");
    const token = await Token.deploy();
    console.log("COLL Token deployed to:", token.address);

    const NFT = await ethers.getContractFactory("CollectivitiesNFT");
    const nft = await NFT.deploy();
    console.log("NFT Contract deployed to:", nft.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

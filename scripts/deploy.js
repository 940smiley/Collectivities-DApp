// scripts/deploy.js
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with:", deployer.address);

  const initialSupply = ethers.parseUnits("1000000", 18);
  const Token = await ethers.getContractFactory("CollectivitiesToken");
  const token = await Token.deploy(initialSupply);
  await token.waitForDeployment();
  console.log("Token deployed to:", token.target);

  const NFT = await ethers.getContractFactory("CollectivitiesNFT");
  const nft = await NFT.deploy("CollectivitiesNFT", "CLNFT");
  await nft.waitForDeployment();
  console.log("NFT deployed to:", nft.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

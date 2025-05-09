// test/nft.test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CollectivitiesNFT", function () {
  it("Should mint an NFT", async function () {
    const [owner] = await ethers.getSigners();
    const CollectivitiesNFT = await ethers.getContractFactory("CollectivitiesNFT");
    
    // Pass the name and symbol as constructor arguments
    const nft = await CollectivitiesNFT.deploy("CollectivitiesNFT", "CLNFT");
    await nft.waitForDeployment();

    const mintTx = await nft.safeMint(owner.address, "ipfs://QmExampleHash");
    await mintTx.wait();

    expect(await nft.ownerOf(0)).to.equal(owner.address);
  });
});

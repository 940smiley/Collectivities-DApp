// test/token.test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CollectivitiesToken", function () {
  it("Should deploy and mint initial supply", async function () {
    const [owner] = await ethers.getSigners();

    // Use ethers.parseUnits to create a BigNumber for the initial supply.
    const initialSupply = ethers.parseUnits("1000000", 18); // 1,000,000 tokens

    const CollectivitiesToken = await ethers.getContractFactory("CollectivitiesToken");
    const token = await CollectivitiesToken.deploy(initialSupply);
    await token.waitForDeployment();

    const balance = await token.balanceOf(owner.address);
    expect(balance).to.equal(initialSupply);
  });
});

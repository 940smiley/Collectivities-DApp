// contracts/CollectivitiesToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CollectivitiesToken is ERC20, Ownable {
    // Accept the initial supply as a constructor argument.
    // The ERC20 token’s name and symbol are fixed here.
    constructor(uint256 initialSupply)
        ERC20("Collectivities Token", "CLTV")
        Ownable(msg.sender)
    {
        _mint(msg.sender, initialSupply);
    }

    // Optional: Add a mint function for further tokens, for example.
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}

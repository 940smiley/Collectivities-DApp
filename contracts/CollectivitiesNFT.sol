// contracts/CollectivitiesNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CollectivitiesNFT is ERC721URIStorage, Ownable {
    uint256 public tokenId;

    // Accept the name and symbol as constructor arguments.
    // Also pass msg.sender to Ownable so that the deployer becomes the owner.
    constructor(string memory name, string memory symbol)
        ERC721(name, symbol)
        Ownable(msg.sender)
    {}

    function safeMint(address to, string memory uri) public onlyOwner {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        tokenId++;
    }
}

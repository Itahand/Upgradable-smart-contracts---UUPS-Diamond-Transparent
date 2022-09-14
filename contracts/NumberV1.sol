// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract NumberV1 is Initializable, UUPSUpgradeable, OwnableUpgradeable {
   uint256 public number;

   function initialize(uint256 _initialNumber) public initializer {
       __Ownable_init();
       number = _initialNumber;
   }

   function _authorizeUpgrade(address) internal override onlyOwner {}

   function incrementNumber() external {
       number += 1;
   }
}
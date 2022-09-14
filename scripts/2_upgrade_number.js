const { ethers, upgrades } = require("hardhat");

const PROXY = "0x976D8545778890587b8FaaCC3c9Cb7F380383294"

async function main() {
 const NumberV2 = await ethers.getContractFactory("NumberV2");
 console.log("Upgrading Number contract to V2...");
 await upgrades.upgradeProxy(PROXY, NumberV2);
 console.log("Number Contract upgraded successfully");
}

main();
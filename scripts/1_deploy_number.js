const { ethers, upgrades } = require("hardhat");

const initialNumber = 1;
async function main() {
 const NumberV1 = await ethers.getContractFactory("NumberV1");

 console.log("Deploying Number...");

 const numberV1 = await upgrades.deployProxy(NumberV1, [initialNumber], {
   initializer: "initialize",
 });
 await numberV1.deployed();

 console.log("numberV1 deployed to:", numberV1.address);
}

main();
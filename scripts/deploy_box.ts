import { ethers } from "hardhat";

async function main() {
  const Box = await ethers.getContractFactory("Box");
  const box = await Box.deploy(10, 10);
  console.log("Box contract deployed at ", await box.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// https://sepolia.etherscan.io/address/0x312763ab861c502a03d7EA44c38811b167Bec0eA#code
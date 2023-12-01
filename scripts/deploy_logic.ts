import { ethers } from "hardhat";

async function main() {
  const LogicContract = await ethers.getContractFactory("LogicContract");
  const logic = await LogicContract.deploy();
  console.log("Box contract deployed at ", await logic.getAddress()); // 0x653af7AEE504B629b558Fd02207096DDd7cd9C79
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// https://sepolia.etherscan.io/address/0x653af7AEE504B629b558Fd02207096DDd7cd9C79#code

// 1. Deploy the LogicContract and get its address.
// 2. Deploy the ProxyContract, passing the LogicContract address as a constructor argument, and get the proxy address.
// 3. Deploy the ProxyAdminContract and get its address.
// 4. Call the upgrade function on the ProxyAdminContract, passing the proxy address and the new logic contract address as arguments. This will upgrade the logic contract of the proxy.
// 5. Interact with the proxy contract using its address, and any function calls made to the proxy will be routed to the upgraded logic contract.

// Note: Make sure to initialize the LogicContract by calling its initialize function after deployment and before upgrading.
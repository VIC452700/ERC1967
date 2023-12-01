import { ethers } from "hardhat";

async function main() {
  const ProxyAdminContract = await ethers.getContractFactory("ProxyAdminContract"); 
  const admin = await ProxyAdminContract.deploy();
  console.log("proxy admin contract deployed at ", await admin.getAddress()); // 0x03083286a4aA0ba7aA64C25eb4724f018386Def6
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// https://sepolia.etherscan.io/address/0x03083286a4aA0ba7aA64C25eb4724f018386Def6#code

// 1. Deploy the LogicContract and get its address.
// 2. Deploy the ProxyContract, passing the LogicContract address as a constructor argument, and get the proxy address.
// 3. Deploy the ProxyAdminContract and get its address.
// 4. Call the upgrade function on the ProxyAdminContract, passing the proxy address and the new logic contract address as arguments. This will upgrade the logic contract of the proxy.
// 5. Interact with the proxy contract using its address, and any function calls made to the proxy will be routed to the upgraded logic contract.

// Note: Make sure to initialize the LogicContract by calling its initialize function after deployment and before upgrading.

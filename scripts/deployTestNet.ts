import { ethers } from "hardhat";
import 'dotenv/config'

async function main() {
  const Contract = await ethers.getContractFactory("HenkakuToken");
  const token = await Contract.deploy();
  await token.deployed();

  console.log("v2 token:", token.address);
  token.transferOwnership(process.env.GOERIL_OWNER as string);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

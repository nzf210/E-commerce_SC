// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const Day = await hre.ethers.getContractFactory("Dai");
  const PayPs = await hre.ethers.getContractFactory("PaymentProcessor");
  const day = await Day.deploy();
  await day.deployed();

  const payPs = await PayPs.deploy('0x55c06843AfE480260b93dE67f1040B8CEE133163', day.address);
  await payPs.deployed();

  console.log(
    `Lock with 1 ETH and unlock timestamp deployed to ${day.address}`,
    `PS deployed to ${day.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

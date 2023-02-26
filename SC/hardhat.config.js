require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "wandev",
  networks: {
    wandev: {
      url: `https://gwan-ssl.wandevs.org:46891`,
      chainId: 999,
      gasPrice: 20000000000,
      accounts: [process.env.WANDEV_KEY]
    },
    wancash: {
      url: `https://gwan-ssl.wandevs.org:56891`,
      chainId: 888,
      gasPrice: 20000000000,
      accounts: [process.env.WANDEV_KEY]
    },
    bscdev: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      // accounts: { mnemonic: mnemonic }
      accounts: [process.env.WANDEV_KEY]
    },
    bscmain: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      // accounts: { mnemonic: mnemonic }
      accounts: [process.env.WANDEV_KEY]
    }
  }
};

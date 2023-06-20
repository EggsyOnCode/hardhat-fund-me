require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [{ version: "0.8.8" }, { version: "0.6.0" }],
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    // coinmarketcap: COINMARKETCAP_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.8",
      },
      {
        version: "0.6.6",
      },
    ],
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      // gasPrice: 130000000000,
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/Ft7SlWkww9-BrtfKTvGZeUQhtFp4QKdM",
      accounts: [
        "da28ee379a42bcbe3b57599900c66d5558c894328dd39c05242932cbdf5d1a89",
      ],
      chainId: 11155111,
      blockConfirmations: 6,
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/bP7U4Z7H7v1qMXSfdyQYR-odhgb5Sa6N",
      accounts: [
        "da28ee379a42bcbe3b57599900c66d5558c894328dd39c05242932cbdf5d1a89",
      ],
      chainId: 5,
    },
  },
};

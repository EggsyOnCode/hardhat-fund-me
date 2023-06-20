
const networkConfig = {
  5: {
    name: "goerli",
    ethToUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
  },

  11155111: {
    name: "sepolia",
    ethToUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
  },

  //31173
};

const deploymentChains = ["localhost", "hardhat"]
const DECIMAL = "8";
const INITIAL_ANSWER = "200000000000";

module.exports = {
    networkConfig,  
    deploymentChains,
    DECIMAL,
    INITIAL_ANSWER,
}
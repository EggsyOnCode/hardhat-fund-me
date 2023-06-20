const { network } = require("hardhat");
const { networkConfig, deploymentChains,DECIMAL,INITIAL_ANSWER } = require("../helper-hardhat-config.js");

module.exports = async ({ deployments, getNamedAccounts }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  //the problem is which address do we pass as the address of priceFeed in the constructor below
  //cuz a user can deploy the contract on any chain
  //hence; chains like aave use a dictionary


  if(chainId == "31337"){
    log("Mocks deployed on localnet")
        await deploy("MockV3Aggregator", {
          from: deployer,
          log: true,
          args: [DECIMAL,INITIAL_ANSWER],
        });
        log("contract deployed \n ------------------------")
  }


  //contractFactory creation alt; we'll use deploy funct provided by deployments
  //FundMe is the name of our contract; {} contains a list of overrides
  
};


module.exports.tags = ["all", "mock"]
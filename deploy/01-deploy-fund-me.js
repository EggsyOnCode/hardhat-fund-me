const { network } = require("hardhat");
const { networkConfig, deploymentChains } = require("../helper-hardhat-config.js");
const { verify } = require("../utils/verify");

module.exports.default = async ({ deployments, getNamedAccounts }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  //the problem is which address do we pass as the address of priceFeed in the constructor below
  //cuz a user can deploy the contract on any chain
  //hence; chains like aave use a dictionary

  const ethToUsdpriceAddress = networkConfig[chainId]["ethToUsdPriceFeed"];

  //contractFactory creation alt; we'll use deploy funct provided by deployments
  //FundMe is the name of our contract; {} contains a list of overrides
  const args = [ethToUsdpriceAddress];
  log("contract deploying on remote net")
  const FundMe = await deploy("FundMe", {
    from: deployer,
    log : true,
    args: [ethToUsdpriceAddress],
  });

  if(!deploymentChains.includes(network.name) && process.env.ETHERSCAN_API){
    await verify(FundMe.address, args);
  }
  log(`Contract address is ${FundMe.address}`)
  log("contract deployed \n ---------------- ")
};

module.exports.tags = ["all", "remote"];
var Shares = artifacts.require("./Shares.sol");

module.exports = function(deployer) {
  deployer.deploy(Shares);
};

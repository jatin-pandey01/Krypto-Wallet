// https://eth-sepolia.g.alchemy.com/v2/TTeh_uKy-MtNNzbBNdOHH_Mmh60krfFq

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:'0.8.0',
  networks:{
    Sepolia :{
      url:'https://eth-sepolia.g.alchemy.com/v2/TTeh_uKy-MtNNzbBNdOHH_Mmh60krfFq',
      accounts:['6781cddd763b7cf3acd45272d83826e2c80b04c51c949557d41a3d548a8fa5bf']
    }
  }
}
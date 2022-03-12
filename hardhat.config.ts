import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";
import { task, HardhatUserConfig } from "hardhat/config";
import * as dotenv from "dotenv";
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

dotenv.config();
const PKS = [process.env.MY_PK!];
const config: HardhatUserConfig = {
  solidity: "0.8.7",
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/9834595a34cb43edb2e721f1b27cc3b2`,
      accounts: [`${process.env.MY_PK!}`],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;

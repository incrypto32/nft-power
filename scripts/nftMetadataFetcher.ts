import axios from "axios";
import { ethers } from "hardhat";
import { Token } from "../typechain-types";
import fs from "fs";
// import beeper from "beeper";
async function main() {
  // const contract = (await ethers.getContractAt("Token", "0x5180db8F5c931aaE63c74266b211F580155ecac8")) as Token;
  // console.log(await contract.name());


  let i = 2195;
  let list = [];
  while (true) {
    try {
      console.log(`Getting metadata from URI ${`https://ipfs.io/ipfs/QmQUZz71VhXsg8DbeBB2q9TVHqqLNHwSJjY8EfSH7gJDSr/${i}.json`}`);
      const metadata = await axios.get(`https://ipfs.io/ipfs/QmQUZz71VhXsg8DbeBB2q9TVHqqLNHwSJjY8EfSH7gJDSr/${i}.json`);
      console.log(metadata.data);
      metadata.data.id = i;
      list.push(metadata.data);

      i++;
    } catch (error) {
      console.log("===================================")
      console.log("===================================")
      console.log("===================================")
      console.log(error);
      console.log("===================================")
      console.log("===================================")
      console.log("===================================")
      continue;
    }
  }
  fs.writeFileSync("./result.json", JSON.stringify(list));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

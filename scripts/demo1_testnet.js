const { formatBytes32String } = require("ethers/lib/utils");
const { ethers } = require("ethers");
const hre = require("hardhat");

async function main() {
  const LayerZeroDemo1 = await hre.ethers.getContractFactory("LayerZeroDemo1");
  const layerZeroDemo1 = await LayerZeroDemo1.attach(
    "0xD67D01D6893cC4a2E17557765987d41E778fadca"
  );
  const fees = await layerZeroDemo1.estimateFees(
    10009,
    "0x37587469690CC37EE19Ff6163ce7275BB1b17d3b",
    formatBytes32String("Hello LayerZero"),
    false,
    []
  );
  console.log(ethers.utils.formatEther(fees[0].toString()));
  await layerZeroDemo1.sendMsg(
    10009,
    "0x37587469690CC37EE19Ff6163ce7275BB1b17d3b",
    formatBytes32String("Hello LayerZero"),
    { value: ethers.utils.parseEther("1") }
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

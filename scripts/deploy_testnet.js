const hre = require("hardhat");

async function main() {
  const LayerZeroDemo1 = await hre.ethers.getContractFactory("LayerZeroDemo1");
  const layerZeroDemo1 = await LayerZeroDemo1.deploy(
    "0x7dcAD72640F835B0FA36EFD3D6d3ec902C7E5acf"
  );

  await layerZeroDemo1.deployed();

  console.log("layerZeroDemo1 deployed to:", layerZeroDemo1.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

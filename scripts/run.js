const main = async () => {
    const fandomNFT = await hre.ethers.getContractFactory('KometNFT');
    const nftContract = await fandomNFT.deploy("Komet","KOM",'0x6763A91EA960400594E6748cf2D8e5EC643261CF');
  
    await nftContract.deployed();
  
    console.log('NFT Contract deployed to:', nftContract.address);
  
    txn = await nftContract.launchNFT(10, "https://ipfs.io/ipfs/QmYfmHvCZsxgzPWMUynMDNGYpAu4VYCU2R6mMg37hX2E25?filename=fire.json" );
    await txn.wait();
    console.log("tx", txn)
    console.log('NFTs launched ---', txn.data);
  
    txn = await nftContract.uri(1);
    console.log('URI --->', txn);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
  
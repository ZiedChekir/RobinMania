import { useWeb3React } from "@web3-react/core";
import { GameABI, GameAddress } from "../config";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import AuctionCard from "../components/AuctionCard";

import { Grid } from "@mui/material";
import NftCard from "../components/MuiCard";
import { Typography } from "@mui/material";

const explore = () => {
  const [Nfts, setNfts] = useState([]);

  useEffect(() => {
    loadNfts();
  }, []);

  const loadNfts = async () => {
    const provider = new ethers.providers.JsonRpcProvider();
    const signer = provider.getSigner();
    const Contract = new ethers.Contract(GameAddress, GameABI, signer);
    //  const data = await Contract.balanceOfBatch([account, account,account,account,account], [1, 2,3,4,5]);

    let nftArray = [];
    for (let i = 0; i < 5; i++) {
      const response = await fetch(
        "https://raw.githubusercontent.com/SamiKammoun/robinmania/main/metadata/" +
          (i + 1) +
          ".json",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const responseJson = await response.json();
      nftArray.push(responseJson);
    }
    console.log(nftArray);
    setNfts(nftArray);
  };

  return (
    <>
     
          <Typography sx={{color:"white"}} className="explore" variant="h1" align="center">Explore RobinMania NFTs</Typography>
         
      <Grid className="nftGrid" container rowSpacing={3}>
      
      {Nfts.map((nft, i) => {
          
          return  (
          <Grid item xs={3}>
              <NftCard
                key={nft.name}
                title={nft.name}
                description={nft.description}
                image={nft.image}
                link={"/nft/" + (i + 1)}
              />
             </Grid>)
         })}
        
        
      </Grid>
    </>
  );
};
export default explore;

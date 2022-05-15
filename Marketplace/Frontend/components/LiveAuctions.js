import * as React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import AuctionCard from './AuctionCard';

const useStyles = makeStyles({
  auctionCardGrid: {
    margin: 0,
    display: 'flex',
    justifyContent: "space-between"
  },
});

const LiveAuctions = () => {
  const classes = useStyles();
  return (
    <div style={{ maxWidth: '100%' }}>
      <Grid container className={classes.auctionCardGrid} wrap="nowrap">
          <Grid item>
        <AuctionCard />
        </Grid>
        <Grid item>
        <AuctionCard />
        </Grid>
        <Grid item>
        <AuctionCard />
        </Grid>
        <Grid item>
        <AuctionCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default LiveAuctions;
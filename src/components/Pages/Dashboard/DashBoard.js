import * as React from "react";
import { Box, Grid, Typography, Button,Stack, } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import UpcomingJob from '../Dashboard/UpcomingJob';
import TodayStade from '../Dashboard/TodayStade';
import IncomingJob_Chart from '../Dashboard/IncomingJob_Chart';
import Invoing from "../Dashboard/Invoing";
import IncomingJob from '../Dashboard/IncomingJob';
import Jobassied from './Jobassigned'

export default function DashBoard() {
  return (
    <container maxWidth="xl" className="Dashboard-page-section">
      <Box className="Dashboard-page-box">
        <Grid item xs={12} sm={12} lg={12} md={12} xl={12} wrap="nowrap" className="Dashboard-page-grid" >
          <Grid container className="Dashboard-page-section-grid">
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              item
              xs={6}
              className="Dashboard-page-date-section"
            >
              <Typography className="Dashboard-page-date-heading">Thursday , 12 May </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              item
              xs={6}
              className="Dashboard-page-button-section"
            >
                <Stack direction="row" spacing={2}>
                <Button  className="Dashboard-one-button-section" variant="outlined">Auto Questionaire</Button>
                <Button  className="Dashboard-two-button-section" variant="contained"> <AddIcon/>Add Job</Button>
                </Stack>
             
            </Grid>
          </Grid>
       
        </Grid>
      </Box>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid container direction="row"  item xs={12} sm={12} lg={12} md={12} xl={12}  className='data-item-details-list'>
            <Grid className='data-item-details-list-one' item xs={12} sm={6} lg={4} md={4} xl={4}><UpcomingJob/></Grid>
            <Grid className='data-item-details-list-one' item xs={12} sm={6} lg={4} md={4} xl={4}><TodayStade/></Grid>
            <Grid className='data-item-details-list-one' item xs={12} sm={6} lg={4} md={4} xl={4}><IncomingJob_Chart/></Grid>
          </Grid>
          <Grid container direction="row"  item xs={12} sm={12} lg={12} md={12} xl={12}   className='data-item-details-list'>
            <Grid className='data-item-details-list-one' item xs={12} sm={6} lg={4} md={4} xl={4}><Jobassied/></Grid>
            <Grid className='data-item-details-list-one' item xs={12} sm={6} lg={4} md={4} xl={4}><Invoing/></Grid>
            <Grid className='data-item-details-list-one' item xs={12} sm={6} lg={4} md={4} xl={4}><IncomingJob/></Grid>
          </Grid>
        </Grid>
    </container>
  );
}

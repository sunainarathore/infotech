// ** MUI Imports
import * as React from "react";

import {
  Grid,
  Paper,
  Card,
  Box,
  Avatar,
  CardHeader,
  IconButton,
  Typography,
  CardContent,
} from "@mui/material";
// ** Icons Imports
import TrendingUp from "mdi-material-ui/TrendingUp";
import CurrencyUsd from "mdi-material-ui/CurrencyUsd";
import DotsVertical from "mdi-material-ui/DotsVertical";
import CellphoneLink from "mdi-material-ui/CellphoneLink";
import AccountOutline from "mdi-material-ui/AccountOutline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const salesData = [
  {
    stats: "245k",
    title: "Sales",
    color: "primary",
    icon: <TrendingUp sx={{ fontSize: "1rem" }} />,
  },
  {
    stats: "12.5k",
    title: "Customers",
    color: "success",
    icon: <AccountOutline sx={{ fontSize: "1rem" }} />,
  },
  {
    stats: "1.54k",
    color: "warning",
    title: "Products",
    icon: <CellphoneLink sx={{ fontSize: "1rem" }} />,
  },
  {
    stats: "$88k",
    color: "info",
    title: "Revenue",
    icon: <CurrencyUsd sx={{ fontSize: "1rem" }} />,
  },

  {
    stats: "$99k",
    color: "waring",
    title: "failed",
    icon: <TrendingUp sx={{ fontSize: "1rem" }} />,
  },
];

const renderStats = () => {
  return salesData.map((item, index) => (
    <Grid
      item
      xs={12}
      sm={12}
      lg={4}
      md={4}
      xl={4}
      key={index}
      className="incoming-job-page"
    >
      <Box
        key={index}
        sx={{ display: "flex", alignItems: "center" }}
        className="incoming-job-box"
      >
        {/* <Paper>
        
        <Box className='incoming-job-page-boxes' sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography className='incoming-job-page-para' variant='caption'>{item.title}</Typography>
          <Typography className='incoming-job-page-para' variant='h6'>{item.stats}</Typography>
        </Box>
        </Paper> */}
        <List
          key={index}
          className="incoming-job-box-list"
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
        <Paper>
        <ListItem alignItems="flex-start" className='incoming-job-page-boxes'>
            <ListItemAvatar className='incoming-job-page-para'>
              <Avatar
                variant="rounded"
                sx={{
                  mr: 3,
                  width: 44,
                  height: 44,
                  color: "common.white",
                  backgroundColor: `${item.color}.main`,
                  borderRadius: "50%",
                }}
                className="incoming-job-page-avtar"
              >
                {item.icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
            className='incoming-job-page-para-title'
              primary={item.stats}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    
                    {item.title}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </Paper>
        </List>
      </Box>
    </Grid>
  ));
};

const IncomingJob = () => {
  return (
    <Card className="incoming-job-page-card-pages">
      <CardHeader
        title=""
        action={
          <IconButton
            className="incoming-job-page-card-button card-more-options"
            size="small"
            aria-label="settings"
            sx={{ color: "text.secondary" }}
          >
            <DotsVertical className="incoming-job-page-card-dots" />
          </IconButton>
        }
        subheader={
          <Typography
            variant="body2"
            className="incoming-job-page-card-pages-para"
          >
            <Box
              className="incoming-job-page-card-pages-paras"
              component="span"
              sx={{ fontWeight: 600, color: "text.primary" }}
            ></Box>{" "}
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: "0.15px !important",
          },
        }}
      />
      <CardContent
        className="incoming-job-page-card-content"
        sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}
      >
        <Grid
          className="incoming-job-page-card-contain"
          container
          spacing={[5, 0]}
        >
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default IncomingJob;

import React from "react";
import { Text, Heading, Icon, Card } from "@innovaccer/design-system";
import { Grid, Paper, CardHeader } from "@mui/material";
import "@innovaccer/design-system/css";

export default function Invoing() {
  return (
    <Grid wrap="nowrap" container className="invoing-page-section">
      <Card className="upcoming-jobs-section">
        <Grid direction="row">
          <Grid justifyContent="flex-start" alignItems="flex-start">
            <Card className="card-header">
              <CardHeader
                className="card-header-heading"
                title="Upcomings Jobs"
              />
            </Card>
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} className="invoing-card-part-grid">
            <Card className="invoing-card-part">
              <div className="d-flex flex-column justify-content-center align-items-center p-8">
              <div className="d-flex align-items-center">
                  <Icon appearance="success" name="arrow_drop_up" size={0} />
                  <Text weight="strong" appearance="success">
                  <Heading appearance="success"  style={{color:'rgb(233 17 63)',fontSize:'20px',fontWeight:'600'}}>71k</Heading>
                  </Text>
                </div>
                <Text className="mb-6">Due</Text>
                
              </div>
            </Card>
          </Grid>
          <Grid item xs={6} className="invoing-card-part-grid">
            <Card className="invoing-card-part">
              <div className="d-flex flex-column justify-content-center align-items-center p-8">
              <div className="d-flex align-items-center">
                  <Icon appearance="success" name="arrow_drop_up" size={0} />
                  <Text weight="strong" appearance="success">
                  <Heading appearance="success" style={{fontSize:'20px',fontWeight:'600'}}>18k</Heading>
                  </Text>
                </div>
                <Text className="mb-6">Paid</Text>
                
              </div>
            </Card>
          </Grid>
          <Grid item xs={6} className="invoing-card-part-grid">
            <Card className="invoing-card-part">
              <div className="d-flex flex-column justify-content-center align-items-center p-8">
              <div className="d-flex align-items-center">
                  <Icon appearance="Warning" name="arrow_drop_up" size={0} />
                  <Text weight="strong" appearance="Warning">
                  <Heading appearance="Warning" style={{fontSize:'20px',fontWeight:'600'}}>21.2K</Heading>
                  </Text>
                </div>
                <Text className="mb-6">Currently Invoice Due</Text>
                
              </div>
            </Card>
          </Grid>
          <Grid item xs={6} className="invoing-card-part-grid">
            <Card className="invoing-card-part">
              <div className="d-flex flex-column justify-content-center align-items-center p-8">
              <div className="d-flex align-items-center">
                  <Icon appearance="Alert" name="arrow_drop_up" size={0} />
                  <Text weight="strong" appearance="Alert">
                  <Heading appearance="Alert" style={{fontSize:'20px',fontWeight:'600'}}>2K</Heading>
                  </Text>
                </div>
                <Text className="mb-6">All Time Paid Invoice</Text>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

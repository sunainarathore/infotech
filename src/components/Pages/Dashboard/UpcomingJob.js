import * as React from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import {
  Paper,
  Card,
  CardHeader,
  IconButton,
  ListSubheader,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
  Avatar,
  Button,
  Grid,
} from "@mui/material";

export default function UpcomingJob() {
  return (
    <Paper  className="upcoming-jobs-section">
      <Grid wrap="nowrap" direction="row">
        <Grid justifyContent="flex-start" alignItems="flex-start">
          <Card className="card-header">
            <CardHeader
              className="card-header-heading"
              action={
                <IconButton
                  className="filter-section-icon"
                  aria-label="settings"
                >
                  <FilterAltOutlinedIcon />
                </IconButton>
              }
              title="Upcomings Jobs"
            />
          </Card>
        </Grid>
        <Grid className="job-searching-grid">
          <List
            sx={{
              width: '100%',
              bgcolor: 'background.paper',
              position: 'relative',
              overflow: 'auto',
              maxHeight: 300,
              '& ul': { padding: 0 },
            }}
            subheader={<ListItem />}
            className="job-secaring-list"
          >
            <ListSubheader>
              <Paper className="joblistitemname backgroundone">
                <ListItem alignItems="flex-start">
                  <ListItemText
                    className="first-letf-side"
                    primary="Brunch this weekend?"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    }
                  />

                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                </ListItem>
                <Button className="jobsupdating" variant="outlined">
                  washing machine fix
                </Button>
              </Paper>
              <Paper className="joblistitemname backgroundtwo">
                <ListItem alignItems="flex-start">
                  <ListItemText
                    className="upcoming-jobs-Liststartitemtext"
                    primary="Summer BBQ"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                      </React.Fragment>
                    }
                  />
                  <ListItemAvatar className="upcoming-jobs-avtar">
                    <Avatar
                      alt="Travis Howard"
                      src="/static/images/avatar/2.jpg"
                    />
                  </ListItemAvatar>
                </ListItem>
                <Button className="jobsupdating" variant="outlined">
                  washing machine fix
                </Button>
              </Paper>

              <Paper className="joblistitemname backgroundthree">
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary="Oui Oui"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Sandra Adams
                        </Typography>
                        {" — Do you have Paris recommendations? Have you ever…"}
                      </React.Fragment>
                    }
                  />
                  <ListItemAvatar>
                    <Avatar
                      alt="Cindy Baker"
                      src="/static/images/avatar/3.jpg"
                    />
                  </ListItemAvatar>
                </ListItem>
                <Button className="jobsupdating" variant="outlined">
                  washing machine fix
                </Button>
              </Paper>
            </ListSubheader>
          </List>
        </Grid>
      </Grid>
    </Paper>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Project from './Project';
import Data from '../utils/Data';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h1 style={{textAlign: "center", color: "#575D51", fontFamily: "Acme", padding:10, marginTop:10}}>Julee Work</h1>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Project title={Data.projects[0].title} service={Data.projects[0].service} description={Data.projects[0].description} url={Data.projects[0].url} image={Data.projects[0].imageSrc} git={Data.projects[0].github}></Project>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Project title={Data.projects[1].title} service={Data.projects[1].service} description={Data.projects[1].description} url={Data.projects[1].url} image={Data.projects[1].imageSrc} git={Data.projects[1].github}></Project>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Project title={Data.projects[2].title} service={Data.projects[2].service} description={Data.projects[2].description} url={Data.projects[2].url} image={Data.projects[2].imageSrc} git={Data.projects[2].github}></Project>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Project title={Data.projects[3].title} service={Data.projects[3].service} description={Data.projects[3].description} url={Data.projects[3].url} image={Data.projects[3].imageSrc} git={Data.projects[3].github}></Project>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

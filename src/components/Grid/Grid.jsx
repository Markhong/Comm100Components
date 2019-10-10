import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import VirtualizedTable from '../VirtualizedTable/VirtualizedTable';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import MainMenu from '../MainMenu/index';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    alignItems: 'stretch',
    height: '100%',
  },
  menu: {
    flex: '0 0 50px',
    background: '#002d4d', // theme.palette.primary.dark,
    position: 'relative',
    color: theme.palette.primary.contrastText,
  },
  section: {
    flex: '1 1 auto',
  },
  sectionContent: {
    height: '100%',
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}));


const GridGenerator = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={0} className={classes.container}>
      <Grid item className={classes.menu}>
        <MainMenu />
      </Grid>
      <Grid item className={classes.section}>
        <VirtualizedTable className={classes.sectionContent}/>
      </Grid>
    </Grid>
  )
}

export default GridGenerator;

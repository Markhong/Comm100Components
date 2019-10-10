import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import { bindPopper } from 'material-ui-popup-state';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  scrollContainer: {
    height: 400,
    overflow: 'auto',
    marginBottom: theme.spacing(3),
  },
  scroll: {
    position: 'relative',
    width: '230%',
    backgroundColor: theme.palette.background.paper,
    height: '230%',
  },
  legend: {
    marginTop: theme.spacing(2),
    maxWidth: 300,
  },
  paper: {
    maxWidth: 400,
    overflow: 'auto',
  },
  select: {
    width: 200,
  },
  popper: {
    zIndex: 1,
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.9em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${theme.palette.common.white} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.9em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${theme.palette.common.white} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${theme.palette.common.white} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${theme.palette.common.white}`,
      },
    },
  },
  arrow: {
    position: 'absolute',
    fontSize: 7,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
}));

const CustomPopper = (props) => {
  const classes = useStyles();
  const arrowRef = React.useRef(null);
  return (
    <Popper 
      id='avatar-popup-popper'
      {...bindPopper(props.popupState)} 
      transition 
      placement='right'
      className={classes.popper}
      modifiers={{
        flip: {
          enabled: false,
        },
        preventOverflow: {
          enabled: false,
          boundariesElement: 'scrollParent',
        },
        arrow: {
          enabled: true,
          element: arrowRef,
        },
      }}
    >
      {({ TransitionProps }) => (
        <div>
          <span className={classes.arrow} ref={arrowRef} />
          <Paper className={classes.paper}>
            {
              props.children
            }
          </Paper>
        </div>
      )}
    </Popper>
  );
};

export default CustomPopper;

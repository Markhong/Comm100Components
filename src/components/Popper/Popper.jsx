import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';

const useStyles = makeStyles(theme => ({
  
  paper: {
    maxWidth: 400,
    overflow: 'auto',
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
  const anchorRef = React.useRef(null);
  const arrowRef = React.useRef(null);

  const { arrow = true, placement = 'right' } = props;

  // const [arrow, setArrow] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  // const [placement, setPlacement] = React.useState('right');

  const handleClickButton = (e) => {
    setOpen(prevOpen => !prevOpen);
  };

  const classes = useStyles();

  const id = open ? 'scroll-playground' : null;

  const { popupState, modifiers, ...rest } = props;
  return (
    <React.Fragment>
      {/* <Button
        ref={anchorRef}
        variant="contained"
        onClick={handleClickButton}
        aria-describedby={id}
      >
        Toggle Popper
      </Button> */}
      <Popper
        id={id}
        open={open}
        anchorEl={anchorRef.current}
        placement={placement}
        disablePortal={false}
        className={classes.popper}
        modifiers={Object.assign({}, {
          flip: {
            enabled: false,
          },
          arrow: {
            enabled: arrow,
            element: '#arrow',
          },
          preventOverflow: {
            enabled: true,
            boundariesElement: 'scrollParent',
          },
        }, modifiers)}
        {...bindPopper(popupState)} 
        transition
        {...rest}
      >
        {({ TransitionProps }) => (
          <>
            { arrow ? <span id='arrow' className={classes.arrow} ref={arrowRef} /> : null }
            {
              props.children
            }
          </>
        )}
      </Popper>
    </React.Fragment>
  );
}

export default CustomPopper;

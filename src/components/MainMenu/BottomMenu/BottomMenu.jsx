import React from 'react';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SVGIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';
import Tooltip from '../../Tooltip/Tooltip';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import CustomPopper from '../../Popper/Popper';
import PopupState, { bindToggle, bindPopper, bindHover, bindMenu } from 'material-ui-popup-state';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Arrow from '@material-ui/icons/ArrowForwardIos';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
  },
  menuItem: {
    minWidth: 34,
    height: 34,
    marginBottom: theme.spacing(2),

    '&:hover': {
      background: '#06385e',
    },
  },
  menuItemAvatar: {
    padding: 0,
    background: 'none',
    boxShadow: 'none',
  },
  svgIconWidth: {
    width: 16,
    height: 16,
  },
  badge: {
    width: 18,
    height: 18,
    minWidth: 18,
    top: -8,
    right: -2,
    background: '#dd6e00',
  },
  avatar: {
    width: 28,
    height: 28,
  },
  avatarBadge: {
    width: 8,
    height: 8,
    top: 'auto',
    bottom: -5,
    right: 5,
    background: '#58b220',
    border: '1px solid  #122d52',
  },
  statusBadge: {
    width: 8,
    height: 8,
    top: 'auto',
    bottom: 2,
    left: -4,
    background: '#58b220',
  },
  avatarMd: {
    width: 38,
    height: 38,
  },
  rootStatusBadge: {
    paddingLeft: 16,
  },
  rootListItemIcon: {
    minWidth: 26,
  },
  guttersListItem: {
    paddingLeft: 28,
    paddingRight: 28,

    '&:hover:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      width: 2,
      height: '100%',
      background: '#002d4d',
    }
  },
  rootList: {
    background: '#f5f6f7',
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  icon: {
    fontSize: 12,
  }
}));

const BottomMenu = () => {
  const classes = useStyles();
  return (
    <Box textAlign='center' className={classes.bottomMenu}>
      <Tooltip title="Visitors" placement="right">
        <Button className={classes.menuItem}>
          <Badge badgeContent={99} color="primary" classes={{ 
              badge: classes.badge
            }}
          >
            <SVGIcon viewBox="0 0 18 15.676" className={classes.svgIconWidth}>
              <path d="M3291.464-1019.889h-14.929a1.538 1.538 0 0 0-1.536 1.536v9.187a1.538 1.538 0 0 0 1.536 1.536h10.175l3.418 3.418v-3.418h1.335a1.537 1.537 0 0 0 1.535-1.536v-9.187a1.537 1.537 0 0 0-1.534-1.536zm-11.323 10.308a4.036 4.036 0 0 1 3.2-3.962 2.369 2.369 0 0 1-1.562-2.228 2.369 2.369 0 0 1 2.369-2.369 2.369 2.369 0 0 1 2.369 2.369 2.37 2.37 0 0 1-1.562 2.228 3.95 3.95 0 0 1 1.258.5 4.043 4.043 0 0 1 1.823 2.494 4.045 4.045 0 0 1 .118.972z" style={{ fill: '#7a8c99' }} data-name="路径 2323" transform="translate(-3275 1019.889)"/>
            </SVGIcon>
          </Badge>
        </Button>
      </Tooltip>
      <Tooltip title="Chats" placement="right">
        <Button className={classes.menuItem}>
          <SVGIcon viewBox="0 0 18 15.29" className={classes.svgIconWidth}>
            <path d="M3201.569-1169h-1.456v4.733h1.456zm6.351 0h-1.456v8.191h1.456zm-7.079 5.643a2.73 2.73 0 0 0-2.73 2.73 2.729 2.729 0 0 0 2 2.629v4.288h1.456v-4.29a2.729 2.729 0 0 0 2-2.629 2.73 2.73 0 0 0-2.725-2.728zm13.267-3.9V-1169h-1.456v1.74a2.728 2.728 0 0 0-2 2.629 2.73 2.73 0 0 0 2.73 2.73 2.73 2.73 0 0 0 2.731-2.73 2.729 2.729 0 0 0-2.004-2.629zm-1.456 13.55h1.456v-7.281h-1.456zm-5.461-6.189a2.731 2.731 0 0 0-2.73 2.731 2.73 2.73 0 0 0 2 2.629v.829h1.456v-.829a2.729 2.729 0 0 0 2-2.629 2.731 2.731 0 0 0-2.725-2.735z" style={{ fill: '#7a8c99' }} data-name="路径 2671" transform="translate(-3198.111 1169)"/>
          </SVGIcon>
        </Button>
      </Tooltip>
      <Tooltip title="Chats" placement="right">
        <Button className={classes.menuItem}>
          <SVGIcon viewBox="0 0 18 18" className={classes.svgIconWidth}>
            <path d="M3232 1848a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm-.125 15.9a1.219 1.219 0 1 1 0-2.438 1.219 1.219 0 1 1 0 2.438zm2.42-6.512c-1.128.655-1.447 1.1-1.447 1.964v.5h-2l-.009-.612a2.7 2.7 0 0 1 1.611-2.748c1.068-.646 1.43-1.111 1.43-1.964a1.628 1.628 0 0 0-1.81-1.576 1.765 1.765 0 0 0-1.895 1.749h-2.024c.069-2.024 1.473-3.506 4.031-3.506 2.361 0 3.937 1.361 3.937 3.256a3.262 3.262 0 0 1-1.819 2.935z" style={{ fill: '#7a8c99' }} data-name="路径 2672" transform="translate(-3223 -1848)"/>
          </SVGIcon>
        </Button>
      </Tooltip>
      
      <PopupState variant="popper" popupId="demo-popup-popper">
        {popupState => (
          <>
            <Button
              variant="contained" 
              {...bindToggle(popupState)}
              className={classnames(classes.menuItem, classes.menuItemAvatar)}
            >
              <Badge variant="dot" color="primary" classes={{ badge: classes.avatarBadge }}>
                <Avatar alt='Mark' src="https://material-ui.com/static/images/avatar/1.jpg" className={classes.avatar}/>
              </Badge>
            </Button>
            <CustomPopper popupState={popupState}>
              <Box width={260} height='auto' bgcolor='#fff' boxShadow={4} borderRadius={4}>
                <Box pt={2} ml={3} mr={3}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Avatar alt='Mark' src="https://material-ui.com/static/images/avatar/1.jpg" className={classes.avatarMd}/>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2">Mark</Typography>
                      <Badge variant="dot" color="primary" classes={{ badge: classes.statusBadge, root: classes.rootStatusBadge }}>
                        <Typography variant="caption">Online</Typography>
                      </Badge>
                    </Grid>
                  </Grid>
                </Box>
                <List aria-label="" dense={true}>
                  
      <PopupState variant="popper" popupId="demo-popup-popper1">
        {popupState => (
          <>
                  <ListItem button classes={{ gutters: classes.guttersListItem }} {...bindHover(popupState)}>
                    <ListItemIcon classes={{ root: classes.rootListItemIcon }}>
                      <SVGIcon viewBox="0 0 18 17.1" className={classes.svgIconWidth}>
                        <path style={{ fill: '#7a8c99' }} d="M6.1,17.1L6.1,17.1C6.2,17.1,6.2,17.2,6.1,17.1C6.2,17.2,6.2,17.1,6.1,17.1L6.1,17.1L6.1,17.1z"/>
                        <path style={{ fill: '#7a8c99' }} d="M17.8,6.9c0-0.2-0.2-0.3-0.3-0.3c-0.9-0.2-1.7-0.8-2.2-1.6c-0.5-0.8-0.6-1.8-0.3-2.7c0.1-0.2,0-0.3-0.1-0.5
                        C14,1,13,0.4,12,0c-0.2-0.1-0.3,0-0.5,0.1C10.9,0.8,10,1.2,9,1.2c-1,0-1.9-0.4-2.5-1.1C6.4,0,6.2,0,6,0C5,0.4,4,1,3.1,1.7
                        C3,1.8,2.9,2,3,2.2c0.3,0.9,0.2,1.9-0.3,2.7C2.2,5.7,1.4,6.3,0.5,6.5c-0.2,0-0.3,0.2-0.3,0.3C0.1,7.4,0,8,0,8.6
                        c0,0.6,0.1,1.1,0.2,1.7c0,0.2,0.2,0.3,0.3,0.3c0.9,0.2,1.7,0.8,2.2,1.6C3.2,13.1,3.3,14.1,3,15c0,0.2,0,0.3,0.1,0.5
                        C4,16.2,5,16.8,6,17.1c0,0,0.1,0,0.1,0h0.1c0.1,0,0.2-0.1,0.3-0.1C7.1,16.3,8,15.9,9,15.9c1,0,1.9,0.4,2.5,1.1
                        c0.1,0.1,0.3,0.2,0.5,0.1c1.1-0.4,2.1-1,2.9-1.7c0.1-0.1,0.2-0.3,0.1-0.5c-0.3-0.9-0.2-1.9,0.3-2.7c0.5-0.8,1.3-1.4,2.2-1.6
                        c0.2,0,0.3-0.2,0.3-0.3C17.9,9.7,18,9.1,18,8.6C18,8,17.9,7.4,17.8,6.9z M11.8,8.6c0,1.5-1.2,2.8-2.8,2.8h0l0,0
                        c-1.5,0-2.8-1.2-2.8-2.8S7.5,5.8,9,5.8C10.5,5.8,11.8,7,11.8,8.6L11.8,8.6z"/>
                      </SVGIcon>
                    </ListItemIcon>
                    <ListItemText primary="Preferences" />
                    <Arrow className={ classes.icon } color="action"/>
                    <CustomPopper popupState={popupState} arrow={false} disablePortal={true}>
                      <Box width={180} height='auto' bgcolor='#fff' boxShadow={4} borderRadius={4}>
                        <List aria-label="">
                          <ListItem button classes={{ gutters: classes.guttersListItem }}>
                            <Typography variant="caption">Global</Typography>
                          </ListItem>
                          <ListItem button classes={{ gutters: classes.guttersListItem }}>
                            <Typography variant="caption">Live Chat</Typography>
                          </ListItem>
                          <ListItem button classes={{ gutters: classes.guttersListItem }}>
                            <Typography variant="caption">Anytime Conversions</Typography>
                          </ListItem>
                        </List>
                      </Box>
                    </CustomPopper>
                  </ListItem>
                </>
        )}
      </PopupState>   
                  <ListItem button classes={{ gutters: classes.guttersListItem }}>
                    <ListItemIcon classes={{ root: classes.rootListItemIcon }}>
                      <SVGIcon viewBox="0 0 18 17.9" className={classes.svgIconWidth}>
                        <path style={{ fill: '#7a8c99' }} d="M8.9,14.8l4-3.9L15,8.9V3.6l-4.3,4.3V0H7v7.9L2.8,3.6v5.2l2.1,2.1L8.9,14.8z M0,15.7v2.2h18v-2.2H0z"/>
                      </SVGIcon>
                    </ListItemIcon>
                    <ListItemText primary="Download App" />
                  </ListItem>
                </List>
                <List classes={{ root: classes.rootList }} aria-label="" dense={true}>
                  <ListItem button classes={{ gutters: classes.guttersListItem }}>
                    <ListItemIcon classes={{ root: classes.rootListItemIcon }}>
                      <SVGIcon viewBox="0 0 18 17.1" className={classes.svgIconWidth}>
                        <path style={{ fill: '#7a8c99' }} d="M6.1,17.1L6.1,17.1C6.2,17.1,6.2,17.2,6.1,17.1C6.2,17.2,6.2,17.1,6.1,17.1L6.1,17.1L6.1,17.1z"/>
                        <path style={{ fill: '#7a8c99' }} d="M17.8,6.9c0-0.2-0.2-0.3-0.3-0.3c-0.9-0.2-1.7-0.8-2.2-1.6c-0.5-0.8-0.6-1.8-0.3-2.7c0.1-0.2,0-0.3-0.1-0.5
                        C14,1,13,0.4,12,0c-0.2-0.1-0.3,0-0.5,0.1C10.9,0.8,10,1.2,9,1.2c-1,0-1.9-0.4-2.5-1.1C6.4,0,6.2,0,6,0C5,0.4,4,1,3.1,1.7
                        C3,1.8,2.9,2,3,2.2c0.3,0.9,0.2,1.9-0.3,2.7C2.2,5.7,1.4,6.3,0.5,6.5c-0.2,0-0.3,0.2-0.3,0.3C0.1,7.4,0,8,0,8.6
                        c0,0.6,0.1,1.1,0.2,1.7c0,0.2,0.2,0.3,0.3,0.3c0.9,0.2,1.7,0.8,2.2,1.6C3.2,13.1,3.3,14.1,3,15c0,0.2,0,0.3,0.1,0.5
                        C4,16.2,5,16.8,6,17.1c0,0,0.1,0,0.1,0h0.1c0.1,0,0.2-0.1,0.3-0.1C7.1,16.3,8,15.9,9,15.9c1,0,1.9,0.4,2.5,1.1
                        c0.1,0.1,0.3,0.2,0.5,0.1c1.1-0.4,2.1-1,2.9-1.7c0.1-0.1,0.2-0.3,0.1-0.5c-0.3-0.9-0.2-1.9,0.3-2.7c0.5-0.8,1.3-1.4,2.2-1.6
                        c0.2,0,0.3-0.2,0.3-0.3C17.9,9.7,18,9.1,18,8.6C18,8,17.9,7.4,17.8,6.9z M11.8,8.6c0,1.5-1.2,2.8-2.8,2.8h0l0,0
                        c-1.5,0-2.8-1.2-2.8-2.8S7.5,5.8,9,5.8C10.5,5.8,11.8,7,11.8,8.6L11.8,8.6z"/>
                      </SVGIcon>
                    </ListItemIcon>
                    <ListItemText primary="Log Out" />
                    
                  </ListItem>
                  <ListItem button classes={{ gutters: classes.guttersListItem }}>
                    <ListItemIcon classes={{ root: classes.rootListItemIcon }}>
                      <SVGIcon viewBox="0 0 18 17.9" className={classes.svgIconWidth}>
                        <path style={{ fill: '#7a8c99' }} d="M8.9,14.8l4-3.9L15,8.9V3.6l-4.3,4.3V0H7v7.9L2.8,3.6v5.2l2.1,2.1L8.9,14.8z M0,15.7v2.2h18v-2.2H0z"/>
                      </SVGIcon>
                    </ListItemIcon>
                    <ListItemText primary="Exit" />
                  </ListItem>
                </List>
              </Box>
            </CustomPopper>
          </>
        )}
      </PopupState>
    </Box>
  );
};

export default BottomMenu;

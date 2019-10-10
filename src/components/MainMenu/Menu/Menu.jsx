import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SVGIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';
import Tooltip from '../../Tooltip/Tooltip';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles(theme => ({
  menuItem: {
    minWidth: 34,
    height: 34,
    marginTop: theme.spacing(2),

    '&:hover': {
      background: '#06385e',
    }
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
}));

const Menu = () => {
  const classes = useStyles();
  return (
    <Box textAlign='center'>
      <Tooltip title="Visitors" placement="right">
        <Button className={classes.menuItem}>
          <SVGIcon viewBox="0 0 18 14.31" className={classes.svgIconWidth}>
            <path id="路径_2669" d="M3555.2-717.151a6.585 6.585 0 0 0-2.1-.829 3.963 3.963 0 0 0 2.61-3.725 3.96 3.96 0 0 0-3.96-3.961 3.96 3.96 0 0 0-3.961 3.961 3.963 3.963 0 0 0 2.612 3.725 6.747 6.747 0 0 0-5.348 6.624h13.394a6.8 6.8 0 0 0-.2-1.626 6.759 6.759 0 0 0-3.047-4.169z" style={{ fill: '#7a8c99' }} data-name="路径 2669" transform="translate(-3540.45 725.666)"/>
            <g id="组_4778" data-name="组 4778" transform="translate(0 2.888)">
                <path id="路径_2670" d="M3546.534-716.862l.029-.062a4.721 4.721 0 0 1-1.562-3.5 4.686 4.686 0 0 1 .07-.775 3.128 3.128 0 0 0-1.323-.3 3.162 3.162 0 0 0-3.161 3.162 3.163 3.163 0 0 0 2.084 2.973 5.385 5.385 0 0 0-4.268 5.287h3.862a7.541 7.541 0 0 1 4.269-6.785z" style={{ fill: '#7a8c99' }} data-name="路径 2670" transform="translate(-3538.403 721.495)"/>
            </g>
          </SVGIcon>
        </Button>
      </Tooltip>
      <Tooltip title="Chats" placement="right">
        <Button className={classes.menuItem}>
          <Badge badgeContent={99} color="primary" classes={{ 
              badge: classes.badge
            }}
          >
            <SVGIcon viewBox="0 0 18 14.31" className={classes.svgIconWidth}>
            <path id="路径_3118" d="M3463.55-1153.889h-14.1a1.452 1.452 0 0 0-1.45 1.45v8.677a1.452 1.452 0 0 0 1.45 1.45h9.61l3.228 3.228v-3.228h1.261a1.452 1.452 0 0 0 1.45-1.45v-8.677a1.452 1.452 0 0 0-1.449-1.45zm-9.665 5.812a.654.654 0 0 1-.654.654.654.654 0 0 1-.654-.654.654.654 0 0 1 .654-.654.654.654 0 0 1 .654.654zm3.269 0a.654.654 0 0 1-.654.654.654.654 0 0 1-.654-.654.654.654 0 0 1 .654-.654.654.654 0 0 1 .654.654zm3.269 0a.654.654 0 0 1-.654.654.654.654 0 0 1-.654-.654.654.654 0 0 1 .654-.654.654.654 0 0 1 .654.654z" style={{ fill: '#7a8c99' }} data-name="路径 3118" transform="translate(-3448 1153.889)"/>
            </SVGIcon>
          </Badge>
        </Button>
      </Tooltip>
    </Box>
  );
};

export default Menu;

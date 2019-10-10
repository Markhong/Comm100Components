import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme();

const {
  getContrastText,
} = defaultTheme.palette;

// A custom theme for this app
const theme = createMuiTheme({
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  typography: {
    fontFamily: '"Nunito Sans", sans-serif',
    fontSize: 14,
    
    h1: {
      fontFamily: '"Nunito Sans", sans-serif',
    },
    h2: {
      fontFamily: '"Nunito Sans", sans-serif',
    },
    h3: {
      fontFamily: '"Nunito Sans", sans-serif',
    },
    h4: {
      fontFamily: '"Nunito Sans", sans-serif',
    },
    h5: {
      fontFamily: '"Nunito Sans", sans-serif',
    },
    h6: {
      fontFamily: '"Nunito Sans", sans-serif',
    },
    body1: { 
      fontFamily: '"Nunito Sans", sans-serif',
    },
    body2: {
      fontFamily: '"Nunito Sans", sans-serif',
    },
    subtitle1: {
      fontFamily: '"Nunito Sans", sans-serif',
    },
    subtitle2: {
      fontFamily: '"Nunito Sans", sans-serif',
    },
    button: {
      fontFamily: '"Nunito Sans", sans-serif',
    },
    caption: {
      fontFamily: '"Nunito Sans", sans-serif',
    },
    overline: {
      fontFamily: '"Nunito Sans", sans-serif',
    },
  },
  palette: {
    primary: {
      contrastText: getContrastText('rgb(17, 82, 147)'),
      dark: 'rgb(17, 82, 147)',
      light: 'rgb(71, 145, 219)',
      main: '#1976d2',
    },
    secondary: {
      contrastText: '#fff',
      dark: 'rgb(154, 0, 54)',
      light: 'rgb(227, 51, 113)',
      main: 'rgb(220, 0, 78)',
    },
    error: {
      contrastText: '#fff',
      dark: '#d32f2f',
      light: '#e57373',
      main: '#f44336',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
    background: {
      default: '#fff',
      level1: '#fff',
      level2: '#f5f5f5',
      paper: '#fff',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      hover: 'rgba(0, 0, 0, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.14)',
    },
    divider: "rgba(0, 0, 0, 0.12)",
    text: {
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  // shadows: [],
  zIndex: {
    mobileStepper: 1000,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  }
});

export default theme;
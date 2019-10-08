import { blueGrey, red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#089',
    },
    secondary: {
      main: blueGrey[700],
    },
    error: {
      main: red['500'],
    },
  },
});

export default theme;

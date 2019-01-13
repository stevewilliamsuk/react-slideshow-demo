import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

theme.overrides = {
  MuiPaper: {
    root: {
      padding: theme.spacing.unit * 3
    }
  }
};

export default theme;

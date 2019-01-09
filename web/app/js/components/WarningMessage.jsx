import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';

const WarningMessage = withStyles(theme => ({
  root: {
    background: theme.status.dark.warning,
    maxWidth: "100%"
  },
}), {
  withTheme: true
})(SnackbarContent);

export default WarningMessage;

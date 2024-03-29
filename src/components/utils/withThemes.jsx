import { withLanguage } from '@mlambda-net/web-core/lang';
import { withStyles, withTheme } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

const withThemes = (styles) => {
  return (Component) =>
    withTheme(withStyles(() => styles(useTheme()))(withLanguage(Component)));
};

export default withThemes;

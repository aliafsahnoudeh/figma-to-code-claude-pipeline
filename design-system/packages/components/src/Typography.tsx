import MuiTypography from '@mui/material/Typography';
import type { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

export interface TypographyProps extends MuiTypographyProps {}

/**
 * Typography component - displays text with theme-aware styles.
 * Use variant prop to apply semantic typography styles from the theme.
 */
export const Typography = (props: TypographyProps) => {
  return <MuiTypography {...props} />;
};

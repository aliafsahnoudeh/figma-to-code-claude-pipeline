import MuiBox from '@mui/material/Box';
import type { BoxProps as MuiBoxProps } from '@mui/material/Box';

export interface BoxProps extends MuiBoxProps {}

/**
 * Box component - flexible container with built-in spacing utilities.
 * A fundamental layout primitive from Material UI.
 */
export const Box = (props: BoxProps) => {
  return <MuiBox {...props} />;
};

import MuiDivider from '@mui/material/Divider';
import type { DividerProps as MuiDividerProps } from '@mui/material/Divider';

export interface DividerProps extends MuiDividerProps {}

/**
 * Divider component - thin line for separating content.
 * Can be horizontal or vertical depending on the orientation prop.
 */
export const Divider = (props: DividerProps) => {
  return <MuiDivider {...props} />;
};

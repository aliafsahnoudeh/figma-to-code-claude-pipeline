import MuiStack from '@mui/material/Stack';
import type { StackProps as MuiStackProps } from '@mui/material/Stack';

export interface StackProps extends MuiStackProps {}

/**
 * Stack component - one-dimensional layout container with spacing.
 * Manages spacing between children in a column or row direction.
 */
export const Stack = (props: StackProps) => {
  return <MuiStack {...props} />;
};

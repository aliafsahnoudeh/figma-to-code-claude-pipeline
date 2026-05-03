import MuiCardHeader from '@mui/material/CardHeader';
import type { CardHeaderProps as MuiCardHeaderProps } from '@mui/material/CardHeader';

export interface CardHeaderProps extends MuiCardHeaderProps {}

/**
 * CardHeader component - standardized header for Card.
 * Inherits all MUI CardHeader props for maximum flexibility.
 */
export const CardHeader = (props: CardHeaderProps) => {
  return <MuiCardHeader {...props} />;
};

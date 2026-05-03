import MuiCardContent from '@mui/material/CardContent';
import type { CardContentProps as MuiCardContentProps } from '@mui/material/CardContent';

export interface CardContentProps extends MuiCardContentProps {}

/**
 * CardContent component - standardized content area for Card.
 * Inherits all MUI CardContent props for maximum flexibility.
 */
export const CardContent = (props: CardContentProps) => {
  return <MuiCardContent {...props} />;
};

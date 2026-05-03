import MuiCardActions from '@mui/material/CardActions';
import type { CardActionsProps as MuiCardActionsProps } from '@mui/material/CardActions';

export interface CardActionsProps extends MuiCardActionsProps {}

/**
 * CardActions component - action area for Card buttons.
 * Inherits all MUI CardActions props for maximum flexibility.
 */
export const CardActions = (props: CardActionsProps) => {
  return <MuiCardActions {...props} />;
};

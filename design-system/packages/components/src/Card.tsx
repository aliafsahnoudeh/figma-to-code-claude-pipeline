import MuiCard from '@mui/material/Card';
import type { CardProps as MuiCardProps } from '@mui/material/Card';

export interface CardProps extends MuiCardProps {}

/**
 * Card component - container for grouping related content.
 * Inherits all MUI Card props for maximum flexibility.
 */
export const Card = (props: CardProps) => {
  return <MuiCard {...props} />;
};

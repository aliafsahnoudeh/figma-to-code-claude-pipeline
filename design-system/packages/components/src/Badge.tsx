import React from 'react';
import MuiBadge from '@mui/material/Badge';
import type { BadgeProps as MuiBadgeProps } from '@mui/material/Badge';

export interface BadgeProps extends MuiBadgeProps {
  /**
   * The content rendered within the badge
   */
  badgeContent?: React.ReactNode;

  /**
   * The element to attach the badge to
   */
  children?: React.ReactNode;
}

/**
 * Badge component - flexible wrapper around MUI Badge
 *
 * Displays notification counts, status indicators, or other information
 * anchored to another element.
 *
 * @example
 * ```tsx
 * <Badge badgeContent={4} color="primary">
 *   <MailIcon />
 * </Badge>
 * ```
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(props, ref) {
  return <MuiBadge ref={ref} {...props} />;
});

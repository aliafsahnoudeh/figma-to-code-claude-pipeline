import React from 'react';
import MuiTooltip from '@mui/material/Tooltip';
import type { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';

export interface TooltipProps extends MuiTooltipProps {
  /**
   * Tooltip content
   */
  title: NonNullable<React.ReactNode>;

  /**
   * The element to attach the tooltip to
   */
  children: React.ReactElement;
}

/**
 * Tooltip component - flexible wrapper around MUI Tooltip
 *
 * Displays informative text when users hover over, focus on, or tap an element.
 *
 * @example
 * ```tsx
 * <Tooltip title="Delete item">
 *   <IconButton>
 *     <DeleteIcon />
 *   </IconButton>
 * </Tooltip>
 * ```
 */
export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(function Tooltip(props, ref) {
  return <MuiTooltip ref={ref} {...props} />;
});

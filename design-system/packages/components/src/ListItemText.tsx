import React from 'react';
import MuiListItemText from '@mui/material/ListItemText';
import type { ListItemTextProps as MuiListItemTextProps } from '@mui/material/ListItemText';

export interface ListItemTextProps extends MuiListItemTextProps {
  /**
   * Primary text content
   */
  primary?: React.ReactNode;

  /**
   * Secondary text content
   */
  secondary?: React.ReactNode;
}

/**
 * ListItemText component - flexible wrapper around MUI ListItemText
 *
 * Displays primary and optional secondary text in a list item.
 *
 * @example
 * ```tsx
 * <ListItemText
 *   primary="Primary text"
 *   secondary="Secondary description"
 * />
 * ```
 */
export const ListItemText = React.forwardRef<HTMLDivElement, ListItemTextProps>(
  function ListItemText(props, ref) {
    return <MuiListItemText ref={ref} {...props} />;
  }
);

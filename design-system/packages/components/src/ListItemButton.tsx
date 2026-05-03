import React from 'react';
import MuiListItemButton from '@mui/material/ListItemButton';
import type { ListItemButtonProps as MuiListItemButtonProps } from '@mui/material/ListItemButton';

export interface ListItemButtonProps extends MuiListItemButtonProps {
  /**
   * Button content
   */
  children?: React.ReactNode;
}

/**
 * ListItemButton component - flexible wrapper around MUI ListItemButton
 *
 * Makes a list item clickable with button semantics and hover states.
 *
 * @example
 * ```tsx
 * <ListItemButton onClick={handleClick}>
 *   <ListItemText primary="Clickable item" />
 * </ListItemButton>
 * ```
 */
export const ListItemButton = React.forwardRef<HTMLDivElement, ListItemButtonProps>(
  function ListItemButton(props, ref) {
    return <MuiListItemButton ref={ref} {...props} />;
  }
);

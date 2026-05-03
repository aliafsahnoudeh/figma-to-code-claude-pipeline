import React from 'react';
import MuiListItem from '@mui/material/ListItem';
import type { ListItemProps as MuiListItemProps } from '@mui/material/ListItem';

export interface ListItemProps extends MuiListItemProps {
  /**
   * List item content
   */
  children?: React.ReactNode;
}

/**
 * ListItem component - flexible wrapper around MUI ListItem
 *
 * Individual item in a list. Can contain text, icons, buttons, etc.
 *
 * @example
 * ```tsx
 * <ListItem>
 *   <ListItemText primary="Item text" />
 * </ListItem>
 * ```
 */
export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  function ListItem(props, ref) {
    return <MuiListItem ref={ref} {...props} />;
  }
);

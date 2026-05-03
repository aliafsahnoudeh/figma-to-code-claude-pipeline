import React from 'react';
import MuiList from '@mui/material/List';
import type { ListProps as MuiListProps } from '@mui/material/List';

export interface ListProps extends MuiListProps {
  /**
   * List content (typically ListItem components)
   */
  children?: React.ReactNode;
}

/**
 * List component - flexible wrapper around MUI List
 *
 * Container for list items. Use with ListItem, ListItemButton, and ListItemText.
 *
 * @example
 * ```tsx
 * <List>
 *   <ListItem>Item 1</ListItem>
 *   <ListItem>Item 2</ListItem>
 * </List>
 * ```
 */
export const List = React.forwardRef<HTMLUListElement, ListProps>(function List(props, ref) {
  return <MuiList ref={ref} {...props} />;
});

import React from 'react';
import MuiMenuItem from '@mui/material/MenuItem';
import type { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';

export interface MenuItemProps extends MuiMenuItemProps {
  /**
   * Menu item content
   */
  children?: React.ReactNode;
}

/**
 * MenuItem component - flexible wrapper around MUI MenuItem
 *
 * Individual item in a menu. Use within Menu component.
 *
 * @example
 * ```tsx
 * <MenuItem onClick={handleClick}>
 *   Edit
 * </MenuItem>
 * ```
 */
export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  function MenuItem(props, ref) {
    return <MuiMenuItem ref={ref} {...props} />;
  }
);

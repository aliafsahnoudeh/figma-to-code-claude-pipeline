import React from 'react';
import MuiMenu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import type { MenuProps as MuiMenuProps } from '@mui/material/Menu';

export interface MenuItemConfig {
  /**
   * Unique identifier for the menu item
   */
  value: string;

  /**
   * Label to display
   */
  label: React.ReactNode;

  /**
   * If true, this item is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Click handler for this specific item
   */
  onClick?: (event: React.MouseEvent) => void;
}

export interface MenuProps extends Omit<MuiMenuProps, 'open'> {
  /**
   * If true, the menu is visible
   */
  open: boolean;

  /**
   * Callback fired when the menu requests to be closed
   */
  onClose: (event: object, reason: 'backdropClick' | 'escapeKeyDown' | 'tabKeyDown') => void;

  /**
   * The anchor element for the menu
   */
  anchorEl?: MuiMenuProps['anchorEl'];

  /**
   * Menu content (typically MenuItem components)
   * If provided, takes precedence over items prop
   */
  children?: React.ReactNode;

  /**
   * Array of menu items (simple API)
   * Use this OR children for compositional API
   */
  items?: MenuItemConfig[];

  /**
   * Callback fired when a menu item is clicked (when using items prop)
   */
  onItemClick?: (value: string, event: React.MouseEvent) => void;
}

// Component resolution helper for SSR compatibility
const resolveComponent = <T,>(component: T): T => {
  const maybeModule = component as unknown as { default?: T };
  return maybeModule &&
    typeof maybeModule === 'object' &&
    'default' in maybeModule &&
    maybeModule.default
    ? maybeModule.default
    : component;
};

const MuiMenuResolved = resolveComponent(MuiMenu);
const MuiMenuItemResolved = resolveComponent(MuiMenuItem);

/**
 * Menu component with hybrid API
 *
 * Wraps MUI Menu with both simple array-based API and compositional API.
 * Use items prop for simple menus, or children for advanced customization.
 *
 * @example
 * Simple API:
 * ```tsx
 * <Menu
 *   open={open}
 *   anchorEl={anchorEl}
 *   onClose={handleClose}
 *   items={[
 *     { value: 'edit', label: 'Edit' },
 *     { value: 'delete', label: 'Delete' },
 *   ]}
 *   onItemClick={(value) => handleAction(value)}
 * />
 * ```
 *
 * Compositional API:
 * ```tsx
 * <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
 *   <MenuItem onClick={handleEdit}>Edit</MenuItem>
 *   <MenuItem onClick={handleDelete}>Delete</MenuItem>
 * </Menu>
 * ```
 */
export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(function Menu(
  { open, onClose, anchorEl, children, items, onItemClick, ...props },
  ref
) {
  const handleItemClick = (value: string) => (event: React.MouseEvent) => {
    onItemClick?.(value, event);
    onClose(event, 'backdropClick');
  };

  const content = items
    ? items.map((item) => (
        <MuiMenuItemResolved
          key={item.value}
          disabled={item.disabled}
          onClick={item.onClick || handleItemClick(item.value)}
        >
          {item.label}
        </MuiMenuItemResolved>
      ))
    : children;

  return (
    <MuiMenuResolved ref={ref} open={open} onClose={onClose} anchorEl={anchorEl} {...props}>
      {content}
    </MuiMenuResolved>
  );
});

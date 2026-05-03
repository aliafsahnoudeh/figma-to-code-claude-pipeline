import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import type { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import type { SxProps, Theme } from '@mui/material/styles';

export interface DrawerProps extends Omit<MuiDrawerProps, 'title'> {
  /**
   * If true, the drawer is visible
   */
  open: boolean;

  /**
   * Callback fired when the drawer requests to be closed
   */
  onClose?: (event: object, reason: 'backdropClick' | 'escapeKeyDown') => void;

  /**
   * Drawer content
   */
  children: React.ReactNode;

  /**
   * Optional title displayed at the top of the drawer
   */
  title?: React.ReactNode;

  /**
   * If true, displays a close button in the header
   * @default false
   */
  showCloseButton?: boolean;

  /**
   * Side from which the drawer will appear
   * @default 'left'
   */
  anchor?: 'left' | 'right' | 'top' | 'bottom';

  /**
   * Custom styles via MUI sx prop
   */
  sx?: SxProps<Theme>;
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

const MuiDrawerResolved = resolveComponent(MuiDrawer);
const IconButtonResolved = resolveComponent(IconButton);
const BoxResolved = resolveComponent(Box);

/**
 * Drawer component with hybrid API
 *
 * Wraps MUI Drawer with optional title and close button for convenience.
 * Can be used with simple props or full compositional API.
 *
 * @example
 * Simple API with title and close button:
 * ```tsx
 * <Drawer
 *   open={open}
 *   onClose={handleClose}
 *   title="Navigation"
 *   showCloseButton
 * >
 *   <List>
 *     <ListItem>Item 1</ListItem>
 *   </List>
 * </Drawer>
 * ```
 *
 * Compositional API:
 * ```tsx
 * <Drawer open={open} onClose={handleClose}>
 *   <Box sx={{ width: 250 }}>Custom content</Box>
 * </Drawer>
 * ```
 */
export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(function Drawer(
  { open, onClose, children, title, showCloseButton = false, anchor = 'left', sx, ...props },
  ref
) {
  const handleClose = (event: object) => {
    onClose?.(event, 'backdropClick');
  };

  const hasHeader = title || showCloseButton;

  return (
    <MuiDrawerResolved ref={ref} open={open} onClose={onClose} anchor={anchor} sx={sx} {...props}>
      {hasHeader && (
        <BoxResolved
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2,
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          {title && (
            <BoxResolved component="h2" sx={{ m: 0, fontSize: '1.25rem', fontWeight: 500 }}>
              {title}
            </BoxResolved>
          )}
          {showCloseButton && (
            <IconButtonResolved onClick={handleClose} aria-label="close drawer" edge="end">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </IconButtonResolved>
          )}
        </BoxResolved>
      )}
      {children}
    </MuiDrawerResolved>
  );
});

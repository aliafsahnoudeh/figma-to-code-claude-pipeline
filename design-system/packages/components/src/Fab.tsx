import React from 'react';
import MuiFab from '@mui/material/Fab';
import type { SxProps, Theme } from '@mui/material/styles';

export type FabColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'default'
  | 'inherit';
export type FabSize = 'small' | 'medium' | 'large';
export type FabVariant = 'circular' | 'extended';

export interface FabProps {
  /**
   * Fab content (typically an icon, or text for extended variant)
   */
  children: React.ReactNode;

  /**
   * The color of the button
   * @default 'primary'
   */
  color?: FabColor;

  /**
   * The size of the button
   * @default 'large'
   */
  size?: FabSize;

  /**
   * The variant of the button
   * @default 'circular'
   */
  variant?: FabVariant;

  /**
   * If true, the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Button type attribute
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * aria-label for accessibility
   */
  'aria-label'?: string;

  /**
   * Custom styles via MUI sx prop
   */
  sx?: SxProps<Theme>;

  /**
   * Additional CSS class name
   * @deprecated Prefer using `sx` prop or theme tokens for styling
   */
  className?: string;
}

/**
 * Fab (Floating Action Button) component with curated API
 *
 * Wraps MUI Fab with DS-specific props and behavior.
 * Used for primary actions that float above the content.
 *
 * @example
 * ```tsx
 * <Fab color="primary" aria-label="add" onClick={handleAdd}>
 *   <AddIcon />
 * </Fab>
 *
 * <Fab variant="extended" color="primary">
 *   <NavigationIcon sx={{ mr: 1 }} />
 *   Navigate
 * </Fab>
 * ```
 */
export const Fab = React.forwardRef<HTMLButtonElement, FabProps>(function Fab(
  {
    children,
    color = 'primary',
    size = 'large',
    variant = 'circular',
    disabled = false,
    onClick,
    type = 'button',
    sx,
    className,
    ...otherProps
  },
  ref
) {
  return (
    <MuiFab
      ref={ref}
      color={color}
      size={size}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      type={type}
      sx={sx}
      className={className}
      {...otherProps}
    >
      {children}
    </MuiFab>
  );
});

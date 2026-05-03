import React from 'react';
import MuiButton from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import type { SxProps, Theme } from '@mui/material/styles';

export type ButtonColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
export type ButtonVariant = 'contained' | 'outlined' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  /**
   * Button content
   */
  children: React.ReactNode;

  /**
   * Color of the button (matches theme palette colors)
   * @default 'primary'
   */
  color?: ButtonColor;

  /**
   * Visual style variant
   * @default 'contained'
   */
  variant?: ButtonVariant;

  /**
   * Button size (driven by design tokens)
   * @default 'medium'
   */
  size?: ButtonSize;

  /**
   * Loading state - shows spinner and disables button
   * @default false
   */
  loading?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Full width button
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Start icon
   */
  startIcon?: React.ReactNode;

  /**
   * End icon
   */
  endIcon?: React.ReactNode;

  /**
   * Button type attribute
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Custom styles via MUI sx prop
   * Note: Use sparingly - prefer customization via design tokens
   */
  sx?: SxProps<Theme>;

  /**
   * Additional CSS class name
   * @deprecated Prefer using `sx` prop or theme tokens for styling
   */
  className?: string;
}

/**
 * Button component with curated API
 *
 * Wraps MUI Button with DS-specific props and behavior.
 * Sizing and styling are driven by design tokens via theme overrides.
 *
 * @example
 * ```tsx
 * <Button color="primary" variant="contained" size="medium">
 *   Click me
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    color = 'primary',
    variant = 'contained',
    size = 'medium',
    loading = false,
    disabled = false,
    onClick,
    type = 'button',
    fullWidth = false,
    startIcon,
    endIcon,
    sx,
    className,
  },
  ref
) {
  const isDisabled = disabled || loading;

  return (
    <MuiButton
      ref={ref}
      color={color}
      variant={variant}
      size={size}
      disabled={isDisabled}
      onClick={onClick}
      type={type}
      fullWidth={fullWidth}
      startIcon={loading ? <CircularProgress size={16} color="inherit" /> : startIcon}
      endIcon={endIcon}
      sx={sx}
      className={className}
    >
      {children}
    </MuiButton>
  );
});

import React from 'react';
import MuiIconButton from '@mui/material/IconButton';
import type { SxProps, Theme } from '@mui/material/styles';

export type IconButtonColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'default'
  | 'inherit';
export type IconButtonSize = 'small' | 'medium' | 'large';
export type IconButtonEdge = 'start' | 'end' | false;

export interface IconButtonProps {
  /**
   * Icon element to display (typically an icon component)
   */
  children: React.ReactNode;

  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * If true, the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * The size of the button
   * @default 'medium'
   */
  size?: IconButtonSize;

  /**
   * The color of the button
   * @default 'default'
   */
  color?: IconButtonColor;

  /**
   * If given, uses a negative margin to counteract the padding on one side
   * (useful for aligning to the left or right of other content)
   * @default false
   */
  edge?: IconButtonEdge;

  /**
   * Button type attribute
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Tooltip text to display on hover
   * Note: Requires Tooltip component to be implemented for full functionality
   */
  title?: string;

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
 * IconButton component with curated API
 *
 * Wraps MUI IconButton with Design System-specific props and behavior.
 * Used for icon-only clickable buttons.
 *
 * @example
 * ```tsx
 * <IconButton
 *   aria-label="delete"
 *   color="error"
 *   onClick={handleDelete}
 * >
 *   <DeleteIcon />
 * </IconButton>
 * ```
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  {
    children,
    onClick,
    disabled = false,
    size = 'medium',
    color = 'default',
    edge = false,
    type = 'button',
    title,
    sx,
    className,
    ...otherProps
  },
  ref
) {
  return (
    <MuiIconButton
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      size={size}
      color={color}
      edge={edge}
      type={type}
      title={title}
      sx={sx}
      className={className}
      {...otherProps}
    >
      {children}
    </MuiIconButton>
  );
});

import React from 'react';
import MuiChip from '@mui/material/Chip';
import type { SxProps, Theme } from '@mui/material/styles';

export type ChipColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success';
export type ChipVariant = 'filled' | 'outlined';
export type ChipSize = 'small' | 'medium';

export interface ChipProps {
  /**
   * The content of the chip
   */
  label: React.ReactNode;

  /**
   * The variant of the chip
   * @default 'filled'
   */
  variant?: ChipVariant;

  /**
   * The color of the chip
   * @default 'default'
   */
  color?: ChipColor;

  /**
   * The size of the chip
   * @default 'medium'
   */
  size?: ChipSize;

  /**
   * Callback fired when the delete icon is clicked
   */
  onDelete?: (event: React.MouseEvent) => void;

  /**
   * Callback fired when the chip is clicked
   */
  onClick?: (event: React.MouseEvent) => void;

  /**
   * If true, the chip is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Icon element displayed at the start of the chip
   */
  icon?: React.ReactElement;

  /**
   * Icon element displayed when onDelete is provided
   */
  deleteIcon?: React.ReactElement;

  /**
   * Avatar element displayed at the start of the chip
   */
  avatar?: React.ReactElement;

  /**
   * If true, the chip appears clickable with hover effects
   * @default false
   */
  clickable?: boolean;

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
 * Chip component with curated API
 *
 * Wraps MUI Chip with Design System-specific props and behavior.
 * Used for tags, filters, compact information, and selections.
 *
 * @example
 * ```tsx
 * <Chip
 *   label="Active"
 *   color="success"
 *   variant="filled"
 *   onDelete={() => handleRemove()}
 * />
 * ```
 */
export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(function Chip(
  {
    label,
    variant = 'filled',
    color = 'default',
    size = 'medium',
    onDelete,
    onClick,
    disabled = false,
    icon,
    deleteIcon,
    avatar,
    clickable = false,
    sx,
    className,
  },
  ref
) {
  return (
    <MuiChip
      ref={ref}
      label={label}
      variant={variant}
      color={color}
      size={size}
      onDelete={onDelete}
      onClick={onClick}
      disabled={disabled}
      icon={icon}
      deleteIcon={deleteIcon}
      avatar={avatar}
      clickable={clickable || !!onClick}
      sx={sx}
      className={className}
    />
  );
});

import React from 'react';
import MuiToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import type { SxProps, Theme } from '@mui/material/styles';

export type ToggleButtonGroupColor =
  | 'standard'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success';
export type ToggleButtonGroupSize = 'small' | 'medium' | 'large';

export interface ToggleButtonGroupProps {
  /**
   * The currently selected value(s)
   */
  value?: string | number | (string | number)[] | null;

  /**
   * Callback fired when the value changes
   */
  onChange?: (value: string | number | (string | number)[] | null, event: React.MouseEvent) => void;

  /**
   * ToggleButtonGroup content (ToggleButton components)
   */
  children?: React.ReactNode;

  /**
   * If true, multiple buttons can be selected
   * @default false
   */
  multiple?: boolean;

  /**
   * If true, at least one button must be selected
   * @default false
   */
  exclusive?: boolean;

  /**
   * If true, the button group is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * The color of the button group
   * @default 'standard'
   */
  color?: ToggleButtonGroupColor;

  /**
   * The size of the buttons
   * @default 'medium'
   */
  size?: ToggleButtonGroupSize;

  /**
   * The component orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * If true, only the selected button receives the color
   * @default false
   */
  fullWidth?: boolean;

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
 * ToggleButtonGroup component with curated API
 *
 * Wraps MUI ToggleButtonGroup with simplified onChange handler.
 * Groups related toggle buttons together.
 *
 * @example
 * ```tsx
 * <ToggleButtonGroup
 *   value={alignment}
 *   onChange={(newValue) => setAlignment(newValue)}
 *   exclusive
 * >
 *   <ToggleButton value="left">
 *     <AlignLeftIcon />
 *   </ToggleButton>
 *   <ToggleButton value="center">
 *     <AlignCenterIcon />
 *   </ToggleButton>
 *   <ToggleButton value="right">
 *     <AlignRightIcon />
 *   </ToggleButton>
 * </ToggleButtonGroup>
 * ```
 */
export const ToggleButtonGroup = React.forwardRef<HTMLDivElement, ToggleButtonGroupProps>(
  function ToggleButtonGroup(
    {
      value,
      onChange,
      children,
      multiple = false,
      exclusive = true,
      disabled = false,
      color = 'standard',
      size = 'medium',
      orientation = 'horizontal',
      fullWidth = false,
      sx,
      className,
    },
    ref
  ) {
    const handleChange = (
      _event: React.MouseEvent<HTMLElement>,
      newValue: string | number | (string | number)[] | null
    ) => {
      onChange?.(newValue, _event);
    };

    return (
      <MuiToggleButtonGroup
        ref={ref}
        value={value}
        onChange={handleChange}
        exclusive={!multiple && exclusive}
        disabled={disabled}
        color={color}
        size={size}
        orientation={orientation}
        fullWidth={fullWidth}
        sx={sx}
        className={className}
      >
        {children}
      </MuiToggleButtonGroup>
    );
  }
);

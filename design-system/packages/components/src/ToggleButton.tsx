import React from 'react';
import MuiToggleButton from '@mui/material/ToggleButton';
import type { ToggleButtonProps as MuiToggleButtonProps } from '@mui/material/ToggleButton';

export interface ToggleButtonProps extends MuiToggleButtonProps {
  /**
   * The value to associate with the button
   */
  value: string | number;

  /**
   * Button content
   */
  children?: React.ReactNode;
}

/**
 * ToggleButton component - flexible wrapper around MUI ToggleButton
 *
 * Individual button in a ToggleButtonGroup.
 *
 * @example
 * ```tsx
 * <ToggleButton value="left">
 *   <AlignLeftIcon />
 * </ToggleButton>
 * ```
 */
export const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
  function ToggleButton(props, ref) {
    return <MuiToggleButton ref={ref} {...props} />;
  }
);

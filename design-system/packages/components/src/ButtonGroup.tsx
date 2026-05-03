import React from 'react';
import MuiButtonGroup from '@mui/material/ButtonGroup';
import type { ButtonGroupProps as MuiButtonGroupProps } from '@mui/material/ButtonGroup';

export interface ButtonGroupProps extends MuiButtonGroupProps {
  /**
   * ButtonGroup content (typically Button components)
   */
  children?: React.ReactNode;
}

/**
 * ButtonGroup component - flexible wrapper around MUI ButtonGroup
 *
 * Groups related buttons together.
 *
 * @example
 * ```tsx
 * <ButtonGroup variant="contained">
 *   <Button>One</Button>
 *   <Button>Two</Button>
 *   <Button>Three</Button>
 * </ButtonGroup>
 * ```
 */
export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  function ButtonGroup(props, ref) {
    return <MuiButtonGroup ref={ref} {...props} />;
  }
);

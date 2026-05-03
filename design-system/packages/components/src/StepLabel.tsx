import React from 'react';
import MuiStepLabel from '@mui/material/StepLabel';
import type { StepLabelProps as MuiStepLabelProps } from '@mui/material/StepLabel';

export interface StepLabelProps extends MuiStepLabelProps {
  /**
   * Label content
   */
  children?: React.ReactNode;
}

/**
 * StepLabel component - flexible wrapper around MUI StepLabel
 *
 * Label for a Step in a Stepper.
 *
 * @example
 * ```tsx
 * <StepLabel>Complete profile</StepLabel>
 * <StepLabel optional={<Typography variant="caption">Optional</Typography>}>
 *   Additional info
 * </StepLabel>
 * ```
 */
export const StepLabel = React.forwardRef<HTMLDivElement, StepLabelProps>(
  function StepLabel(props, ref) {
    return <MuiStepLabel ref={ref} {...props} />;
  }
);

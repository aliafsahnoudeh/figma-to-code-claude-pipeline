import React from 'react';
import MuiStep from '@mui/material/Step';
import type { StepProps as MuiStepProps } from '@mui/material/Step';

export interface StepProps extends MuiStepProps {
  /**
   * Step content (typically StepLabel)
   */
  children?: React.ReactNode;
}

/**
 * Step component - flexible wrapper around MUI Step
 *
 * Individual step in a Stepper component.
 *
 * @example
 * ```tsx
 * <Step>
 *   <StepLabel>Step title</StepLabel>
 * </Step>
 * ```
 */
export const Step = React.forwardRef<HTMLDivElement, StepProps>(function Step(props, ref) {
  return <MuiStep ref={ref} {...props} />;
});

import React from 'react';
import MuiStepper from '@mui/material/Stepper';
import type { StepperProps as MuiStepperProps } from '@mui/material/Stepper';

export interface StepperProps extends MuiStepperProps {
  /**
   * Stepper content (typically Step components)
   */
  children?: React.ReactNode;
}

/**
 * Stepper component - flexible wrapper around MUI Stepper
 *
 * Displays progress through numbered steps.
 *
 * @example
 * ```tsx
 * <Stepper activeStep={activeStep}>
 *   <Step><StepLabel>Step 1</StepLabel></Step>
 *   <Step><StepLabel>Step 2</StepLabel></Step>
 * </Stepper>
 * ```
 */
export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(function Stepper(props, ref) {
  return <MuiStepper ref={ref} {...props} />;
});

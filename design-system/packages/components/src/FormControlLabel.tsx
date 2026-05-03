import React from 'react';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import type { FormControlLabelProps as MuiFormControlLabelProps } from '@mui/material/FormControlLabel';

export interface FormControlLabelProps extends MuiFormControlLabelProps {
  /**
   * A control element (Checkbox, Radio, Switch, etc.)
   */
  control: React.ReactElement;

  /**
   * The label content
   */
  label: React.ReactNode;
}

/**
 * FormControlLabel component - flexible wrapper around MUI FormControlLabel
 *
 * Attaches a label to a form control (Checkbox, Radio, Switch).
 * Used internally by Checkbox, Radio, and Switch components.
 *
 * @example
 * ```tsx
 * <FormControlLabel
 *   control={<Checkbox />}
 *   label="Accept terms"
 * />
 * ```
 */
export const FormControlLabel = React.forwardRef<HTMLLabelElement, FormControlLabelProps>(
  function FormControlLabel(props, ref) {
    return <MuiFormControlLabel ref={ref} {...props} />;
  }
);

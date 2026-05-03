import React from 'react';
import MuiCheckbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import type { SxProps, Theme } from '@mui/material/styles';

export type CheckboxColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'default';
export type CheckboxSize = 'small' | 'medium';

export interface CheckboxProps {
  /**
   * If true, the component is checked
   * @default false
   */
  checked?: boolean;

  /**
   * Callback fired when the state is changed
   */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * If true, the component is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * If true, the component appears indeterminate
   * @default false
   */
  indeterminate?: boolean;

  /**
   * Label text to display next to the checkbox
   */
  label?: React.ReactNode;

  /**
   * Helper text to display below the checkbox
   */
  helperText?: string;

  /**
   * If true, the checkbox will be displayed in an error state
   * @default false
   */
  error?: boolean;

  /**
   * The size of the checkbox
   * @default 'medium'
   */
  size?: CheckboxSize;

  /**
   * The color of the checkbox
   * @default 'primary'
   */
  color?: CheckboxColor;

  /**
   * The value attribute of the input element
   */
  value?: string;

  /**
   * The name attribute of the input element
   */
  name?: string;

  /**
   * If true, the input element is required
   * @default false
   */
  required?: boolean;

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
 * Checkbox component with curated API
 *
 * Wraps MUI Checkbox with DS-specific props and behavior.
 * Includes integrated FormControlLabel for easy label support.
 *
 * @example
 * ```tsx
 * <Checkbox
 *   label="Accept terms and conditions"
 *   checked={accepted}
 *   onChange={(checked) => setAccepted(checked)}
 * />
 * ```
 */
export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(function Checkbox(
  {
    checked = false,
    onChange,
    disabled = false,
    indeterminate = false,
    label,
    helperText,
    error = false,
    size = 'medium',
    color = 'primary',
    value,
    name,
    required = false,
    sx,
    className,
  },
  ref
) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked, event);
  };

  const checkbox = (
    <MuiCheckbox
      ref={ref}
      checked={checked}
      onChange={handleChange}
      disabled={disabled}
      indeterminate={indeterminate}
      size={size}
      color={color}
      value={value}
      name={name}
      required={required}
      sx={sx}
      className={className}
    />
  );

  if (!label && !helperText) {
    return checkbox;
  }

  return (
    <FormControl error={error} disabled={disabled}>
      {label ? <FormControlLabel control={checkbox} label={label} /> : checkbox}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
});

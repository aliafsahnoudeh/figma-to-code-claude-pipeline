import React from 'react';
import MuiRadioGroup from '@mui/material/RadioGroup';
import MuiRadio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import type { SxProps, Theme } from '@mui/material/styles';

export interface RadioOption {
  /**
   * The value of the radio option
   */
  value: string;

  /**
   * The label to display for this option
   */
  label: React.ReactNode;

  /**
   * If true, this specific option is disabled
   * @default false
   */
  disabled?: boolean;
}

export type RadioColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'default';
export type RadioSize = 'small' | 'medium';

export interface RadioGroupProps {
  /**
   * Array of radio options
   */
  options: RadioOption[];

  /**
   * The currently selected value
   */
  value?: string;

  /**
   * Callback fired when a radio button is selected
   */
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Label for the radio group
   */
  label?: React.ReactNode;

  /**
   * Helper text to display below the radio group
   */
  helperText?: string;

  /**
   * If true, the radio group will be displayed in an error state
   * @default false
   */
  error?: boolean;

  /**
   * If true, the radio buttons are displayed in a row
   * @default false
   */
  row?: boolean;

  /**
   * If true, the radio group is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * The name attribute of the radio group
   */
  name?: string;

  /**
   * If true, the input element is required
   * @default false
   */
  required?: boolean;

  /**
   * The size of the radio buttons
   * @default 'medium'
   */
  size?: RadioSize;

  /**
   * The color of the radio buttons
   * @default 'primary'
   */
  color?: RadioColor;

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
 * RadioGroup component with curated API
 *
 * Wraps MUI RadioGroup with DS-specific props and behavior.
 * Automatically renders Radio buttons from options array.
 *
 * @example
 * ```tsx
 * <RadioGroup
 *   label="Select a size"
 *   value={size}
 *   onChange={(value) => setSize(value)}
 *   options={[
 *     { value: 'small', label: 'Small' },
 *     { value: 'medium', label: 'Medium' },
 *     { value: 'large', label: 'Large' },
 *   ]}
 * />
 * ```
 */
export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(function RadioGroup(
  {
    options,
    value,
    onChange,
    label,
    helperText,
    error = false,
    row = false,
    disabled = false,
    name,
    required = false,
    size = 'medium',
    color = 'primary',
    sx,
    className,
  },
  ref
) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value, event);
  };

  return (
    <FormControl
      error={error}
      disabled={disabled}
      required={required}
      sx={sx}
      className={className}
    >
      {label && <FormLabel>{label}</FormLabel>}
      <MuiRadioGroup ref={ref} value={value} onChange={handleChange} row={row} name={name}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<MuiRadio size={size} color={color} />}
            label={option.label}
            disabled={disabled || option.disabled}
          />
        ))}
      </MuiRadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
});

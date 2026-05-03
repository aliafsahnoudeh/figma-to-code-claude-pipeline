import React from 'react';
import MuiSwitch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import type { SxProps, Theme } from '@mui/material/styles';

export type SwitchColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'default';
export type SwitchSize = 'small' | 'medium';
export type SwitchLabelPlacement = 'end' | 'start' | 'top' | 'bottom';

export interface SwitchProps {
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
   * Label text to display next to the switch
   */
  label?: React.ReactNode;

  /**
   * The position of the label
   * @default 'end'
   */
  labelPlacement?: SwitchLabelPlacement;

  /**
   * Helper text to display below the switch
   */
  helperText?: string;

  /**
   * If true, the switch will be displayed in an error state
   * @default false
   */
  error?: boolean;

  /**
   * The size of the switch
   * @default 'medium'
   */
  size?: SwitchSize;

  /**
   * The color of the switch
   * @default 'primary'
   */
  color?: SwitchColor;

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
 * Switch component with curated API
 *
 * Wraps MUI Switch with Design System-specific props and behavior.
 * Includes integrated FormControlLabel for easy label support.
 *
 * @example
 * ```tsx
 * <Switch
 *   label="Enable notifications"
 *   checked={enabled}
 *   onChange={(checked) => setEnabled(checked)}
 * />
 * ```
 */
export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  {
    checked = false,
    onChange,
    disabled = false,
    label,
    labelPlacement = 'end',
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

  const switchControl = (
    <MuiSwitch
      ref={ref}
      checked={checked}
      onChange={handleChange}
      disabled={disabled}
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
    return switchControl;
  }

  return (
    <FormControl error={error} disabled={disabled}>
      {label ? (
        <FormControlLabel control={switchControl} label={label} labelPlacement={labelPlacement} />
      ) : (
        switchControl
      )}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
});

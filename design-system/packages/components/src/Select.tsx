import React from 'react';
import MuiSelect from '@mui/material/Select';
import MuiMenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import type { SxProps, Theme } from '@mui/material/styles';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  /**
   * Select label
   */
  label?: string;

  /**
   * Selected value
   */
  value?: string | number;

  /**
   * Change handler
   */
  onChange?: (value: string | number) => void;

  /**
   * Available options
   */
  options: SelectOption[];

  /**
   * Placeholder text (shown when no value selected)
   */
  placeholder?: string;

  /**
   * Error state
   * @default false
   */
  error?: boolean;

  /**
   * Error message to display below select
   */
  errorMessage?: string;

  /**
   * Helper text to display below select
   */
  helperText?: string;

  /**
   * Required field
   * @default false
   */
  required?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Select size (driven by design tokens)
   * @default 'medium'
   */
  size?: 'small' | 'medium';

  /**
   * Full width select
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Select name attribute
   */
  name?: string;

  /**
   * Select id attribute
   */
  id?: string;

  /**
   * Custom styles via MUI sx prop
   * Note: Use sparingly - prefer customization via design tokens
   */
  sx?: SxProps<Theme>;

  /**
   * Additional CSS class name
   */
  className?: string;
}

/**
 * Select component with curated API
 *
 * Wraps MUI Select with DS-specific props and behavior.
 * Sizing and styling are driven by design tokens via theme overrides.
 *
 * @example
 * ```tsx
 * <Select
 *   label="Country"
 *   value={country}
 *   onChange={setCountry}
 *   options={[
 *     { value: 'us', label: 'United States' },
 *     { value: 'uk', label: 'United Kingdom' },
 *   ]}
 * />
 * ```
 */
export const Select = React.forwardRef<HTMLDivElement, SelectProps>(function Select(
  {
    label,
    value,
    onChange,
    options,
    placeholder,
    error = false,
    errorMessage,
    helperText,
    required = false,
    disabled = false,
    size = 'medium',
    fullWidth = false,
    name,
    id,
    sx,
    className,
  },
  ref
) {
  const labelId = id ? `${id}-label` : undefined;
  const displayHelperText = error && errorMessage ? errorMessage : helperText;

  const handleChange = (event: any) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <FormControl
      ref={ref}
      error={error}
      required={required}
      disabled={disabled}
      size={size}
      fullWidth={fullWidth}
      variant="outlined"
      sx={sx}
      className={className}
    >
      {label && <InputLabel id={labelId}>{label}</InputLabel>}
      <MuiSelect
        labelId={labelId}
        value={value ?? ''}
        onChange={handleChange}
        label={label}
        name={name}
        id={id}
        displayEmpty={!!placeholder}
      >
        {placeholder && (
          <MuiMenuItem value="" disabled>
            <em>{placeholder}</em>
          </MuiMenuItem>
        )}
        {options.map((option) => (
          <MuiMenuItem key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </MuiMenuItem>
        ))}
      </MuiSelect>
      {displayHelperText && <FormHelperText>{displayHelperText}</FormHelperText>}
    </FormControl>
  );
});

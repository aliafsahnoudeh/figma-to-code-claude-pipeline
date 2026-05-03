import React from 'react';
import MuiTextField from '@mui/material/TextField';
import type { SxProps, Theme } from '@mui/material/styles';

export interface TextFieldProps {
  /**
   * Input label
   */
  label?: string;

  /**
   * Input value
   */
  value?: string;

  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Error state
   * @default false
   */
  error?: boolean;

  /**
   * Error message to display below input
   */
  errorMessage?: string;

  /**
   * Helper text to display below input
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
   * Input size (driven by design tokens)
   * @default 'medium'
   */
  size?: 'small' | 'medium';

  /**
   * Full width input
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Input type
   * @default 'text'
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';

  /**
   * Multiline input
   * @default false
   */
  multiline?: boolean;

  /**
   * Number of rows for multiline input
   */
  rows?: number;

  /**
   * Maximum number of rows for multiline input
   */
  maxRows?: number;

  /**
   * Input name attribute
   */
  name?: string;

  /**
   * Input id attribute
   */
  id?: string;

  /**
   * Autofocus on mount
   * @default false
   */
  autoFocus?: boolean;

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
 * TextField component with curated API
 *
 * Wraps MUI TextField with Design System-specific props and behavior.
 * Sizing and styling are driven by design tokens via theme overrides.
 *
 * @example
 * ```tsx
 * <TextField
 *   label="Email"
 *   type="email"
 *   size="medium"
 *   errorMessage="Invalid email address"
 * />
 * ```
 */
export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(function TextField(
  {
    label,
    value,
    onChange,
    placeholder,
    error = false,
    errorMessage,
    helperText,
    required = false,
    disabled = false,
    size = 'medium',
    fullWidth = false,
    type = 'text',
    multiline = false,
    rows,
    maxRows,
    name,
    id,
    autoFocus = false,
    sx,
    className,
  },
  ref
) {
  // Use errorMessage if provided and error is true
  const displayHelperText = error && errorMessage ? errorMessage : helperText;

  return (
    <MuiTextField
      ref={ref}
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      error={error}
      helperText={displayHelperText}
      required={required}
      disabled={disabled}
      size={size}
      fullWidth={fullWidth}
      type={type}
      multiline={multiline}
      rows={rows}
      maxRows={maxRows}
      name={name}
      id={id}
      autoFocus={autoFocus}
      variant="outlined"
      sx={sx}
      className={className}
    />
  );
});

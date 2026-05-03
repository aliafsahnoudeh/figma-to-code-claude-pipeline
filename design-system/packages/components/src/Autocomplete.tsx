import React from 'react';
import MuiAutocomplete from '@mui/material/Autocomplete';
import MuiTextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import type { SxProps, Theme } from '@mui/material/styles';

export interface AutocompleteOption {
  /**
   * The label to display
   */
  label: string;

  /**
   * The value (defaults to label if not provided)
   */
  value?: string;

  /**
   * If true, the option is disabled
   */
  disabled?: boolean;
}

export type AutocompleteSize = 'small' | 'medium';

export interface AutocompleteProps {
  /**
   * Array of options
   */
  options: AutocompleteOption[];

  /**
   * The selected value(s)
   */
  value?: AutocompleteOption | AutocompleteOption[] | null;

  /**
   * Callback fired when the value changes
   */
  onChange?: (
    value: AutocompleteOption | AutocompleteOption[] | null,
    event: React.SyntheticEvent
  ) => void;

  /**
   * Label for the input
   */
  label?: string;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * If true, multiple values can be selected
   * @default false
   */
  multiple?: boolean;

  /**
   * If true, the component is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * If true, the component is in a loading state
   * @default false
   */
  loading?: boolean;

  /**
   * If true, the input will be in an error state
   * @default false
   */
  error?: boolean;

  /**
   * Helper text to display below the input
   */
  helperText?: string;

  /**
   * If true, the input is required
   * @default false
   */
  required?: boolean;

  /**
   * The size of the component
   * @default 'medium'
   */
  size?: AutocompleteSize;

  /**
   * If true, the user can create new options by typing
   * @default false
   */
  freeSolo?: boolean;

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
 * Autocomplete component with curated API
 *
 * Wraps MUI Autocomplete with simplified props and behavior.
 * Provides searchable select with optional multi-select.
 *
 * @example
 * ```tsx
 * <Autocomplete
 *   label="Select country"
 *   options={[
 *     { label: 'United States', value: 'US' },
 *     { label: 'Canada', value: 'CA' },
 *   ]}
 *   value={selectedCountry}
 *   onChange={(newValue) => setSelectedCountry(newValue)}
 * />
 * ```
 */
export const Autocomplete = React.forwardRef<HTMLDivElement, AutocompleteProps>(
  function Autocomplete(
    {
      options,
      value,
      onChange,
      label,
      placeholder,
      multiple = false,
      disabled = false,
      loading = false,
      error = false,
      helperText,
      required = false,
      size = 'medium',
      freeSolo = false,
      sx,
      className,
    },
    ref
  ) {
    const handleChange = (_event: React.SyntheticEvent, newValue: any) => {
      onChange?.(newValue as AutocompleteOption | AutocompleteOption[] | null, _event);
    };

    return (
      <MuiAutocomplete
        ref={ref}
        options={options}
        value={value as any}
        onChange={handleChange}
        multiple={multiple}
        disabled={disabled}
        loading={loading}
        freeSolo={freeSolo}
        size={size}
        getOptionLabel={(option: any) => (typeof option === 'string' ? option : option.label)}
        isOptionEqualToValue={(option: any, val: any) =>
          (option.value || option.label) === (val?.value || val?.label)
        }
        renderInput={(params) => (
          <MuiTextField
            {...params}
            label={label}
            placeholder={placeholder}
            error={error}
            helperText={helperText}
            required={required}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        sx={sx}
        className={className}
      />
    );
  }
);

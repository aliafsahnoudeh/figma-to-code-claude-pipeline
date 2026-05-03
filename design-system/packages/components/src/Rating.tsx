import React from 'react';
import MuiRating from '@mui/material/Rating';
import type { SxProps, Theme } from '@mui/material/styles';

export type RatingSize = 'small' | 'medium' | 'large';

export interface RatingProps {
  /**
   * The rating value
   */
  value?: number;

  /**
   * The default value (uncontrolled mode)
   */
  defaultValue?: number;

  /**
   * Callback fired when the value changes
   */
  onChange?: (value: number, event: React.SyntheticEvent) => void;

  /**
   * Maximum rating value
   * @default 5
   */
  max?: number;

  /**
   * Step increment (e.g., 0.5 for half stars)
   * @default 1
   */
  precision?: number;

  /**
   * If true, the rating is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * If true, the rating is read-only
   * @default false
   */
  readOnly?: boolean;

  /**
   * The size of the rating
   * @default 'medium'
   */
  size?: RatingSize;

  /**
   * The icon to display for filled rating
   */
  icon?: React.ReactElement;

  /**
   * The icon to display for empty rating
   */
  emptyIcon?: React.ReactElement;

  /**
   * If true, highlights the selected rating on hover
   * @default false
   */
  highlightSelectedOnly?: boolean;

  /**
   * The name attribute of the radio inputs
   */
  name?: string;

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
 * Rating component with curated API
 *
 * Wraps MUI Rating with simplified onChange handler.
 * Used for collecting user ratings or displaying rating values.
 *
 * @example
 * ```tsx
 * <Rating
 *   value={rating}
 *   onChange={(newValue) => setRating(newValue)}
 *   precision={0.5}
 *   size="large"
 * />
 * ```
 */
export const Rating = React.forwardRef<HTMLSpanElement, RatingProps>(function Rating(
  {
    value,
    defaultValue,
    onChange,
    max = 5,
    precision = 1,
    disabled = false,
    readOnly = false,
    size = 'medium',
    icon,
    emptyIcon,
    highlightSelectedOnly = false,
    name,
    sx,
    className,
  },
  ref
) {
  const handleChange = (_event: React.SyntheticEvent, newValue: number | null) => {
    if (newValue !== null) {
      onChange?.(newValue, _event);
    }
  };

  return (
    <MuiRating
      ref={ref}
      value={value}
      defaultValue={defaultValue}
      onChange={handleChange}
      max={max}
      precision={precision}
      disabled={disabled}
      readOnly={readOnly}
      size={size}
      icon={icon}
      emptyIcon={emptyIcon}
      highlightSelectedOnly={highlightSelectedOnly}
      name={name}
      sx={sx}
      className={className}
    />
  );
});

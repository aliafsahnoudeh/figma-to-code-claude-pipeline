import React from 'react';
import MuiSlider from '@mui/material/Slider';
import type { SxProps, Theme } from '@mui/material/styles';

export interface SliderMark {
  /**
   * The value of the mark
   */
  value: number;

  /**
   * Optional label for the mark
   */
  label?: React.ReactNode;
}

export type SliderColor = 'primary' | 'secondary';
export type SliderSize = 'small' | 'medium';

export interface SliderProps {
  /**
   * The value of the slider (controlled mode)
   */
  value?: number | number[];

  /**
   * The default value (uncontrolled mode)
   */
  defaultValue?: number | number[];

  /**
   * Callback fired when the value changes
   */
  onChange?: (value: number | number[], event: Event) => void;

  /**
   * Callback fired when the user stops dragging
   */
  onChangeCommitted?: (value: number | number[], event: Event | React.SyntheticEvent) => void;

  /**
   * The minimum allowed value
   * @default 0
   */
  min?: number;

  /**
   * The maximum allowed value
   * @default 100
   */
  max?: number;

  /**
   * The step increment
   * @default 1
   */
  step?: number | null;

  /**
   * Marks to display on the slider
   */
  marks?: boolean | SliderMark[];

  /**
   * If true, the component is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Controls when the value label is displayed
   * @default 'off'
   */
  valueLabelDisplay?: 'on' | 'auto' | 'off';

  /**
   * The color of the slider
   * @default 'primary'
   */
  color?: SliderColor;

  /**
   * The size of the slider
   * @default 'medium'
   */
  size?: SliderSize;

  /**
   * The component orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * aria-label attribute
   */
  'aria-label'?: string;

  /**
   * aria-labelledby attribute
   */
  'aria-labelledby'?: string;

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
 * Slider component with curated API
 *
 * Wraps MUI Slider with simplified onChange handler.
 * Used for selecting a value or range from a continuous or discrete range.
 *
 * @example
 * ```tsx
 * <Slider
 *   value={value}
 *   onChange={(newValue) => setValue(newValue)}
 *   min={0}
 *   max={100}
 *   step={10}
 *   marks
 *   valueLabelDisplay="auto"
 * />
 * ```
 */
export const Slider = React.forwardRef<HTMLSpanElement, SliderProps>(function Slider(
  {
    value,
    defaultValue,
    onChange,
    onChangeCommitted,
    min = 0,
    max = 100,
    step = 1,
    marks,
    disabled = false,
    valueLabelDisplay = 'off',
    color = 'primary',
    size = 'medium',
    orientation = 'horizontal',
    sx,
    className,
    ...otherProps
  },
  ref
) {
  const handleChange = (_event: Event, newValue: number | number[]) => {
    onChange?.(newValue, _event);
  };

  const handleChangeCommitted = (
    _event: Event | React.SyntheticEvent,
    newValue: number | number[]
  ) => {
    onChangeCommitted?.(newValue, _event);
  };

  return (
    <MuiSlider
      ref={ref}
      value={value}
      defaultValue={defaultValue}
      onChange={handleChange}
      onChangeCommitted={handleChangeCommitted}
      min={min}
      max={max}
      step={step}
      marks={marks}
      disabled={disabled}
      valueLabelDisplay={valueLabelDisplay}
      color={color}
      size={size}
      orientation={orientation}
      sx={sx}
      className={className}
      {...otherProps}
    />
  );
});

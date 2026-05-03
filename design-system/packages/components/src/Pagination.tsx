import React from 'react';
import MuiPagination from '@mui/material/Pagination';
import type { SxProps, Theme } from '@mui/material/styles';

export type PaginationColor = 'primary' | 'secondary' | 'standard';
export type PaginationSize = 'small' | 'medium' | 'large';
export type PaginationVariant = 'text' | 'outlined';

export interface PaginationProps {
  /**
   * The total number of pages
   */
  count: number;

  /**
   * The current page number (1-indexed)
   * @default 1
   */
  page?: number;

  /**
   * Callback fired when the page is changed
   */
  onChange?: (page: number, event: React.ChangeEvent<unknown>) => void;

  /**
   * The size of the pagination component
   * @default 'medium'
   */
  size?: PaginationSize;

  /**
   * The color of the pagination component
   * @default 'standard'
   */
  color?: PaginationColor;

  /**
   * The variant of the pagination component
   * @default 'text'
   */
  variant?: PaginationVariant;

  /**
   * If true, show the first-page button
   * @default false
   */
  showFirstButton?: boolean;

  /**
   * If true, show the last-page button
   * @default false
   */
  showLastButton?: boolean;

  /**
   * If true, the component is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Number of always visible pages at the beginning and end
   * @default 1
   */
  siblingCount?: number;

  /**
   * Number of always visible pages before and after the current page
   * @default 1
   */
  boundaryCount?: number;

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
 * Pagination component with curated API
 *
 * Wraps MUI Pagination with simplified onChange handler.
 * Used for navigating through pages of content.
 *
 * @example
 * ```tsx
 * <Pagination
 *   count={10}
 *   page={currentPage}
 *   onChange={(page) => setCurrentPage(page)}
 *   showFirstButton
 *   showLastButton
 * />
 * ```
 */
export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(function Pagination(
  {
    count,
    page = 1,
    onChange,
    size = 'medium',
    color = 'standard',
    variant = 'text',
    showFirstButton = false,
    showLastButton = false,
    disabled = false,
    siblingCount = 1,
    boundaryCount = 1,
    sx,
    className,
  },
  ref
) {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onChange?.(value, event);
  };

  return (
    <MuiPagination
      ref={ref}
      count={count}
      page={page}
      onChange={handleChange}
      size={size}
      color={color}
      variant={variant}
      showFirstButton={showFirstButton}
      showLastButton={showLastButton}
      disabled={disabled}
      siblingCount={siblingCount}
      boundaryCount={boundaryCount}
      sx={sx}
      className={className}
    />
  );
});

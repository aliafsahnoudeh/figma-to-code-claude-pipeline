import React from 'react';
import MuiSkeleton from '@mui/material/Skeleton';
import type { SkeletonProps as MuiSkeletonProps } from '@mui/material/Skeleton';

export interface SkeletonProps extends MuiSkeletonProps {
  /**
   * The type of content that will be rendered
   */
  variant?: 'text' | 'rectangular' | 'rounded' | 'circular';

  /**
   * Width of the skeleton
   */
  width?: number | string;

  /**
   * Height of the skeleton
   */
  height?: number | string;
}

/**
 * Skeleton component - flexible wrapper around MUI Skeleton
 *
 * Displays a placeholder preview while content is loading.
 *
 * @example
 * ```tsx
 * <Skeleton variant="text" width={210} />
 * <Skeleton variant="circular" width={40} height={40} />
 * <Skeleton variant="rectangular" width={210} height={118} />
 * ```
 */
export const Skeleton = React.forwardRef<HTMLSpanElement, SkeletonProps>(
  function Skeleton(props, ref) {
    return <MuiSkeleton ref={ref} {...props} />;
  }
);

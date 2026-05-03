import React from 'react';
import MuiImageListItem from '@mui/material/ImageListItem';
import type { ImageListItemProps as MuiImageListItemProps } from '@mui/material/ImageListItem';

export interface ImageListItemProps extends MuiImageListItemProps {
  /**
   * ImageListItem content (typically img element)
   */
  children?: React.ReactNode;
}

/**
 * ImageListItem component - flexible wrapper around MUI ImageListItem
 *
 * Individual item in an ImageList.
 *
 * @example
 * ```tsx
 * <ImageListItem>
 *   <img src="/image.jpg" alt="Description" loading="lazy" />
 * </ImageListItem>
 * ```
 */
export const ImageListItem = React.forwardRef<HTMLLIElement, ImageListItemProps>(
  function ImageListItem(props, ref) {
    return <MuiImageListItem ref={ref} {...props} />;
  }
);

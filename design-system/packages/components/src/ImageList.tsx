import React from 'react';
import MuiImageList from '@mui/material/ImageList';
import type { ImageListProps as MuiImageListProps } from '@mui/material/ImageList';

export interface ImageListProps extends Omit<MuiImageListProps, 'children'> {
  /**
   * ImageList content (typically ImageListItem components)
   */
  children: NonNullable<React.ReactNode>;
}

/**
 * ImageList component - flexible wrapper around MUI ImageList
 *
 * Displays a collection of images in an organized grid.
 *
 * @example
 * ```tsx
 * <ImageList cols={3} rowHeight={164}>
 *   <ImageListItem>
 *     <img src="/path/to/image.jpg" alt="Description" />
 *   </ImageListItem>
 * </ImageList>
 * ```
 */
export const ImageList = React.forwardRef<HTMLUListElement, ImageListProps>(
  function ImageList(props, ref) {
    return <MuiImageList ref={ref} {...props} />;
  }
);

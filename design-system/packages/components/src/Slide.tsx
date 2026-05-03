import React from 'react';
import MuiSlide from '@mui/material/Slide';
import type { SlideProps as MuiSlideProps } from '@mui/material/Slide';

export interface SlideProps extends MuiSlideProps {
  /**
   * If true, the component will transition in
   */
  in?: boolean;

  /**
   * Direction the child node will enter from
   */
  direction?: 'left' | 'right' | 'up' | 'down';

  /**
   * A single child content element
   */
  children: React.ReactElement;
}

/**
 * Slide component - flexible wrapper around MUI Slide
 *
 * Transition component that slides children in from the edge of the screen.
 *
 * @example
 * ```tsx
 * <Slide direction="up" in={show}>
 *   <div>Content to slide</div>
 * </Slide>
 * ```
 */
export const Slide = React.forwardRef<HTMLDivElement, SlideProps>(function Slide(props, ref) {
  return <MuiSlide ref={ref} {...props} />;
});

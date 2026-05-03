import React from 'react';
import MuiFade from '@mui/material/Fade';
import type { FadeProps as MuiFadeProps } from '@mui/material/Fade';

export interface FadeProps extends MuiFadeProps {
  /**
   * If true, the component will transition in
   */
  in?: boolean;

  /**
   * A single child content element
   */
  children: React.ReactElement;
}

/**
 * Fade component - flexible wrapper around MUI Fade
 *
 * Transition component that fades children in and out.
 *
 * @example
 * ```tsx
 * <Fade in={show}>
 *   <div>Content to fade</div>
 * </Fade>
 * ```
 */
export const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  return <MuiFade ref={ref} {...props} />;
});

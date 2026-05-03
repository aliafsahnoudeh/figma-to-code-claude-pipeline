import React from 'react';
import MuiContainer from '@mui/material/Container';
import type { ContainerProps as MuiContainerProps } from '@mui/material/Container';

export interface ContainerProps extends MuiContainerProps {
  /**
   * Container content
   */
  children?: React.ReactNode;
}

/**
 * Container component - flexible wrapper around MUI Container
 *
 * Centers content horizontally with responsive max-width.
 *
 * @example
 * ```tsx
 * <Container maxWidth="lg">
 *   <Typography>Centered content</Typography>
 * </Container>
 * ```
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  function Container(props, ref) {
    return <MuiContainer ref={ref} {...props} />;
  }
);

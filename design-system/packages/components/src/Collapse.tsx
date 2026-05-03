import React from 'react';
import MuiCollapse from '@mui/material/Collapse';
import type { CollapseProps as MuiCollapseProps } from '@mui/material/Collapse';

export interface CollapseProps extends MuiCollapseProps {
  /**
   * If true, the component will transition in
   */
  in?: boolean;

  /**
   * Content to collapse/expand
   */
  children?: React.ReactNode;
}

/**
 * Collapse component - flexible wrapper around MUI Collapse
 *
 * Transition component that expands and collapses content.
 *
 * @example
 * ```tsx
 * <Collapse in={expanded}>
 *   <Box p={2}>Collapsible content</Box>
 * </Collapse>
 * ```
 */
export const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(
  function Collapse(props, ref) {
    return <MuiCollapse ref={ref} {...props} />;
  }
);

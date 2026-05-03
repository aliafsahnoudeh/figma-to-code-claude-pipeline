import React from 'react';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import type { AccordionDetailsProps as MuiAccordionDetailsProps } from '@mui/material/AccordionDetails';

export interface AccordionDetailsProps extends MuiAccordionDetailsProps {
  /**
   * Details content
   */
  children?: React.ReactNode;
}

/**
 * AccordionDetails component - flexible wrapper around MUI AccordionDetails
 *
 * Content area of an Accordion that expands/collapses.
 *
 * @example
 * ```tsx
 * <AccordionDetails>
 *   <Typography>Detailed content goes here</Typography>
 * </AccordionDetails>
 * ```
 */
export const AccordionDetails = React.forwardRef<HTMLDivElement, AccordionDetailsProps>(
  function AccordionDetails(props, ref) {
    return <MuiAccordionDetails ref={ref} {...props} />;
  }
);

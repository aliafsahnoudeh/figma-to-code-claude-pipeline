import React from 'react';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import type { AccordionSummaryProps as MuiAccordionSummaryProps } from '@mui/material/AccordionSummary';

export interface AccordionSummaryProps extends MuiAccordionSummaryProps {
  /**
   * Summary content
   */
  children?: React.ReactNode;
}

/**
 * AccordionSummary component - flexible wrapper around MUI AccordionSummary
 *
 * Header/clickable area of an Accordion.
 *
 * @example
 * ```tsx
 * <AccordionSummary expandIcon={<ExpandMoreIcon />}>
 *   <Typography>Accordion header</Typography>
 * </AccordionSummary>
 * ```
 */
export const AccordionSummary = React.forwardRef<HTMLDivElement, AccordionSummaryProps>(
  function AccordionSummary(props, ref) {
    return <MuiAccordionSummary ref={ref} {...props} />;
  }
);

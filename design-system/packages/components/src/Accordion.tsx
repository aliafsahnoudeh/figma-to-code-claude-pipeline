import React from 'react';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import type { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';
import type { SxProps, Theme } from '@mui/material/styles';

export interface AccordionItemConfig {
  /**
   * Unique identifier for the accordion item
   */
  id: string;

  /**
   * Summary/header content
   */
  summary: React.ReactNode;

  /**
   * Details/body content
   */
  details: React.ReactNode;

  /**
   * If true, this item is disabled
   * @default false
   */
  disabled?: boolean;
}

export interface AccordionProps extends Omit<
  MuiAccordionProps,
  'children' | 'onChange' | 'expanded'
> {
  /**
   * Accordion content (typically AccordionSummary and AccordionDetails)
   * If provided, takes precedence over items prop
   */
  children?: React.ReactNode;

  /**
   * Array of accordion items (simple API)
   * Use this OR children for compositional API
   */
  items?: AccordionItemConfig[];

  /**
   * The currently expanded panel id (controlled mode)
   */
  expanded?: string | false;

  /**
   * Callback fired when expansion state changes
   */
  onChange?: (panelId: string, isExpanded: boolean, event: React.SyntheticEvent) => void;

  /**
   * Custom styles via MUI sx prop
   */
  sx?: SxProps<Theme>;
}

// Component resolution helper for SSR compatibility
const resolveComponent = <T,>(component: T): T => {
  const maybeModule = component as unknown as { default?: T };
  return maybeModule &&
    typeof maybeModule === 'object' &&
    'default' in maybeModule &&
    maybeModule.default
    ? maybeModule.default
    : component;
};

const MuiAccordionResolved = resolveComponent(MuiAccordion);
const MuiAccordionSummaryResolved = resolveComponent(MuiAccordionSummary);
const MuiAccordionDetailsResolved = resolveComponent(MuiAccordionDetails);

/**
 * Accordion component with hybrid API
 *
 * Wraps MUI Accordion with both simple array-based API and compositional API.
 * Use items prop for simple accordions, or children for advanced customization.
 *
 * @example
 * Simple API:
 * ```tsx
 * <Accordion
 *   items={[
 *     { id: '1', summary: 'Panel 1', details: 'Content 1' },
 *     { id: '2', summary: 'Panel 2', details: 'Content 2' },
 *   ]}
 * />
 * ```
 *
 * Compositional API:
 * ```tsx
 * <Accordion>
 *   <AccordionSummary>Panel header</AccordionSummary>
 *   <AccordionDetails>Panel content</AccordionDetails>
 * </Accordion>
 * ```
 */
export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(function Accordion(
  { children, items, expanded, onChange, sx, ...props },
  ref
) {
  if (items) {
    return (
      <>
        {items.map((item) => {
          const isExpanded = expanded === item.id;
          const handleChange = (_event: React.SyntheticEvent, isExp: boolean) => {
            onChange?.(item.id, isExp, _event);
          };

          return (
            <MuiAccordionResolved
              key={item.id}
              expanded={isExpanded}
              onChange={handleChange}
              disabled={item.disabled}
              sx={sx}
            >
              <MuiAccordionSummaryResolved>{item.summary}</MuiAccordionSummaryResolved>
              <MuiAccordionDetailsResolved>{item.details}</MuiAccordionDetailsResolved>
            </MuiAccordionResolved>
          );
        })}
      </>
    );
  }

  return (
    <MuiAccordionResolved ref={ref} sx={sx} {...props}>
      {children as React.ReactElement}
    </MuiAccordionResolved>
  );
});

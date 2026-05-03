import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import type { BreadcrumbsProps as MuiBreadcrumbsProps } from '@mui/material/Breadcrumbs';

export interface BreadcrumbsProps extends MuiBreadcrumbsProps {}

/**
 * Breadcrumbs component - navigation aid showing page hierarchy.
 * Inherits all MUI Breadcrumbs props for maximum flexibility.
 */
export const Breadcrumbs = (props: BreadcrumbsProps) => {
  return <MuiBreadcrumbs {...props} />;
};

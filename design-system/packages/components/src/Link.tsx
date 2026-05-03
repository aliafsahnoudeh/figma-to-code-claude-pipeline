import React from 'react';
import MuiLink from '@mui/material/Link';
import type { LinkProps as MuiLinkProps } from '@mui/material/Link';
import type { SxProps, Theme } from '@mui/material/styles';

export type LinkUnderline = 'none' | 'hover' | 'always';

export interface LinkProps extends Omit<MuiLinkProps, 'underline'> {
  /**
   * The URL to link to
   */
  href?: string;

  /**
   * Link content
   */
  children: React.ReactNode;

  /**
   * Controls when the link is underlined
   * @default 'hover'
   */
  underline?: LinkUnderline;

  /**
   * The color of the link
   * @default 'primary'
   */
  color?: MuiLinkProps['color'];

  /**
   * If true, opens link in new tab with security attributes
   * @default false
   */
  external?: boolean;

  /**
   * Component to use for rendering (e.g., NextLink, React Router Link)
   * Enables framework-agnostic routing integration
   *
   * @example
   * // Next.js
   * import NextLink from 'next/link';
   * <Link component={NextLink} href="/about">About</Link>
   *
   * // React Router
   * import { Link as RouterLink } from 'react-router-dom';
   * <Link component={RouterLink} to="/about">About</Link>
   *
   * // Plain anchor (default)
   * <Link href="/about">About</Link>
   */
  component?: React.ElementType;

  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;

  /**
   * Custom styles via MUI sx prop
   */
  sx?: SxProps<Theme>;

  /**
   * Additional CSS class name
   * @deprecated Prefer using `sx` prop or theme tokens for styling
   */
  className?: string;
}

/**
 * Link component - framework-agnostic wrapper around MUI Link
 *
 * Polymorphic link component that works with Next.js, React Router, or plain anchors.
 * Use the `component` prop to integrate with your routing library.
 *
 * @example
 * ```tsx
 * // Next.js
 * <Link component={NextLink} href="/about">About</Link>
 *
 * // React Router
 * <Link component={RouterLink} to="/about">About</Link>
 *
 * // Plain anchor
 * <Link href="https://example.com">Visit</Link>
 *
 * // External link
 * <Link href="https://example.com" external>External Site</Link>
 * ```
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    href,
    children,
    underline = 'hover',
    color = 'primary',
    external = false,
    component,
    sx,
    className,
    ...props
  },
  ref
) {
  const externalProps = external
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <MuiLink
      ref={ref}
      href={href}
      underline={underline}
      color={color}
      component={component as any}
      sx={sx}
      className={className}
      {...externalProps}
      {...props}
    >
      {children}
    </MuiLink>
  );
});

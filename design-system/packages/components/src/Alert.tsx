import React from 'react';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import type { SxProps, Theme } from '@mui/material/styles';

export type AlertSeverity = 'error' | 'warning' | 'info' | 'success';
export type AlertVariant = 'filled' | 'outlined' | 'standard';

export interface AlertProps {
  /**
   * The severity of the alert (determines color and icon)
   * @default 'info'
   */
  severity?: AlertSeverity;

  /**
   * The variant of the alert
   * @default 'standard'
   */
  variant?: AlertVariant;

  /**
   * Alert content
   */
  children: React.ReactNode;

  /**
   * Optional title displayed above the alert content
   */
  title?: React.ReactNode;

  /**
   * Callback fired when the close button is clicked
   */
  onClose?: (event: React.SyntheticEvent) => void;

  /**
   * If true, displays a close button
   * @default false
   */
  closable?: boolean;

  /**
   * Override or extend the icon displayed in the alert
   */
  icon?: React.ReactNode;

  /**
   * Custom action to display (overrides close button if both provided)
   */
  action?: React.ReactNode;

  /**
   * The ARIA role attribute of the element
   * @default 'alert'
   */
  role?: string;

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
 * Alert component with curated API
 *
 * Wraps MUI Alert with DS-specific props and behavior.
 * Displays important messages with optional close functionality.
 *
 * @example
 * ```tsx
 * <Alert severity="success" title="Success!" closable onClose={handleClose}>
 *   Operation completed successfully.
 * </Alert>
 * ```
 */
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  {
    severity = 'info',
    variant = 'standard',
    children,
    title,
    onClose,
    closable = false,
    icon,
    action,
    role = 'alert',
    sx,
    className,
  },
  ref
) {
  const finalOnClose = closable && !action ? onClose : undefined;
  const finalAction = action || undefined;

  return (
    <MuiAlert
      ref={ref}
      severity={severity}
      variant={variant}
      onClose={finalOnClose}
      action={finalAction}
      icon={icon}
      role={role}
      sx={sx}
      className={className}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </MuiAlert>
  );
});

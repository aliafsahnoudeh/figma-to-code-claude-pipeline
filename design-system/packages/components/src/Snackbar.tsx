import React from 'react';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert, { type AlertColor } from '@mui/material/Alert';
import type { SxProps, Theme } from '@mui/material/styles';

export interface SnackbarProps {
  /**
   * Whether the snackbar is open
   */
  open: boolean;

  /**
   * Callback when snackbar should close
   */
  onClose: () => void;

  /**
   * Snackbar message
   */
  message: string;

  /**
   * Severity/type of snackbar
   * @default 'info'
   */
  severity?: AlertColor;

  /**
   * Auto-hide duration in milliseconds
   * Set to null to disable auto-hide
   * @default 6000
   */
  autoHideDuration?: number | null;

  /**
   * Horizontal position
   * @default 'center'
   */
  horizontal?: 'left' | 'center' | 'right';

  /**
   * Vertical position
   * @default 'bottom'
   */
  vertical?: 'top' | 'bottom';

  /**
   * Custom action button
   */
  action?: React.ReactNode;

  /**
   * Custom styles via MUI sx prop
   */
  sx?: SxProps<Theme>;

  /**
   * Additional CSS class name
   */
  className?: string;
}

/**
 * Snackbar component
 *
 * Brief messages about app processes, typically displayed at the bottom of the screen.
 *
 * @example
 * ```tsx
 * <Snackbar
 *   open={showSnackbar}
 *   onClose={() => setShowSnackbar(false)}
 *   message="Settings saved successfully"
 *   severity="success"
 * />
 * ```
 */
export function Snackbar({
  open,
  onClose,
  message,
  severity = 'info',
  autoHideDuration = 6000,
  horizontal = 'center',
  vertical = 'bottom',
  action,
  sx,
  className,
}: SnackbarProps) {
  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical, horizontal }}
      sx={sx}
      className={className}
    >
      <MuiAlert onClose={onClose} severity={severity} variant="filled" action={action}>
        {message}
      </MuiAlert>
    </MuiSnackbar>
  );
}

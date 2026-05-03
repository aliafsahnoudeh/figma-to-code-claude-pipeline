import React from 'react';
import MuiModal from '@mui/material/Modal';
import type { ModalProps as MuiModalProps } from '@mui/material/Modal';

export interface ModalProps extends MuiModalProps {
  /**
   * If true, the modal is visible
   */
  open: boolean;

  /**
   * Callback fired when the component requests to be closed
   */
  onClose?: (event: object, reason: 'backdropClick' | 'escapeKeyDown') => void;

  /**
   * Modal content
   */
  children: React.ReactElement;
}

/**
 * Modal component - flexible wrapper around MUI Modal
 *
 * Foundation component for Dialog and other overlay components.
 * Renders children in a portal above the main content.
 *
 * @example
 * ```tsx
 * <Modal open={open} onClose={handleClose}>
 *   <Box sx={{
 *     position: 'absolute',
 *     top: '50%',
 *     left: '50%',
 *     transform: 'translate(-50%, -50%)',
 *     bgcolor: 'background.paper',
 *     boxShadow: 24,
 *     p: 4,
 *   }}>
 *     Modal content
 *   </Box>
 * </Modal>
 * ```
 */
export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(function Modal(props, ref) {
  return <MuiModal ref={ref} {...props} />;
});

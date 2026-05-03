import React from 'react';
import MuiDialog from '@mui/material/Dialog';
import type { DialogProps as MuiDialogProps } from '@mui/material/Dialog';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiIconButton from '@mui/material/IconButton';
import MuiCloseIcon from '@mui/icons-material/Close';

// After adding CJS, can be removed
const resolveComponent = <T,>(component: T): T => {
  const maybeModule = component as unknown as { default?: T };
  return maybeModule &&
    typeof maybeModule === 'object' &&
    'default' in maybeModule &&
    maybeModule.default
    ? maybeModule.default
    : component;
};

export interface DialogProps extends Omit<MuiDialogProps, 'title'> {
  /**
   * Dialog title (convenience prop)
   * For advanced title customization, omit this and use DialogTitle directly as a child
   */
  title?: string;

  /**
   * Action buttons to display in footer (convenience prop)
   * For advanced footer customization, omit this and use DialogActions directly as a child
   */
  actions?: React.ReactNode;

  /**
   * Show close button in title
   * Only applies when using the title prop
   * @default true
   */
  showCloseButton?: boolean;
}

/**
 * Dialog component - balanced API with convenience props + full MUI flexibility
 *
 * **Simple usage** with helper props:
 * ```tsx
 * <Dialog
 *   open={isOpen}
 *   onClose={handleClose}
 *   title="Confirm Action"
 *   actions={<Button onClick={handleClose}>OK</Button>}
 * >
 *   Are you sure?
 * </Dialog>
 * ```
 *
 * **Advanced usage** with full MUI props and custom structure:
 * ```tsx
 * <Dialog
 *   open={isOpen}
 *   onClose={handleClose}
 *   maxWidth="lg"
 *   scroll="body"
 *   TransitionComponent={Fade}
 * >
 *   <DialogTitle>Custom Title</DialogTitle>
 *   <DialogContent dividers>Custom content</DialogContent>
 *   <DialogActions>Custom actions</DialogActions>
 * </Dialog>
 * ```
 */
export const Dialog = ({
  title,
  children,
  actions,
  showCloseButton = true,
  ...muiDialogProps
}: DialogProps) => {
  // Resolve default exports to avoid module-namespace objects in SSR environments.
  const DialogComponent = resolveComponent(MuiDialog);
  const DialogTitleComponent = resolveComponent(MuiDialogTitle);
  const DialogContentComponent = resolveComponent(MuiDialogContent);
  const DialogActionsComponent = resolveComponent(MuiDialogActions);
  const IconButtonComponent = resolveComponent(MuiIconButton);
  const CloseIconComponent = resolveComponent(MuiCloseIcon);

  return (
    <DialogComponent {...muiDialogProps}>
      {title && (
        <DialogTitleComponent>
          {title}
          {showCloseButton && muiDialogProps.onClose && (
            <IconButtonComponent
              aria-label="close"
              onClick={(e) => muiDialogProps.onClose?.(e, 'backdropClick')}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIconComponent />
            </IconButtonComponent>
          )}
        </DialogTitleComponent>
      )}
      <DialogContentComponent>{children}</DialogContentComponent>
      {actions && <DialogActionsComponent>{actions}</DialogActionsComponent>}
    </DialogComponent>
  );
};

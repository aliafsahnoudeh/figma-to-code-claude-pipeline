import { createTheme as createMuiTheme, type Theme, type ThemeOptions } from '@mui/material/styles';
import type { Tokens } from './schema/tokenSchema.js';

/**
 * Convert design tokens to MUI theme
 * @param tokens - Design tokens to convert
 * @param options - Theme options (supports all MUI v6 ThemeOptions including cssVariables)
 */
export function createTheme(tokens: Tokens, options?: ThemeOptions): Theme {
  const { foundation, semantic, components } = tokens;

  // Create base theme options
  const themeOptions: ThemeOptions = {
    ...options,
    spacing: foundation.spacing.sm, // MUI spacing unit (8px default)

    breakpoints: {
      values: foundation.breakpoints || {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },

    shape: {
      borderRadius: foundation.radius.md,
    },

    typography: {
      fontFamily: foundation.typography.fontFamily.base,
      fontSize: foundation.typography.fontSize.md,
      fontWeightLight: foundation.typography.fontWeight.light,
      fontWeightRegular: foundation.typography.fontWeight.regular,
      fontWeightMedium: foundation.typography.fontWeight.medium,
      fontWeightBold: foundation.typography.fontWeight.bold,

      h1: {
        fontFamily:
          foundation.typography.fontFamily.heading || foundation.typography.fontFamily.base,
        fontSize: foundation.typography.fontSize['3xl'],
        fontWeight: foundation.typography.fontWeight.bold,
        lineHeight: foundation.typography.lineHeight.tight,
      },
      h2: {
        fontFamily:
          foundation.typography.fontFamily.heading || foundation.typography.fontFamily.base,
        fontSize: foundation.typography.fontSize['2xl'],
        fontWeight: foundation.typography.fontWeight.bold,
        lineHeight: foundation.typography.lineHeight.tight,
      },
      h3: {
        fontFamily:
          foundation.typography.fontFamily.heading || foundation.typography.fontFamily.base,
        fontSize: foundation.typography.fontSize.xl,
        fontWeight: foundation.typography.fontWeight.semibold,
        lineHeight: foundation.typography.lineHeight.normal,
      },
      body1: {
        fontSize: foundation.typography.fontSize.md,
        lineHeight: foundation.typography.lineHeight.normal,
      },
      body2: {
        fontSize: foundation.typography.fontSize.sm,
        lineHeight: foundation.typography.lineHeight.normal,
      },
      button: {
        textTransform: 'none',
        fontWeight: foundation.typography.fontWeight.medium,
      },
    },
    palette: semantic.palette as any, // Type assertion needed due to custom color scales

    shadows: [
      'none',
      semantic.elevation.sm,
      semantic.elevation.sm,
      semantic.elevation.md,
      semantic.elevation.md,
      semantic.elevation.md,
      semantic.elevation.lg,
      semantic.elevation.lg,
      semantic.elevation.lg,
      semantic.elevation.lg,
      semantic.elevation.xl || semantic.elevation.lg,
      semantic.elevation.xl || semantic.elevation.lg,
      semantic.elevation.xl || semantic.elevation.lg,
      semantic.elevation.xl || semantic.elevation.lg,
      semantic.elevation.xl || semantic.elevation.lg,
      semantic.elevation.xl || semantic.elevation.lg,
      semantic.elevation.xl || semantic.elevation.lg,
      semantic.elevation.xl || semantic.elevation.lg,
      semantic.elevation.xl || semantic.elevation.lg,
      semantic.elevation.xl || semantic.elevation.lg,
      semantic.elevation.xl || semantic.elevation.lg,
      semantic.elevation.xl || semantic.elevation.lg,
      semantic.elevation.xl || semantic.elevation.lg,
      semantic.elevation.xl || semantic.elevation.lg,
      semantic.elevation.xl || semantic.elevation.lg,
    ],

    zIndex: foundation.zIndex || {
      modal: 1300,
      drawer: 1200,
      appBar: 1100,
      tooltip: 1500,
      snackbar: 1400,
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            // Default to medium size styling
            minHeight: components.button.sizes.medium.minHeight,
            borderRadius: components.button.sizes.medium.radius || foundation.radius.md,
            fontSize: components.button.sizes.medium.fontSize,
            paddingLeft: components.button.sizes.medium.px,
            paddingRight: components.button.sizes.medium.px,
            paddingTop: components.button.sizes.medium.py,
            paddingBottom: components.button.sizes.medium.py,
            fontWeight: foundation.typography.fontWeight.medium,
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
          },
          sizeSmall: {
            minHeight: components.button.sizes.small.minHeight,
            borderRadius: components.button.sizes.small.radius || foundation.radius.sm,
            fontSize: components.button.sizes.small.fontSize,
            paddingLeft: components.button.sizes.small.px,
            paddingRight: components.button.sizes.small.px,
            paddingTop: components.button.sizes.small.py,
            paddingBottom: components.button.sizes.small.py,
          },
          sizeLarge: {
            minHeight: components.button.sizes.large.minHeight,
            borderRadius: components.button.sizes.large.radius || foundation.radius.lg,
            fontSize: components.button.sizes.large.fontSize,
            paddingLeft: components.button.sizes.large.px,
            paddingRight: components.button.sizes.large.px,
            paddingTop: components.button.sizes.large.py,
            paddingBottom: components.button.sizes.large.py,
          },
          outlined: {
            borderWidth: components.button.variants?.outline?.borderWidth || 1,
            '&:hover': {
              borderWidth: components.button.variants?.outline?.borderWidth || 1,
            },
          },
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            // Medium (default) size
            borderRadius: components.field.sizes.medium.radius || foundation.radius.md,
            fontSize: components.field.sizes.medium.fontSize,

            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: semantic.palette.divider,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: semantic.palette.divider,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: semantic.palette.primary.main,
              borderWidth: 2,
            },
          },
          input: {
            minHeight:
              components.field.sizes.medium.minHeight - components.field.sizes.medium.py * 2,
            paddingLeft: components.field.sizes.medium.px,
            paddingRight: components.field.sizes.medium.px,
            paddingTop: components.field.sizes.medium.py,
            paddingBottom: components.field.sizes.medium.py,
          },
          sizeSmall: {
            borderRadius: components.field.sizes.small.radius || foundation.radius.sm,
            fontSize: components.field.sizes.small.fontSize,
            '& input': {
              minHeight:
                components.field.sizes.small.minHeight - components.field.sizes.small.py * 2,
              paddingLeft: components.field.sizes.small.px,
              paddingRight: components.field.sizes.small.px,
              paddingTop: components.field.sizes.small.py,
              paddingBottom: components.field.sizes.small.py,
            },
          },
        },
      },

      MuiInputBase: {
        styleOverrides: {
          root: {
            fontSize: components.field.sizes.medium.fontSize,
          },
          sizeSmall: {
            fontSize: components.field.sizes.small.fontSize,
          },
        },
      },

      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontSize: components.field.sizes.medium.fontSize,
            '&.MuiInputLabel-sizeSmall': {
              fontSize: components.field.sizes.small.fontSize,
            },
          },
        },
      },

      MuiFormHelperText: {
        styleOverrides: {
          root: {
            marginTop: components.field.helperTextSpacing || foundation.spacing.xs,
            fontSize: foundation.typography.fontSize.xs,
          },
        },
      },

      MuiTextField: {
        styleOverrides: {
          root: {
            // Apply TextField-specific helper text left margin if token is provided
            ...(components.textField?.helperTextMarginLeft !== undefined && {
              '& .MuiFormHelperText-root': {
                marginLeft: components.textField.helperTextMarginLeft,
              },
            }),
          },
        },
      },

      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: components.dialog?.radius || foundation.radius.lg,
            boxShadow: semantic.elevation.xl || semantic.elevation.lg,
          },
        },
      },

      MuiDialogTitle: {
        styleOverrides: {
          root: {
            padding: components.dialog?.padding || foundation.spacing.lg,
            fontSize:
              components.dialog?.titleTypography?.fontSize || foundation.typography.fontSize.xl,
            fontWeight:
              components.dialog?.titleTypography?.fontWeight ||
              foundation.typography.fontWeight.semibold,
            lineHeight:
              components.dialog?.titleTypography?.lineHeight ||
              foundation.typography.lineHeight.normal,
          },
        },
      },

      MuiDialogContent: {
        styleOverrides: {
          root: {
            padding: components.dialog?.padding || foundation.spacing.lg,
          },
        },
      },

      MuiDialogActions: {
        styleOverrides: {
          root: {
            padding: components.dialog?.padding || foundation.spacing.lg,
          },
        },
      },

      MuiTableCell: {
        styleOverrides: {
          root: {
            borderColor: semantic.palette.divider,
          },
          head: {
            fontWeight: foundation.typography.fontWeight.semibold,
            height: components.table?.headerHeight,
            backgroundColor:
              semantic.palette.action.hover ||
              semantic.palette.action.selected ||
              'rgba(0, 0, 0, 0.04)',
          },
          body: {
            height: components.table?.rowHeight,
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: foundation.radius.lg,
            boxShadow: semantic.elevation.md,
          },
        },
      },

      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: foundation.radius.full,
          },
        },
      },

      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: foundation.typography.fontWeight.medium,
            fontSize: foundation.typography.fontSize.sm,
          },
        },
      },
    },
  };

  return createMuiTheme(themeOptions);
}

import { z } from 'zod';

// Meta schema
const MetaSchema = z.object({
  name: z.string(),
  version: z.string(),
  extends: z.string().optional(),
});

// Spacing scale schema
const SpacingScaleSchema = z.object({
  xs: z.number(),
  sm: z.number(),
  md: z.number(),
  lg: z.number(),
  xl: z.number(),
  xxl: z.number().optional(),
});

// Radius scale schema
const RadiusScaleSchema = z.object({
  none: z.number(),
  sm: z.number(),
  md: z.number(),
  lg: z.number(),
  xl: z.number().optional(),
  full: z.number().optional(),
});

// Typography scale schema
const TypographyScaleSchema = z.object({
  fontFamily: z.object({
    base: z.string(),
    heading: z.string().optional(),
    mono: z.string().optional(),
  }),
  fontSize: z.object({
    xs: z.number(),
    sm: z.number(),
    md: z.number(),
    lg: z.number(),
    xl: z.number(),
    '2xl': z.number().optional(),
    '3xl': z.number().optional(),
  }),
  fontWeight: z.object({
    light: z.number(),
    regular: z.number(),
    medium: z.number(),
    semibold: z.number(),
    bold: z.number(),
  }),
  lineHeight: z.object({
    tight: z.number(),
    normal: z.number(),
    relaxed: z.number(),
  }),
});

// Breakpoints schema
const BreakpointsSchema = z
  .object({
    xs: z.number(),
    sm: z.number(),
    md: z.number(),
    lg: z.number(),
    xl: z.number(),
  })
  .optional();

// Z-index schema
const ZIndexSchema = z
  .object({
    modal: z.number(),
    drawer: z.number(),
    appBar: z.number(),
    tooltip: z.number(),
    snackbar: z.number(),
  })
  .optional();

// Layout schema
const LayoutSchema = z
  .object({
    maxContentWidth: z.number(),
  })
  .optional();

// Foundation schema
const FoundationSchema = z.object({
  spacing: SpacingScaleSchema,
  radius: RadiusScaleSchema,
  typography: TypographyScaleSchema,
  breakpoints: BreakpointsSchema,
  zIndex: ZIndexSchema,
  layout: LayoutSchema,
});

// MUI Color schema (for primary, secondary, error, etc.)
const PaletteColorSchema = z.object({
  main: z.string(),
  light: z.string().optional(),
  dark: z.string().optional(),
  contrastText: z.string().optional(),
});

// Extended palette color schema (standard MUI fields + numbered scale)
const PaletteColorWithScaleSchema = PaletteColorSchema.extend({
  50: z.string().optional(),
  100: z.string().optional(),
  200: z.string().optional(),
  300: z.string().optional(),
  400: z.string().optional(),
  500: z.string().optional(),
  600: z.string().optional(),
  700: z.string().optional(),
  800: z.string().optional(),
  900: z.string().optional(),
});

// Custom color scale schema (for product-specific colors like purple, violet, grey)
const ColorScaleSchema = z.object({
  50: z.string().optional(),
  100: z.string().optional(),
  200: z.string().optional(),
  300: z.string().optional(),
  400: z.string().optional(),
  500: z.string().optional(),
  600: z.string().optional(),
  700: z.string().optional(),
  800: z.string().optional(),
  900: z.string().optional(),
});

// Common palette (black, white)
const CommonPaletteSchema = z.object({
  black: z.string(),
  white: z.string(),
});

// MUI Palette schema - matches MUI's structure exactly
const PaletteSchema = z.object({
  primary: PaletteColorSchema,
  secondary: PaletteColorSchema.optional(),
  error: PaletteColorWithScaleSchema,
  warning: PaletteColorSchema,
  info: PaletteColorSchema,
  success: PaletteColorSchema,
  text: z.object({
    primary: z.string(),
    secondary: z.string(),
    disabled: z.string(),
  }),
  background: z.object({
    default: z.string(),
    paper: z.string(),
  }),
  divider: z.string(),
  action: z.object({
    active: z.string().optional(),
    hover: z.string().optional(),
    hoverOpacity: z.number().optional(),
    selected: z.string().optional(),
    selectedOpacity: z.number().optional(),
    disabled: z.string().optional(),
    disabledBackground: z.string().optional(),
    disabledOpacity: z.number().optional(),
    focus: z.string().optional(),
    focusOpacity: z.number().optional(),
    activatedOpacity: z.number().optional(),
  }),
  common: CommonPaletteSchema.optional(),
  grey: ColorScaleSchema.optional(),
  // Product-specific custom color scales
  purple: ColorScaleSchema.optional(),
  violet: ColorScaleSchema.optional(),
});

// Shadow/elevation schema
const ElevationSchema = z.object({
  sm: z.string(),
  md: z.string(),
  lg: z.string(),
  xl: z.string().optional(),
});

// Semantic schema
const SemanticSchema = z.object({
  palette: PaletteSchema,
  elevation: ElevationSchema,
});

// Component sizing schema
const ComponentSizeSchema = z.object({
  px: z.number(),
  py: z.number(),
  fontSize: z.number(),
  minHeight: z.number(),
  radius: z.number().optional(),
});

// Button component schema
const ButtonComponentSchema = z.object({
  sizes: z.object({
    small: ComponentSizeSchema,
    medium: ComponentSizeSchema,
    large: ComponentSizeSchema,
  }),
  variants: z
    .object({
      solid: z
        .object({
          borderWidth: z.number().optional(),
        })
        .optional(),
      outline: z
        .object({
          borderWidth: z.number(),
        })
        .optional(),
      ghost: z
        .object({
          borderWidth: z.number().optional(),
        })
        .optional(),
    })
    .optional(),
});

// Field (TextField/Select) component schema
const FieldComponentSchema = z.object({
  sizes: z.object({
    small: ComponentSizeSchema,
    medium: ComponentSizeSchema,
  }),
  helperTextSpacing: z.number().optional(),
});

// TextField component schema
const TextFieldComponentSchema = z
  .object({
    helperTextMarginLeft: z.number().optional(),
  })
  .optional();

// Dialog component schema
const DialogComponentSchema = z
  .object({
    radius: z.number().optional(),
    padding: z.number().optional(),
    titleTypography: z
      .object({
        fontSize: z.number(),
        fontWeight: z.number(),
        lineHeight: z.number(),
      })
      .optional(),
  })
  .optional();

// Table component schema
const TableComponentSchema = z
  .object({
    rowHeight: z.number().optional(),
    headerHeight: z.number().optional(),
  })
  .optional();

// Components schema
const ComponentsSchema = z.object({
  button: ButtonComponentSchema,
  field: FieldComponentSchema,
  textField: TextFieldComponentSchema,
  dialog: DialogComponentSchema,
  table: TableComponentSchema,
});

// Main token schema
export const TokenSchema = z.object({
  meta: MetaSchema,
  foundation: FoundationSchema,
  semantic: SemanticSchema,
  components: ComponentsSchema,
});

export type Tokens = z.infer<typeof TokenSchema>;
export type ButtonTokens = z.infer<typeof ButtonComponentSchema>;
export type FieldTokens = z.infer<typeof FieldComponentSchema>;

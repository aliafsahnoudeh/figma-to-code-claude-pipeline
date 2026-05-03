import { TokenSchema, type Tokens } from './schema/tokenSchema.js';
import globalTokens from './tokens/global.json';
import taskflowTokens from './tokens/taskflow.json';

/**
 * Available product keys for theming.
 */
export enum ProductKey {
  Global = 'global',
  TaskFlow = 'taskflow',
}

const tokenRegistry: Record<string, Tokens> = {
  [ProductKey.Global]: globalTokens as Tokens,
  [ProductKey.TaskFlow]: taskflowTokens as Tokens,
};

/**
 * Merge tokens with inheritance support.
 *
 * If a product theme declares `meta.extends: "global"`, foundation/semantic/component
 * tokens are deep-merged on top of the global base so themes only need to override
 * the values that differ.
 */
export function mergeTokens(productKey: ProductKey | string): Tokens {
  const productTokens = tokenRegistry[productKey];
  if (!productTokens) {
    throw new Error(`Unknown product key: ${productKey}`);
  }

  if (productTokens.meta.extends !== ProductKey.Global) {
    return productTokens;
  }

  const global = tokenRegistry[ProductKey.Global];

  const merged = {
    meta: productTokens.meta,
    foundation: {
      ...global.foundation,
      ...productTokens.foundation,
      typography: {
        ...global.foundation.typography,
        ...productTokens.foundation.typography,
        fontFamily: {
          ...global.foundation.typography.fontFamily,
          ...productTokens.foundation.typography?.fontFamily,
        },
        fontSize: {
          ...global.foundation.typography.fontSize,
          ...productTokens.foundation.typography?.fontSize,
        },
        fontWeight: {
          ...global.foundation.typography.fontWeight,
          ...productTokens.foundation.typography?.fontWeight,
        },
        lineHeight: {
          ...global.foundation.typography.lineHeight,
          ...productTokens.foundation.typography?.lineHeight,
        },
      },
    },
    semantic: {
      elevation: {
        ...global.semantic.elevation,
        ...productTokens.semantic.elevation,
      },
      palette: {
        primary: {
          ...global.semantic.palette.primary,
          ...(productTokens.semantic.palette?.primary || {}),
        },
        ...(global.semantic.palette.secondary || productTokens.semantic.palette?.secondary
          ? {
              secondary: {
                ...(global.semantic.palette.secondary || {}),
                ...(productTokens.semantic.palette?.secondary || {}),
              },
            }
          : {}),
        error: {
          ...global.semantic.palette.error,
          ...(productTokens.semantic.palette?.error || {}),
        },
        warning: {
          ...global.semantic.palette.warning,
          ...(productTokens.semantic.palette?.warning || {}),
        },
        info: {
          ...global.semantic.palette.info,
          ...(productTokens.semantic.palette?.info || {}),
        },
        success: {
          ...global.semantic.palette.success,
          ...(productTokens.semantic.palette?.success || {}),
        },
        text: {
          ...global.semantic.palette.text,
          ...(productTokens.semantic.palette?.text || {}),
        },
        background: {
          ...global.semantic.palette.background,
          ...(productTokens.semantic.palette?.background || {}),
        },
        divider: productTokens.semantic.palette?.divider || global.semantic.palette.divider,
        action: {
          ...global.semantic.palette.action,
          ...(productTokens.semantic.palette?.action || {}),
        },
        ...(productTokens.semantic.palette?.common && {
          common: productTokens.semantic.palette.common,
        }),
        ...(productTokens.semantic.palette?.grey && {
          grey: productTokens.semantic.palette.grey,
        }),
      },
    },
    components: {
      ...global.components,
      ...productTokens.components,
      button: {
        ...global.components.button,
        ...productTokens.components.button,
        sizes: {
          ...global.components.button.sizes,
          ...productTokens.components.button?.sizes,
        },
      },
      field: {
        ...global.components.field,
        ...productTokens.components.field,
        sizes: {
          ...global.components.field.sizes,
          ...productTokens.components.field?.sizes,
        },
      },
      dialog: {
        ...global.components.dialog,
        ...productTokens.components.dialog,
      },
      table: {
        ...global.components.table,
        ...productTokens.components.table,
      },
    },
  };

  return merged as Tokens;
}

/**
 * Validate tokens against schema.
 */
export function validateTokens(tokens: unknown): Tokens {
  return TokenSchema.parse(tokens);
}

/**
 * Load and validate product tokens.
 */
export function loadProductTokens(productKey: ProductKey | string): Tokens {
  const merged = mergeTokens(productKey);
  return validateTokens(merged);
}

/**
 * List the product keys consumers can pass to the theme provider.
 *
 * The `global` base is excluded since it is not meant to be used directly.
 */
export function getAvailableProducts(): ProductKey[] {
  return Object.keys(tokenRegistry).filter((key) => key !== ProductKey.Global) as ProductKey[];
}

import { loadProductTokens, type ProductKey } from './tokens.js';
import type { Tokens } from './schema/tokenSchema.js';

/**
 * Returns fully-merged design tokens for a product key.
 *
 * For React components use `useTokens()` instead.
 */
export function getTokens(productKey: ProductKey | string): Tokens {
  return loadProductTokens(productKey);
}

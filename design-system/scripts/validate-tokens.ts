#!/usr/bin/env tsx

import { loadProductTokens, ProductKey } from '../packages/themes/src/tokens.js';

console.log('Validating design tokens...\n');

let hasErrors = false;

for (const product of Object.values(ProductKey)) {
  process.stdout.write(`Checking ${product}... `);
  try {
    loadProductTokens(product);
    console.log('ok');
  } catch (error) {
    hasErrors = true;
    console.log('FAILED');
    if (error instanceof Error) console.error(error.message);
  }
}

if (hasErrors) {
  console.error('\nToken validation failed.');
  process.exit(1);
}

console.log('\nAll tokens valid.');

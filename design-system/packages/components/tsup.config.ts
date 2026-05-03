import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', '@mui/material', '@mui/x-data-grid', '@emotion/react', '@emotion/styled'],
  treeshake: true,
});

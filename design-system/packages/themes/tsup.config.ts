import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/types/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', '@mui/material', '@emotion/react', '@emotion/styled'],
  treeshake: true,
});

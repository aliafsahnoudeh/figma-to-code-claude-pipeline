import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Not needed with Next.js/React 17+
      "react/prop-types": "off", // Using TypeScript for prop validation
      "@typescript-eslint/no-explicit-any": "warn", // Warn on any usage
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "coverage/**",
    ".turbo/**",
  ]),
]);

export default eslintConfig;

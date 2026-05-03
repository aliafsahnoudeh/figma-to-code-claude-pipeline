import nextJest from "next/jest.js";

import type { Config } from "jest";

const createJestConfig = nextJest({ dir: "./" });

const config: Config = {
  clearMocks: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@taskflow/components$":
      "<rootDir>/../design-system/packages/components/src/index.ts",
    "^@taskflow/themes$":
      "<rootDir>/../design-system/packages/themes/src/index.ts",
    "^react$": "<rootDir>/node_modules/react",
    "^react-dom$": "<rootDir>/node_modules/react-dom",
    "^react/(.*)$": "<rootDir>/node_modules/react/$1",
    "^react-dom/(.*)$": "<rootDir>/node_modules/react-dom/$1",
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@taskflow)/)",
    "\\.pnp\\.[^\\/]+$",
  ],
};

export default createJestConfig(config);

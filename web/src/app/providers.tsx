"use client";

import { NextThemeProvider, ProductKey } from "@taskflow/themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider productKey={ProductKey.TaskFlow}>
      {children}
    </NextThemeProvider>
  );
}

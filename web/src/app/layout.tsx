import type { Metadata } from "next";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "TaskFlow",
  description: "A small project & task manager built with Next.js and the TaskFlow design system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

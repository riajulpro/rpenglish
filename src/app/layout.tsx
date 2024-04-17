import type { Metadata } from "next";
import { Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const hindSiliguri = Hind_Siliguri({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "RP English",
  description: "Learn English Entirely",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, hindSiliguri.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

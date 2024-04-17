"use client";

import i18n from "@/i18n";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { I18nextProvider } from "react-i18next";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </I18nextProvider>
  );
}

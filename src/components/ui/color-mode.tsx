"use client";

import type { IconButtonProps } from "@chakra-ui/react";
import { ClientOnly, Icon, IconButton, Skeleton } from "@chakra-ui/react";

import { forwardRef, useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { LuMoon, LuSun } from "react-icons/lu";
import { Switch } from "./switch";
import { ReactNode } from "react";
import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

const ThemeProvider =
  NextThemeProvider as React.ComponentType<ThemeProviderProps>;

export interface ColorModeProviderProps extends ThemeProviderProps {
  children: ReactNode;
}

export function ColorModeProvider({
  children,
  ...props
}: ColorModeProviderProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props}>
      {children}
    </ThemeProvider>
  );
}

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };
  return {
    colorMode: resolvedTheme,
    setColorMode: setTheme,
    toggleColorMode,
  };
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? light : dark;
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? <LuSun /> : <LuMoon />;
}

interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}

export const ColorModeButton = forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode();
  return (
    <Switch
      onChange={toggleColorMode}
      aria-label="Toggle color mode"
      {...props}
      colorPalette="blue"
      size="lg"
      trackLabel={{
        on: (
          <Icon color="yellow.400">
            <FaSun />
          </Icon>
        ),
        off: (
          <Icon color="gray.400">
            <FaMoon />
          </Icon>
        ),
      }}
    />
  );
});

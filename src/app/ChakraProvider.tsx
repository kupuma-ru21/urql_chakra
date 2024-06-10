"use client";

import { ChakraProvider as ChakraProviderBase } from "@chakra-ui/react";
import theme from "@/theme";

export function ChakraProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProviderBase theme={theme}>{children}</ChakraProviderBase>;
}

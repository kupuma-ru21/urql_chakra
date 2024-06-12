// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const theme = extendTheme({
  components: {
    Button: {
      sizes: {
        sm: {
          fontSize: "md",
        },
      },
      variants: {
        base: {
          bg: "yellow.500",
          fontSize: "md",
        },
        sm: {
          bg: "teal.500",
          fontSize: "lg",
        },
        md: {
          bg: "orange.500",
          fontSize: "xl",
        },
      },
    },
  },
});

export default theme;

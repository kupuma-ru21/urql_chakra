import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme(
  withDefaultColorScheme({
    colorScheme: "red",
    components: ["Button", "Badge"],
  }),
  withDefaultColorScheme({
    colorScheme: "blue",
    components: ["Alert", "Table"],
  })
);

export default theme;

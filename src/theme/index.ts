import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/button";
import { UserDefined } from "./components/user-defined";

const theme = extendTheme({
  components: {
    Button,
    /*
    NOTE:
    https://stackoverflow.com/questions/74816092/chakra-ui-custom-component-variant-not-working
    Document is wired, because <Card /> is already defined in Chakra UI.
    But in the document, <Card /> is treated as a custom component.
    That's why it doesn't work.
   */
    UserDefined,
  },
});

export default theme;

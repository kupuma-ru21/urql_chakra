import { extendTheme, withDefaultVariant } from "@chakra-ui/react";

const theme = extendTheme(
  withDefaultVariant({
    variant: "outline",
    components: ["Input", "NumberInput", "PinInput"],
  })
);

export default theme;

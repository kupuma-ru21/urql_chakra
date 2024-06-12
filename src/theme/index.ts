import { extendTheme, withDefaultProps } from "@chakra-ui/react";

const theme = extendTheme(
  withDefaultProps({
    defaultProps: {
      variant: "outline",
      size: "lg",
    },
    components: ["Input", "NumberInput", "PinInput"],
  })
);

export default theme;

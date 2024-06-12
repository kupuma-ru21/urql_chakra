import { Box, useStyleConfig } from "@chakra-ui/react";

export function UserDefined(props: {
  variant?: "smooth" | "rounded";
  children: React.ReactNode;
}) {
  const { variant, children } = props;

  const styles = useStyleConfig("UserDefined", { variant });

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles}>{children}</Box>;
}

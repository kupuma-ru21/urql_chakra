// 1. Import the components and hook
import {
  Box,
  BoxProps,
  Flex,
  createStylesContext,
  useMultiStyleConfig,
} from "@chakra-ui/react";

const [StylesProvider, useStyles] = createStylesContext("Menu");

export function Menu(props: {
  size: "sm" | "md";
  variant: "bold" | "colorful";
  children: React.ReactNode;
}) {
  const { size, variant, children } = props;

  // 2. Consume the `useMultiStyleConfig` hook
  const styles = useMultiStyleConfig("Menu", { size, variant });

  return (
    <Flex __css={styles.menu}>
      {/* 3. Mount the computed styles on `StylesProvider` */}
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Flex>
  );
}

export function MenuItem(props: BoxProps) {
  // 4. Read computed `item` styles from styles provider
  const styles = useStyles();
  return <Box as="button" __css={styles.item} {...props} />;
}

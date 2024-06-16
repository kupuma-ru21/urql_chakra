"use client";

import { Box, Portal } from "@chakra-ui/react";
import { useRef } from "react";

export default function Page() {
  const ref = useRef(null);
  return (
    <div>
      <Portal containerRef={ref}>
        <Box bg="teal.500" color="white">
          Parent: Hey welcome,
          <Portal appendToParentPortal={false}>
            Child: I&apos;m going to document.body
          </Portal>
        </Box>
      </Portal>
      <div style={{ background: "red" }} ref={ref} />
    </div>
  );
}

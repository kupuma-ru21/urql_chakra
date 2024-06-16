"use client";

import { Box, Portal } from "@chakra-ui/react";
import { useRef } from "react";

export default function Page() {
  const ref = useRef(null);
  return (
    <div>
      <Portal containerRef={ref}>
        <Box bg="teal.500" color="white">
          <Portal>Child: I&apos;m attached to my parent portal</Portal>
          Parent: Hey welcome,
        </Box>
      </Portal>
      <Box bg="red.400" color="white" ref={ref} />
    </div>
  );
}

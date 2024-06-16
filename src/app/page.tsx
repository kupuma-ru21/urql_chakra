"use client";

import { Box, Portal } from "@chakra-ui/react";
import { useRef } from "react";

export default function Page() {
  const ref = useRef(null);
  return (
    <Box bg="red.400" color="white">
      I&apos;m here,
      <Portal containerRef={ref}>
        Portal: This text is portaled to the yellow box!
      </Portal>
      <Box ref={ref} bg="yellow.500">
        <div>Container: Hey,</div>
      </Box>
    </Box>
  );
}

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

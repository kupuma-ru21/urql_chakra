"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function Page() {
  return (
    <Box sx={{ "--my-color": "#000000" }}>
      <Heading color="var(--my-color)" size="lg">
        This uses CSS Custom Properties!
      </Heading>
    </Box>
  );
}

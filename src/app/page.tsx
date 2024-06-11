"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function Page() {
  return (
    <Box
      sx={{
        "@media print": {
          display: "none",
        },
      }}
    >
      This text won&apos;t be shown when printing this page.
    </Box>
  );
}

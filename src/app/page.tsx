"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Text } from "@chakra-ui/react";

export default function Page() {
  return (
    <Box color="gray.100">
      <Text color="text">Welcome to Chakra UI</Text>
      <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
        To about
      </Link>
    </Box>
  );
}

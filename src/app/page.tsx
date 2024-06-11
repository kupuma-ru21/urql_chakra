"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Image, Text } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Box layerStyle="selected">This is a box</Box>
      <Box layerStyle="base">This is a box</Box>
    </>
  );
}

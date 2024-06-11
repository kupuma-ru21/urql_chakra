"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function Page() {
  return (
    <Box borderWidth={2} borderColor="purple.500" p={5} className="my-box">
      <Heading size="lg">
        Hover the box...
        <Box
          as="span"
          color="red.500"
          sx={{
            ".my-box:hover &": {
              color: "green.500",
            },
          }}
        >
          And I will turn green!
        </Box>
      </Heading>
    </Box>
  );
}

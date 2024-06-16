"use client";

import { Box, Heading, Mark, useHighlight } from "@chakra-ui/react";

export default function Page() {
  const chunks = useHighlight({
    text: "With the Highlight component, you can spotlight, emphasize and accentuate words instantly",
    query: ["spotlight", "emphasize", "accentuate", "instantly"],
  });

  return (
    <Heading lineHeight="tall">
      {chunks.map(({ match, text }) => {
        console.log("match", match);
        console.log("text", text);
        console.log("---------");

        if (!match) return text;
        return text === "instantly" ? (
          <Box as="u" fontFamily="NewYork" key={text}>
            {text}
          </Box>
        ) : (
          <Mark
            bg="black"
            color="white"
            fontFamily="NewYork"
            px="2"
            py="1"
            key={text}
          >
            {text}
          </Mark>
        );
      })}
    </Heading>
  );
}

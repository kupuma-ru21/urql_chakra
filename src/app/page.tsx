"use client";

import { Text } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Text noOfLines={1}>
        &quot;The quick brown fox jumps over the lazy dog&quot; is an
        English-language pangram—a sentence that contains all of the letters of
        the English alphabet. Owing to its existence, Chakra was created.
      </Text>

      <Text noOfLines={[1, 2, 3]}>
        &quot;The quick brown fox jumps over the lazy dog&quot; is an
        English-language pangram—a sentence that contains all of the letters of
        the English alphabet. Owing to its existence, Chakra was created.
      </Text>
    </>
  );
}

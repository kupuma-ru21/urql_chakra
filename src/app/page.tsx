"use client";

import { Box, Button, useControllableState } from "@chakra-ui/react";

export default function Page() {
  const [value, setValue] = useControllableState({ defaultValue: 40 });
  console.log("value", value);

  return (
    <div>
      <Button onClick={() => setValue(value + 1)}>+</Button>
      <Box as="span" w="200px" mx="24px">
        {value}
      </Box>
      <Button onClick={() => setValue(value - 1)}>-</Button>
    </div>
  );
}

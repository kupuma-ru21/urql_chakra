"use client";

import { Box, Button, useControllableState } from "@chakra-ui/react";
import { useState } from "react";

export default function Page() {
  // you need a state and updater to change the value
  const [value, setValue] = useState(40);

  const [internalValue, setInternalValue] = useControllableState({
    value,
    onChange: setValue,
  });

  console.log("internalValue", internalValue);

  return (
    <div>
      <Button onClick={() => setInternalValue(value + 1)}>+</Button>
      <Box as="span" w="200px" mx="24px">
        {internalValue}
      </Box>
      <Button onClick={() => setInternalValue(value - 1)}>-</Button>
    </div>
  );
}

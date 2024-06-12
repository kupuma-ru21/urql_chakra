"use client";
import { Button } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Button variant={{ base: "base", md: "md", sm: "sm" }}>
        Object syntax
      </Button>
      {/* the button will be orange after the `sm` breakpoint due to the array syntax because The array syntax may not work as expected, since it ignores the naming of the variant and uses them straight in the order on which they are passed into the array. */}
      <Button variant={["base", "md"]}>Array syntax</Button>
    </>
  );
}

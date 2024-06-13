"use client";
import { CheckIcon } from "@chakra-ui/icons";
import { Button, VisuallyHidden } from "@chakra-ui/react";

export default function Page() {
  return (
    <Button>
      <VisuallyHidden>Checkmark</VisuallyHidden>
      <CheckIcon />
    </Button>
  );
}

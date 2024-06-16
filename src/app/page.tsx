"use client";

import { Button, Collapse, useDisclosure } from "@chakra-ui/react";

export default function Page() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Collapse startingHeight={20} in={isOpen}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
      </Collapse>
      <Button size="sm" onClick={onToggle} mt="1rem">
        Show {isOpen ? "Less" : "More"}
      </Button>
    </>
  );
}

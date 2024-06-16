"use client";

import { useOutsideClick } from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function Example() {
  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useOutsideClick({ ref, handler: () => setIsModalOpen(false) });

  return (
    <>
      {isModalOpen ? (
        <div ref={ref}>
          👋 Hey, I&apos;m a modal. Click anywhere outside of me to close.
        </div>
      ) : (
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      )}
    </>
  );
}

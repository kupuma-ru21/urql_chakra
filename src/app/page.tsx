"use client";

import { useConst } from "@chakra-ui/react";

export default function Page() {
  const mountTime = useConst(() => new Date().toTimeString());
  const obj = useConst({ a: 100 });
  return (
    <>
      <p>Mount time: {mountTime}</p>
      <p>Value from constant object: {obj.a}</p>
    </>
  );
}

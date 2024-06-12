"use client";
import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import { UserDefined } from "./components/UserDefined";

export default function Page() {
  return (
    <Stack direction="row">
      <Usage1 />
      <Usage2 />
    </Stack>
  );
}

function Usage1() {
  return (
    <UserDefined>
      <Image
        src="https://chakra-ui.com/eric.jpg"
        rounded="full"
        w={32}
        h={32}
        boxShadow="md"
        alt="usage1"
      />
      <Heading mt={6} maxW={60} size="lg" textAlign="center" color="gray.700">
        Welcome back, Eric
      </Heading>
      <Text mt={6} mb={6} size="sm" color="blackAlpha.500">
        Use your fingerprint to continue.
      </Text>
      <Image src="/207794.jpeg" w={32} h={32} alt="usage1-1" />
    </UserDefined>
  );
}

function Usage2() {
  return (
    <UserDefined variant="rounded">
      <Image
        src="https://chakra-ui.com/eric.jpg"
        rounded="full"
        w={32}
        h={32}
        boxShadow="md"
        alt="usage2-1"
      />
      <Heading mt={6} maxW={60} size="lg" textAlign="center" color="gray.700">
        Welcome back, Eric
      </Heading>
      <Text mt={6} mb={6} size="sm" color="blackAlpha.500">
        Use your fingerprint to continue.
      </Text>
      <Image src="/207794.jpeg" w={32} h={32} alt="usage2-2" />
    </UserDefined>
  );
}

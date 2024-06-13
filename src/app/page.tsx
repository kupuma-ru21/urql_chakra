"use client";
import { Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { UserDefined } from "./components/UserDefined";
import { Menu, MenuItem } from "./components/Menu";

export default function Page() {
  return (
    <>
      <Stack direction="row">
        <Usage1 />
        <Usage2 />
      </Stack>
      <Usage3 />
      <Usage4 />
    </>
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

// 1. Using the default props defined in style config
function Usage3() {
  return (
    <Menu size="sm" variant="bold">
      <MenuItem>Awesome</MenuItem>
      <MenuItem>Sauce</MenuItem>
    </Menu>
  );
}

// 2. Overriding the default
function Usage4() {
  return (
    <Menu size="md" variant="colorful">
      <MenuItem>Awesome</MenuItem>
      <MenuItem>Sauce</MenuItem>
    </Menu>
  );
}

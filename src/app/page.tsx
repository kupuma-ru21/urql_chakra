"use client";
import { Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export default function Page() {
  return (
    <Menu>
      <MenuButton>Open menu</MenuButton>
      <MenuList>
        <MenuItem as={Link} href="/about">
          To About
        </MenuItem>
        <MenuItem as={Link} href="/">
          To Home
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

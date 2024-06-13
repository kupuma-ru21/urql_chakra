"use client";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Page() {
  return (
    <Tabs isLazy>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
      </TabList>
      <TabPanels>
        {/* initially mounted */}
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        {/* initially not mounted */}
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

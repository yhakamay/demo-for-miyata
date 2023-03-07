"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import {
  Container,
  Heading,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <VStack spacing={12} align={"start"}>
          <Heading>Demo for Miyata</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            posuere nunc vel est placerat consequat.
          </Text>
          <HStack justify={"space-between"}>
            <Image src={"/next.svg"} alt={"next"} width={200} height={200} />
            <Tabs>
              <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </HStack>
        </VStack>
      </Container>
    </main>
  );
}

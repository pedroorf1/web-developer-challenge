import React from "react";
import { VStack, Box, Text, Container } from "@chakra-ui/react";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from "./components/Header";
import FormPost from "./components/formPost";
import Feed from "./components/feed";
config.autoAddCss = false;

function App() {
  return (
    <VStack>
      <Box
        display="flex"
        w={["100%", "460px", "1366px"]}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        p={0}
        m={0}
        bg="#343434"
      >
        <Header />
        <Box
          w="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <FormPost />
          <Feed />
        </Box>
      </Box>
    </VStack>
  );
}

export default App;

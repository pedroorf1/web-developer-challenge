import React from "react";
import { VStack, Box, Text, Container } from "@chakra-ui/react";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from "./components/Header";
import FormPost from "./components/formPost";
config.autoAddCss = false;

function App() {
  return (
    <VStack w="100%" p={0} m={0}>
      <Container
        w={["360px", "460px", "1366px"]}
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
        </Box>
      </Container>
    </VStack>
  );
}

export default App;

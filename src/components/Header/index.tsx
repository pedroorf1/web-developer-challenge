import React from "react";
import { Img, Box, HStack, Text } from "@chakra-ui/react";

const Header = () => {
  const [logo, setLogo] = React.useState<string | null>(null);
  const Logo = "/assets/imgs/system/bx-logo@3x.png";
  React.useMemo(() => {
    console.log("ttt", typeof Img);
    setLogo(Logo);
  }, []);

  if (logo == null) {
    return <></>;
  }

  return (
    <HStack
      bg="#2B2B2B"
      justifyContent="center"
      m={0}
      p={0}
      w={["360px", "460px", "1366px"]}
      h={["60px", "80px", "93px"]}
    >
      <Box>
        <Img src={logo} w={103} h={45} objectFit="contain" />
      </Box>
    </HStack>
  );
};

export default Header;

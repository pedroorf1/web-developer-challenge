import React from "react";
import { Text, Box, VStack, Button, Image, HStack } from "@chakra-ui/react";
import imgIconDelete from "../../assets/imgs/icons/delete@3x.png";

type CardPostFeedProps = {
  author: string;
  post: string;
  image: string;
};

const CardPostFeed = ({ author, post, image }: CardPostFeedProps) => {
  return (
    <Box w={["360px", "516px"]} m={0} mt="8px" bg="#2B2B2B" p={0} mb="16px">
      <Box justifyContent="right" w="100%" display="flex" flex-direction="row">
        <Image
          src={imgIconDelete}
          w="20px"
          h="20px"
          alt="excluir post"
          mr="12px"
          mt="12px"
        />
      </Box>
      <Box p={7} display="flex" flex-direction="row" position="relative">
        <Box w="300px" maxH="100px">
          <Image
            src={image}
            w="88px"
            h="88px"
            objectFit="cover"
            borderRadius="50%"
            bg="red"
          />
        </Box>
        <Box p={2}>
          <Text color="#9f9f9f" fontSize="16px" textAlign="left" ml={2}>
            {post}
          </Text>
          <Text
            color="#5f5f5f"
            fontSize="12px"
            fontWeight="normal"
            textAlign="left"
            ml={2}
            mt="16px"
          >
            Enviado por
          </Text>
          <Text
            color="#7a7a7a"
            fontSize="14px"
            fontWeight="normal"
            textAlign="left"
            ml={2}
          >
            {author}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CardPostFeed;

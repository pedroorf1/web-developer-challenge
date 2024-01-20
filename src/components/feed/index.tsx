import React from "react";
import { Text, Box, VStack, Card } from "@chakra-ui/react";
import CardPostFeed from "../cardPostFeed";

import { posts } from "../../mocks/post";

const Feed = () => {
  return (
    <Box w={["360px", "516px"]} mt="50px" bg="#343434" p={0}>
      <Text textAlign="left" color="#7a7a7a" p={0} m={0} mt="8px">
        Feed
      </Text>
      {posts.map((post) => (
        <CardPostFeed
          key={post.id}
          author={post.author}
          post={post.message}
          image={post.img}
        />
      ))}
    </Box>
  );
};

export default Feed;

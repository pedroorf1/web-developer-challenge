import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, Box, VStack, Card } from "@chakra-ui/react";
import CardPostFeed from "../cardPostFeed";

type Posts = { id: string; message: string; img: string; author: string }[];

const Feed = () => {
  const posts: Posts = useSelector((state: any) => state.feed.posts);
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
          id={post.id}
        />
      ))}
    </Box>
  );
};

export default Feed;

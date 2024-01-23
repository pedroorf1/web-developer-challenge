import React from "react";
import parser from "html-react-parser";
import { useDispatch } from "react-redux";
import { removePost } from "../../store/reducers/posts";
import { Text, Box, Img, Image, Avatar } from "@chakra-ui/react";
import imgIconDelete from "../../assets/imgs/icons/delete@3x.png";

import userDefaultPerfilImg from "../../assets/imgs/userDefaultPerfilImg.png";

type CardPostFeedProps = {
  author: string;
  post: string;
  image: string;
  id: string;
};

const CardPostFeed = ({ author, post, image, id }: CardPostFeedProps) => {
  const [img, setImg] = React.useState<string | null>(null);
  const dispatch = useDispatch();

  const handleDeletePost = () => {
    dispatch(removePost(id));
    alert("Post deletado com sucesso!");
  };

  React.useEffect(() => {
    setImg(image);
  }, [image]);

  return (
    <Box w={["360px", "516px"]} m={0} mt="8px" bg="#2B2B2B" p={0} mb="16px">
      <Box justifyContent="right" w="100%" display="flex" flex-direction="row">
        <Img
          loading="eager"
          src={imgIconDelete}
          w="20px"
          h="20px"
          alt="excluir post"
          mr="12px"
          mt="12px"
          _hover={{ cursor: "pointer", backgroundColor: "#494949" }}
          onClick={handleDeletePost}
        />
      </Box>
      <Box p={7} display="flex" flex-direction="row" position="relative">
        <Box w="300px" maxH="90px">
          <Avatar
            src={img ? img : userDefaultPerfilImg}
            w="88px"
            h="88px"
            name={author}
          />
        </Box>
        <Box p={2}>
          <Text
            color="#9f9f9f"
            fontSize="16px"
            textAlign="justify"
            ml={2}
            w="330px"
          >
            {parser(post)}
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

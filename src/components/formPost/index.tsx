import React from "react";
import { v1 as uuidV1 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../../store/reducers/posts";
import {
  FormControl,
  Image as ImgChakra,
  Input,
  Textarea,
  Button,
  Box,
  VStack,
} from "@chakra-ui/react";

import trashImg from "../../assets/imgs/icons/trash@3x.png";

type Posts = { id: string; message: string; img: string; author: string }[];

const FormPost = () => {
  const dispatch = useDispatch();
  const posts: Posts = useSelector((state: any) => state.feed.posts);
  const [img, setImg] = React.useState<string | null>(null);

  const getMessage = React.useRef<HTMLTextAreaElement>(null);
  const getImg = React.useRef<HTMLImageElement>(null);
  const getAuthor = React.useRef<HTMLInputElement>(null);

  React.useMemo(() => {
    setImg("/assets/imgs/perfil/06.jpeg");
  }, [img]);
  if (!img) {
    return <></>;
  }

  const dataPost = {
    id: uuidV1(),
    message: getMessage.current?.value,
    img: getImg.current?.src,
    author: getAuthor.current?.value,
  };

  const handlePublic = () => {
    dispatch(addPost(dataPost));
    return alert("publicar");
  };
  const clearPublic = () => {
    return alert("limpar publicar");
  };
  const clearImg = () => {
    return alert("limpar imagem");
  };
  const changeImg = () => {
    return alert("mudar imagem");
  };

  return (
    <FormControl w={["360px", "516px"]} mt="40px" bg="#2B2B2B" borderRadius={3}>
      <VStack>
        <ImgChakra
          src={img}
          boxSize="88px"
          borderRadius="50%"
          mt="24px"
          objectFit="cover"
          _hover={{ cursor: "pointer" }}
          onClick={changeImg}
          ref={getImg}
        />
        <ImgChakra
          src={trashImg}
          boxSize="24px"
          position="relative"
          top="-60px"
          right="-70px"
          _hover={{ cursor: "pointer", backgroundColor: "#494949" }}
          onClick={clearImg}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          p={0}
          m={0}
        >
          <Input
            type="text"
            placeholder="nome"
            p={["12px", "16px"]}
            borderRadius="8px"
            bg="#494949"
            size="xs"
            w={["360px", "468px"]}
            h="40px"
            mt="16px"
            mb="8px"
            fontSize={14}
            ref={getAuthor}
          />
          <Textarea
            placeholder="texto"
            borderRadius="8px"
            overflowY="auto"
            bg="#494949"
            p={["12px", "16px"]}
            fontSize={14}
            size="xs"
            w={["360px", "468px"]}
            minH="80px"
            sx={{
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
            ref={getMessage}
          />
        </Box>
        <Box
          w={["380px", "460px"]}
          mt="32px"
          display="flex"
          flexDirection="row"
          justifyContent="right"
          alignItems="right"
          pb="24px"
        >
          <Button variant="link" w={98} h={41} onClick={clearPublic}>
            Descartar
          </Button>
          <Button colorScheme="whatsapp" w={98} h={41} onClick={handlePublic}>
            Publicar
          </Button>
        </Box>
      </VStack>
    </FormControl>
  );
};

export default FormPost;

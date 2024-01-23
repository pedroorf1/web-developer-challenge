import React from "react";
import { v1 as uuidV1 } from "uuid";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/reducers/posts";
import {
  FormControl,
  Image as ImgChakra,
  Input,
  Img,
  Text,
  FormLabel,
  Textarea,
  Button,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";

import trashImg from "../../assets/imgs/icons/trash@3x.png";
import userDefaultPerfilImg from "../../assets/imgs/userDefaultPerfilImg.png";

const FormPost = () => {
  const [isChangingImg, setIsChanginImg] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const [img, setImg] = React.useState<string | null>(null);

  const getMessage = React.useRef<HTMLTextAreaElement>(null);
  const getImg = React.useRef<HTMLImageElement>(null);
  const getAuthor = React.useRef<HTMLInputElement>(null);

  const changeImgInput = React.useRef<HTMLInputElement>(null);

  const handlePublic = () => {
    const dataPost = {
      id: uuidV1(),
      message: getMessage.current?.value,
      img: getImg.current?.src,
      author: getAuthor.current?.value,
    };

    dispatch(addPost(dataPost));
    return alert("Postado com sucesso!");
  };
  const clearPublic = () => {
    setImg(null);
    if (getMessage?.current?.value != null) {
      getMessage.current.value = "";
    }
    if (getAuthor?.current?.value != null) {
      getAuthor.current.value = "";
    }
    return;
  };
  const clearImg = () => {
    return setImg(null);
  };
  const changeImg = () => {
    if (
      changeImgInput.current?.value !== "" &&
      changeImgInput.current?.value !== null &&
      changeImgInput.current?.value !== undefined
    ) {
      setImg(changeImgInput.current?.value);
      toogleAddImage();
    } else {
      return alert("url da imagem invalida");
    }
  };
  const backImgAvatar = () => {
    toogleAddImage();
  };
  const toogleAddImage = () => {
    return setIsChanginImg(!isChangingImg);
  };

  return (
    <FormControl w="516px" mt="40px" bg="#2B2B2B" borderRadius={3}>
      <VStack
        style={{
          minHeight: "400px",
          padding: 0,
          margin: 0,
        }}
      >
        {!isChangingImg ? (
          <Box>
            <Img
              alt="Click para mudar a imagem do post"
              loading="eager"
              src={img == null ? userDefaultPerfilImg : img}
              boxSize="88px"
              borderRadius="50%"
              mt="24px"
              objectFit="cover"
              _hover={{ cursor: "pointer" }}
              onClick={toogleAddImage}
              ref={getImg}
            />
            <Text
              color="#494949"
              fontSize="10px"
              fontWeight="bold"
              position="relative"
              top="-50px"
              bg="#eee"
              w="97%"
              m="0 auto"
              _hover={{ cursor: "pointer", backgroundColor: "#aaa" }}
              onClick={toogleAddImage}
            >
              Change image
            </Text>
            <ImgChakra
              src={trashImg}
              boxSize="24px"
              position="relative"
              top="-60px"
              right="-100px"
              _hover={{ cursor: "pointer", backgroundColor: "#494949" }}
              onClick={clearImg}
            />
          </Box>
        ) : (
          <Box>
            <FormLabel
              htmlFor="urlimg"
              color="#7a7a7a"
              mt={10}
              mb={5}
              ml={6}
              w="100%"
            >
              Adicione a url da imagem no campo
            </FormLabel>
            <Input
              type="text"
              id="urlimg"
              borderRadius="8px"
              placeholder="url da imagem"
              ref={changeImgInput}
              color={"#fff"}
              bg="#494949"
              size="xs"
              fontSize={14}
              p={["12px", "16px"]}
              w="468px"
            />
            <HStack justifyContent="right">
              <Button
                variant="link"
                onClick={backImgAvatar}
                p={5}
                m={5}
                mr="-13px"
              >
                Voltar
              </Button>
              <Button
                colorScheme="whatsapp"
                onClick={changeImg}
                p={5}
                m={5}
                ml="0"
              >
                Mudar imagem
              </Button>
            </HStack>
          </Box>
        )}
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
            w="468px"
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
            w="468px"
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

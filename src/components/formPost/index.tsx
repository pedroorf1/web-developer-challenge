import React from "react";
import {
  FormControl,
  Image as ImgChakra,
  Input,
  Textarea,
  Button,
  Box,
  VStack,
} from "@chakra-ui/react";

const FormPost = () => {
  const [img, setImg] = React.useState<string | null>(null);
  React.useMemo(() => {
    setImg("/assets/imgs/perfil/06.jpeg");
  }, [img]);
  if (!img) {
    return <></>;
  }
  return (
    <FormControl
      w={["360px", "516px"]}
      m="40px 425px 56px"
      bg="#3b3b3b"
      p={24}
      borderRadius={3}
    >
      <VStack>
        <ImgChakra
          src={img}
          boxSize="88px"
          borderRadius="50%"
          mb={10}
          objectFit="cover"
          fontFamily="SFProDisplay-Black"
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Input
            type="text"
            placeholder="nome"
            p={10}
            borderRadius={8}
            bg="#494949"
            size="xs"
            w={["360px", "468px"]}
            h="40px"
            fontSize={14}
          />
          <Textarea
            placeholder="texto"
            borderRadius={8}
            bg="#494949"
            p={10}
            mt={10}
            size="xs"
            w={["360px", "468px"]}
            h="56px"
            fontSize={14}
          />
        </Box>
        <Box
          w={["380px", "490px"]}
          display="flex"
          flexDirection="row"
          justifyContent="right"
          alignItems="right"
          bg="red"
          gap={10}
          mt={32}
        >
          <Button variant="link" w={98} h={41}>
            Descartar
          </Button>
          <Button colorScheme="whatsapp" w={98} h={41}>
            Publicar
          </Button>
        </Box>
      </VStack>
    </FormControl>
  );
};

export default FormPost;

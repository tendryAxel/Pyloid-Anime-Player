import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useInput } from "../utils/hooks.tsx";
import { useNavigate } from "react-router-dom";

export default () => {
  const videoFolderInput = useInput("./anime");
  const navigate = useNavigate();

  const onComfirm = () => {
    navigate("/home");
  };

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      gap={5}
      w={"100vw"}
      h={"100vh"}
    >
      <Text fontSize={"2xl"}>Welcome</Text>
      <Input
        value={videoFolderInput.stat}
        onChange={videoFolderInput.onChange}
        w={"50vw"}
      />
      <Button onClick={onComfirm} colorScheme={"blue"}>
        Confirm
      </Button>
    </Flex>
  );
};

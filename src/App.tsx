import pyloidLogo from "./assets/pyloid_icon.png";
import { baseAPI, rpc } from "pyloid-js";
import { useState } from "react";
import { Button, Flex, Image, Link, Text } from "@chakra-ui/react";

function App() {
  const [message, setMessage] = useState("");

  const onClickGreet = async () => {
    const message = await rpc.call("greet", { name: "John" });
    setMessage(message);
  };

  const onClickCreateWindows = () => rpc.call("create_window");
  const onClickClose = () => baseAPI.close();
  return (
    <>
      <Flex>
        <Image src={pyloidLogo} alt="Pyloid logo" />
      </Flex>
      <Text>Pyloid App</Text>
      <Flex>
        <Button onClick={onClickGreet}>Greet</Button>
        <Button onClick={onClickCreateWindows}>Create Window</Button>
        <Button onClick={onClickClose}>Close</Button>
      </Flex>
      <Flex>
        <Text>{message}</Text>
        <Link href="https://pyloid.com">Visit Pyloid</Link>
      </Flex>
    </>
  );
}

export default App;

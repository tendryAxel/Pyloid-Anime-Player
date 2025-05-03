import { rpc } from "pyloid-js";
import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";

function App() {
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    rpc
      .call("file_list")
      .then((files) => files as string[])
      .then(setFiles);
  }, []);

  return (
    <Flex flexDir={"column"} gap={2}>
      {files.map((file) => (
        <Flex key={file}>{file}</Flex>
      ))}
      {files.length == 0 ? "Oups... nothing to show XD" : null}
    </Flex>
  );
}

export default App;

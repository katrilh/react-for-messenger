import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Box, Heading } from "rebass/styled-components";
import { Label, Select } from "@rebass/forms";
import GraphWrapper from "./GraphWrapper";
import { theme } from "./theme";
import { intialLoadAll } from "./fileloader";
import { FbMessageObject } from "./types";

const Home = () => {
  const [allData, setAllData] = useState<FbMessageObject>();
  const [chatOptions, setChatOptions] = useState(["Loading..."]);
  const [currentChat, setCurrentChat] = useState("");

  useEffect(() => {
    if (!allData) {
      setAllData(intialLoadAll());
    } else {
      setChatOptions(["Select a chat"].concat(Object.keys(allData)));
    }
  }, [allData]);
  return (
    <ThemeProvider theme={theme}>
      <Box fontSize={2} margin="auto" width="80%">
        <Heading>Pick a chat</Heading>
        <Select
          id="chat-select"
          width="8o%"
          m="auto"
          disabled={chatOptions.includes("Loading...")}
          onChange={({ target }) => setCurrentChat(target.value)}
        >
          {chatOptions.map((e, idx) => (
            <option key={idx}>{e}</option>
          ))}
        </Select>
        {allData && allData[currentChat] && (
          <GraphWrapper msgData={allData[currentChat]} chatKey={currentChat} />
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Home;

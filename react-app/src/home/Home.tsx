import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Box, Heading } from "rebass/styled-components";
import { Select } from "@rebass/forms";
import GraphWrapper from "./GraphWrapper";
import { theme } from "./theme";
import { FbMessageObject, FbMessage } from "./types";
import { formatTimestamp } from "./utils";

const Home = () => {
  const [allData, setAllData] = useState<FbMessageObject>();
  const [chatOptions, setChatOptions] = useState(["Loading..."]);
  const [currentChat, setCurrentChat] = useState("");

  useEffect(() => {
    if (!allData) {
      fetch("/init")
        .then((res) => res.json())
        .then((data: Record<string, FbMessage[]>) => {
          // This takes the longest - mirate all proccessing to backend?
          for (let chat in data) {
            data[chat].map(
              ({ date }, i) => (data[chat][i].date = formatTimestamp(date))
            );
          }
          setAllData(data);
        });
    } else {
      setChatOptions(["Select a chat"].concat(Object.keys(allData)));
    }
  }, [allData]);
  return (
    <ThemeProvider theme={theme}>
      <Box fontSize={2} px={4} margin="auto" width="90%" bg="whitesmoke">
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

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Box, Heading } from "rebass/styled-components";
// import { Select } from "@rebass/forms";
// import GraphWrapper from "./GraphWrapper";
import { theme } from "./theme";
// import { intialLoadAll } from "./fileloader";
// import { FbMessageObject } from "./types";

const Home = () => {
  // const [allData, setAllData] = useState<FbMessageObject>();
  // const [chatOptions, setChatOptions] = useState(["Loading..."]);
  // const [currentChat, setCurrentChat] = useState("");

  const [hi, setHi] = useState("hi");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    fetch("/hello")
      .then((res) => res.json())
      .then((data) => {
        setHi(data.hi);
        setTime(new Date(data.time));
      });
  }, []);

  // useEffect(() => {
  //   if (!allData) {
  //     setAllData(intialLoadAll());
  //   } else {
  //     setChatOptions(["Select a chat"].concat(Object.keys(allData)));
  //   }
  // }, [allData]);
  return (
    <ThemeProvider theme={theme}>
      <Box fontSize={2} px={4} margin="auto" width="90%" bg="whitesmoke">
        <Heading>Some data from FLASK</Heading>
        <p>{hi}</p>
        <p>{time.toString()}</p>
        {/* <Heading>Pick a chat</Heading>
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
        )} */}
      </Box>
    </ThemeProvider>
  );
};

export default Home;

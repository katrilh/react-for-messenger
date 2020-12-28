import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Box, Heading } from "rebass/styled-components";
import GraphWrapper from "./GraphWrapper";
import { theme } from "./theme";
import { intialLoadAll } from "./utils";
import { FbMessageObject } from "./types";

const Home = () => {
  const [allData, setAllData] = useState<FbMessageObject>();
  useEffect(() => {
    if (!allData) {
      setAllData(intialLoadAll());
    }
  });
  console.log(allData && Object.keys(allData));
  console.log(allData);

  return (
    <ThemeProvider theme={theme}>
      <Box fontSize={2} margin="auto" width="80%">
        <Heading>Data data data</Heading>
        <GraphWrapper />
      </Box>
    </ThemeProvider>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Box, Heading, Text } from "rebass/styled-components";
import GraphWrapper from "./GraphWrapper";
import { theme } from "./theme";

const getData = (path = "dummydata") => require(`./${path}.json`);

const Home = () => {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    if (!data) {
      setData(getData());
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box p={5} fontSize={2} width={[1, 1, 1 / 2]} variant="box.outline">
        <Heading>Data data data</Heading>
        <GraphWrapper />
      </Box>
    </ThemeProvider>
  );
};

export default Home;

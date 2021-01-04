import React, { useEffect } from "react";
import { Box, Card, Heading } from "rebass/styled-components";
import BarChart from "./charts/BarChart";
import HeatMap from "./charts/HeatMap";
import LineChart from "./charts/Linechart";
import { charBoxDefaults } from "./consts";
import { FbMessage } from "./types";
import { formatTimeData, formatPersonYearBar, formatTotal } from "./utils";

interface GraphWrapperProps {
  msgData: FbMessage[];
  // chatKey: string;
}
// TODO: add some sort of load cashing

// const loadedChats: Record<string, any> = {};

// const addChat = (chatKey: string) => (loadedChats[chatKey] = "added");

const GraphWrapper = ({ msgData /*, chatKey*/ }: GraphWrapperProps) => {
  const [heatmap, linechart] = formatTimeData(msgData);
  // useEffect(() => {
  //   if (!loadedChats.chatKey) {
  //     addChat(chatKey);
  //   }
  // }, [chatKey]);
  return (
    <Card padding={4} width={"100%"} height="90%">
      <Box {...charBoxDefaults}>
        <Heading> {`${formatTotal(msgData.length)} texts in total`}</Heading>
        <BarChart {...formatPersonYearBar(msgData)} />
      </Box>
      <hr />
      <Box {...charBoxDefaults}>
        <Heading>Throughout the year</Heading>
        <LineChart data={linechart} />
      </Box>
      <hr />
      <Box {...charBoxDefaults}>
        <Heading>Texts sent by day and hour</Heading>
        <HeatMap {...heatmap} />
      </Box>
    </Card>
  );
};

export default GraphWrapper;

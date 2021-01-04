import { Serie } from "@nivo/line";
import React, { useEffect, useState } from "react";
import { Box, Card, Heading } from "rebass/styled-components";
import BarChart from "./charts/BarChart";
import HeatMap from "./charts/HeatMap";
import LineChart from "./charts/Linechart";
import { cacheFieldsDefaults, charBoxDefaults } from "./consts";
import { DataAndKey, FbMessage, GraphWrapperCache } from "./types";
import { formatTimeData, formatPersonYearBar, formatTotal } from "./utils";

interface GraphWrapperProps {
  msgData: FbMessage[];
  chatKey: string;
}

const loadedChats: GraphWrapperCache = {};

const addChat = (
  chatKey: string,
  len: string,
  bar: DataAndKey,
  line: Serie[],
  heat: DataAndKey
) => (loadedChats[chatKey] = { len, bar, line, heat });

const GraphWrapper = ({ msgData, chatKey }: GraphWrapperProps) => {
  const [currentData, setCurrentData] = useState(cacheFieldsDefaults);
  useEffect(() => {
    if (!loadedChats[chatKey]) {
      const len = formatTotal(msgData.length);
      const bar = formatPersonYearBar(msgData);
      const [line, heat] = formatTimeData(msgData);
      addChat(chatKey, len, bar, line, heat);
    }
    setCurrentData(loadedChats[chatKey]);
  }, [chatKey]);
  return (
    <Card padding={4} width={"100%"} height="90%">
      <Box {...charBoxDefaults}>
        <Heading> {`${currentData.len} texts in total`}</Heading>
        <BarChart {...currentData.bar} />
      </Box>
      <hr />
      <Box {...charBoxDefaults}>
        <Heading>Throughout the year</Heading>
        <LineChart data={currentData.line} />
      </Box>
      <hr />
      <Box {...charBoxDefaults}>
        <Heading>Texts sent by day and hour</Heading>
        <HeatMap {...currentData.heat} />
      </Box>
    </Card>
  );
};

export default GraphWrapper;

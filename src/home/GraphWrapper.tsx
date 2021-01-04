import { Serie } from "@nivo/line";
import React, { useEffect, useState } from "react";
import { Box, Card, Heading } from "rebass/styled-components";
import BarChart from "./charts/BarChart";
import HeatMap from "./charts/HeatMap";
import LineChart from "./charts/Linechart";
import PieChart from "./charts/PieChart";
import { cacheFieldsDefaults, charBoxDefaults } from "./consts";
import {
  DataAndKey,
  FbMessage,
  GraphWrapperCache,
  PieChartObject,
} from "./types";
import {
  formatTimeData,
  formatPersonYearBar,
  formatTotal,
  formatPieChartData,
} from "./utils";

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
  heat: DataAndKey,
  pie: PieChartObject[]
) => (loadedChats[chatKey] = { len, bar, line, heat, pie });

const GraphWrapper = ({ msgData, chatKey }: GraphWrapperProps) => {
  const [currentData, setCurrentData] = useState(cacheFieldsDefaults);
  useEffect(() => {
    if (!loadedChats[chatKey]) {
      const len = formatTotal(msgData.length);
      const bar = formatPersonYearBar(msgData);
      const [line, heat] = formatTimeData(msgData);
      const pie = formatPieChartData(msgData);
      addChat(chatKey, len, bar, line, heat, pie);
    }
    setCurrentData(loadedChats[chatKey]);
  }, [chatKey]);
  return (
    <Box
      padding={2}
      width={"100%"}
      height="90%"
      bg="whitesmoke"
      sx={{
        display: "grid",
        gridGap: 3,
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <Heading
        p={3}
        bg="secondary"
        color="lightgray"
        sx={{ gridColumn: "1/span 2" }}
      >
        {`${currentData.len} texts in total`}
      </Heading>
      <Card {...charBoxDefaults}>
        <Heading color="secondary">Throughout the year</Heading>
        <LineChart data={currentData.line} />
      </Card>
      <Card {...charBoxDefaults}>
        <Heading color="secondary"> Texts per person</Heading>
        <BarChart {...currentData.bar} />
      </Card>
      <Card {...charBoxDefaults}>
        <Heading color="secondary">Texts sent by day and hour</Heading>
        <HeatMap {...currentData.heat} />
      </Card>
      <Card {...charBoxDefaults}>
        <Heading color="secondary">Texts types sent</Heading>
        <PieChart data={currentData.pie} />
      </Card>
    </Box>
  );
};

export default GraphWrapper;

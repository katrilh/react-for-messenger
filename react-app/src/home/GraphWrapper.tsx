import { Serie } from "@nivo/line";
import React, { useEffect, useState } from "react";
import { Box, Card, Heading } from "rebass/styled-components";
import BarChart from "./charts/BarChart";
import HeatMap from "./charts/HeatMap";
import LineChart from "./charts/LineChart";
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
  formatDayByYear,
} from "./utils";

interface GraphWrapperProps {
  msgData: FbMessage[];
  chatKey: string;
}

const loadedChats: GraphWrapperCache = {};

const addChat = (
  chatKey: string,
  len: string,
  pers: DataAndKey,
  line: Serie[],
  heat: DataAndKey,
  pie: PieChartObject[],
  days: DataAndKey
) => (loadedChats[chatKey] = { len, pers, line, heat, pie, days });

const GraphWrapper = ({ msgData, chatKey }: GraphWrapperProps) => {
  const [currentData, setCurrentData] = useState(cacheFieldsDefaults);
  useEffect(() => {
    if (!loadedChats[chatKey]) {
      const len = formatTotal(msgData.length);
      const pers = formatPersonYearBar(msgData);
      const [line, heat] = formatTimeData(msgData);
      const pie = formatPieChartData(msgData);
      const days = formatDayByYear(msgData);
      addChat(chatKey, len, pers, line, heat, pie, days);
    }
    setCurrentData(loadedChats[chatKey]);
  }, [chatKey]);
  return (
    <Box
      padding={2}
      width={"100%"}
      height="90%"
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
        <BarChart groupMode="grouped" theme="accent" {...currentData.pers} />
      </Card>
      <Card {...charBoxDefaults}>
        <Heading color="secondary">Texts sent by day and hour</Heading>
        <HeatMap {...currentData.heat} />
      </Card>
      <Card {...charBoxDefaults}>
        <Heading color="secondary"> Days with texts per year</Heading>
        <BarChart legend={false} theme="set2" {...currentData.days} />
      </Card>
      <Card {...charBoxDefaults}>
        <Heading color="secondary">Texts types sent</Heading>
        <PieChart data={currentData.pie} />
      </Card>
    </Box>
  );
};

export default GraphWrapper;

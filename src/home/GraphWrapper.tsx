import React from "react";
import { Box, Text, Card } from "rebass/styled-components";
import BarChart from "./charts/BarChart";
import { dayHourInit, range } from "./charts/consts";
import HeatMap from "./charts/HeatMap";
// import LineChart from "./charts/Linechart";
import { DataAndKey, FbMessage } from "./types";

interface GraphWrapperProps {
  msgData: FbMessage[];
}

const formatPersonYearBar = (msgs: FbMessage[]): DataAndKey => {
  let byYear: Record<number, Record<string, number>> = {};
  let keys = new Set<string>();

  msgs.map(({ sender_name, date }) => {
    const sendYear = date.getFullYear();
    if (!byYear[sendYear]) {
      byYear[sendYear] = {};
    }
    if (!byYear[sendYear][sender_name]) {
      byYear[sendYear][sender_name] = 1;
      keys.add(sender_name);
    } else {
      byYear[sendYear][sender_name]++;
    }
  });
  const personByYear = Object.entries(byYear).map(([year, obj]) => ({
    id: year.toString(),
    ...obj,
  }));
  return { data: personByYear, keys: Array.from(keys) };
};

const formatDayHourHeatMap = (msgs: FbMessage[]): DataAndKey => {
  let byDay = dayHourInit();
  let keys = range(0, 23);
  msgs.map(({ date }) => {
    byDay[date.toLocaleDateString(undefined, { weekday: "short" })][
      date.getHours()
    ]++;
  });
  // TODO - write a for loop
  const hourByDay = Object.entries(byDay).map(([day, obj]) => {
    return {
      id: day,
      ...obj,
    };
  });

  return { data: hourByDay, keys: keys.map(String) };
};

const GraphWrapper = ({ msgData }: GraphWrapperProps) => {
  return (
    <Card padding={4} width={"100%"} height="90%">
      <BarChart {...formatPersonYearBar(msgData)} />
      <hr />
      <HeatMap {...formatDayHourHeatMap(msgData)} minValue={1} />
    </Card>
  );
};

export default GraphWrapper;

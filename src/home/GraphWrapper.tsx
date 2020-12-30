import React from "react";
import { Box, Text, Card } from "rebass/styled-components";
import BarChart from "./charts/BarChart";
import LineChart from "./charts/Linechart";
// import { dummyBarData, dummyKeys, dummyLineData } from "./dummydata";
import { DataAndKey, DataObject, FbMessage } from "./types";

interface GraphWrapperProps {
  msgData: FbMessage[];
}

const formatBarData = (msgs: FbMessage[]): DataAndKey => {
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

const GraphWrapper = ({ msgData }: GraphWrapperProps) => {
  const { data, keys } = formatBarData(msgData);
  return (
    <Card padding={4} width={"80%"} height="90%">
      <BarChart data={data} keys={keys} />
      <hr />
    </Card>
  );
};

export default GraphWrapper;

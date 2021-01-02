import { Serie } from "@nivo/line";
import React from "react";
import { Card } from "rebass/styled-components";
import BarChart from "./charts/BarChart";
import { dayHourInit, monthNames, range } from "./charts/consts";
import HeatMap from "./charts/HeatMap";
import LineChart from "./charts/Linechart";
import { DataAndKey, DataObject, FbMessage } from "./types";

interface GraphWrapperProps {
  msgData: FbMessage[];
}

const formatPersonYearBar = (msgs: FbMessage[]): DataAndKey => {
  const byYear: Record<number, Record<string, number>> = {};
  const keys = new Set<string>();

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

  const personByYear: DataObject[] = [];
  for (const year in byYear) {
    // @ts-ignore
    byYear[year]["id"] = year;
    personByYear.push(byYear[year]);
  }

  return { data: personByYear, keys: Array.from(keys) };
};

const formatTimeData = (msgs: FbMessage[]): [DataAndKey, Serie[]] => {
  const byDay = dayHourInit();
  const byYear: Record<number, Record<number, number>> = {};

  for (let i = 0; i < msgs.length; i++) {
    const date = msgs[i].date;
    const sendYear = date.getFullYear();
    const sendMonth = date.getMonth();

    if (!byYear[sendYear]) {
      byYear[sendYear] = {};
    }
    if (!byYear[sendYear][sendMonth]) {
      byYear[sendYear][sendMonth] = 1;
    } else {
      byYear[sendYear][sendMonth]++;
    }

    byDay[date.toLocaleDateString(undefined, { weekday: "short" })][
      date.getHours()
    ]++;
  }

  const hourByDay: DataObject[] = [];
  for (const day in byDay) {
    // @ts-ignore
    byDay[day]["id"] = day;
    hourByDay.push(byDay[day]);
  }

  const monthByYear: Serie[] = [];
  for (const year in byYear) {
    let temp: Serie = { id: year, data: new Array(12) };
    for (let monthIdx = 0; monthIdx < 12; monthIdx++) {
      temp.data[monthIdx] = {
        x: monthNames[monthIdx],
        y: byYear[year][monthIdx] ?? 0,
      };
    }
    monthByYear.push(temp);
  }
  return [{ data: hourByDay, keys: range(0, 23).map(String) }, monthByYear];
};

const GraphWrapper = ({ msgData }: GraphWrapperProps) => {
  const [heatmap, linechart] = formatTimeData(msgData);
  return (
    <Card padding={4} width={"100%"} height="90%">
      <BarChart title="No. texts by person" {...formatPersonYearBar(msgData)} />
      <hr />
      <LineChart title="Texts throughout the years" data={linechart} />
      <hr />
      <HeatMap title="Heatmap of texts sent by day and hour" {...heatmap} />
      <hr />
    </Card>
  );
};

export default GraphWrapper;

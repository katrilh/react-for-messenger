import React from "react";
import { IndexByFunc, ResponsiveBar } from "@nivo/bar";
import { DataObject } from "../types";
import { axiesDefault } from "./consts";

interface BarChartProps {
  data: DataObject[];
  keys?: string[];
  indexBy?: string | IndexByFunc;
  xLabel?: string;
  yLabel?: string;
}

const BarChart = ({ data, keys, indexBy, xLabel, yLabel }: BarChartProps) => (
  <div style={{ height: 350, width: "100%" }}>
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy={indexBy}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      groupMode="grouped"
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisBottom={axiesDefault(xLabel)}
      axisLeft={axiesDefault(yLabel)}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate={false}
    />
  </div>
);

export default BarChart;

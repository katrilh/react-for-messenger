import React from "react";
import { IndexByFunc, ResponsiveBar } from "@nivo/bar";
import { Heading } from "rebass/styled-components";
import { DataObject } from "../types";
import {
  axiesDefault,
  CHART_HEIGHT,
  legendDefaults,
  margindefault,
} from "./consts";

interface BarChartProps {
  title?: string;
  data: DataObject[];
  keys?: string[];
  indexBy?: string | IndexByFunc;
  xLabel?: string;
  yLabel?: string;
}

const BarChart = ({
  title,
  data,
  keys,
  indexBy,
  xLabel,
  yLabel,
}: BarChartProps) => (
  <div style={{ height: CHART_HEIGHT, width: "100%" }}>
    <Heading>{title}</Heading>
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy={indexBy}
      margin={margindefault}
      padding={0.3}
      colors={{ scheme: "dark2" }}
      groupMode="grouped"
      axisBottom={axiesDefault(xLabel, 36)}
      axisLeft={axiesDefault(yLabel, -40)}
      labelSkipWidth={12}
      labelSkipHeight={12}
      legends={[
        {
          ...legendDefaults(),
          dataFrom: "keys",
          symbolSize: 18,
          itemsSpacing: 14,

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

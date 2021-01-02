import React from "react";
import { ResponsiveLine, Serie } from "@nivo/line";
import {
  axiesDefault,
  margindefault,
  legendDefaults,
  CHART_HEIGHT,
} from "./consts";
import { Heading } from "rebass/styled-components";

interface LineChartProps {
  title?: string;
  data: Serie[];
  xLabel?: string;
  yLabel?: string;
}

const LineChart = ({ title, data, xLabel, yLabel }: LineChartProps) => (
  <div style={{ height: CHART_HEIGHT, width: "100%" }}>
    <Heading>{title}</Heading>
    <ResponsiveLine
      data={data}
      margin={margindefault}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      curve="monotoneX"
      useMesh
      colors={{ scheme: "dark2" }}
      yFormat=" >-"
      axisBottom={axiesDefault(xLabel, 36)}
      axisLeft={axiesDefault(yLabel, -40)}
      pointSize={5}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      legends={[
        {
          ...legendDefaults(),
          symbolSize: 12,
          itemDirection: "top-to-bottom",
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
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

export default LineChart;

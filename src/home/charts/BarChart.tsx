import { ResponsiveBar } from "@nivo/bar";
import { charBoxDefaults } from "../consts";
import { DataObject } from "../types";
import { axiesDefault, legendDefaults, margindefault } from "./consts";

interface BarChartProps {
  data: DataObject[];
  keys?: string[];
  indexBy?: string;
  xLabel?: string;
  yLabel?: string;
}

const BarChart = ({ data, keys, indexBy, xLabel, yLabel }: BarChartProps) => (
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
    labelSkipWidth={15}
    labelSkipHeight={12}
    legends={[
      {
        ...legendDefaults(),
        dataFrom: "keys",
        anchor: "right",
        direction: "column",
        symbolSize: 18,
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
);

export default BarChart;

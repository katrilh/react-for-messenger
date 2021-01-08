import { ResponsiveBar } from "@nivo/bar";
import { charBoxDefaults } from "../consts";
import { DataObject } from "../types";
import { axiesDefault, legendDefaults, margindefault } from "./consts";

interface BarChartProps {
  data: DataObject[];
  keys?: string[];
  xLabel?: string;
  yLabel?: string;
  groupMode?: "grouped" | "stacked";
  legend?: boolean;
}

const BarChart = ({
  data,
  keys,
  xLabel,
  yLabel,
  groupMode,
  legend = true,
}: BarChartProps) => (
  <ResponsiveBar
    data={data}
    keys={keys}
    margin={margindefault}
    padding={0.3}
    colors={{ scheme: "dark2" }}
    groupMode={groupMode}
    axisBottom={axiesDefault(xLabel, 36)}
    axisLeft={axiesDefault(yLabel, -40)}
    labelSkipWidth={20}
    labelSkipHeight={10}
    legends={
      legend
        ? [
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
          ]
        : undefined
    }
    animate={false}
  />
);

export default BarChart;

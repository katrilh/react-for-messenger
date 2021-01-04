import { ResponsiveLine, Serie } from "@nivo/line";
import { axiesDefault, margindefault, legendDefaults } from "./consts";

interface LineChartProps {
  data: Serie[];
  xLabel?: string;
  yLabel?: string;
}

const LineChart = ({ data, xLabel, yLabel }: LineChartProps) => (
  <ResponsiveLine
    data={data}
    margin={margindefault}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: false,
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
    enableSlices="x"
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
);

export default LineChart;

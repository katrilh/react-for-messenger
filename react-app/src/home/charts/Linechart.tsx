import { ResponsiveLine, Serie } from "@nivo/line";
import { axisDefault, marginDefault, legendDefaults } from "./consts";

interface LineChartProps {
  data: Serie[];
  xLabel?: string;
  yLabel?: string;
}

const LineChart = ({ data, xLabel, yLabel }: LineChartProps) => (
  <ResponsiveLine
    data={data}
    margin={marginDefault}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: false,
      reverse: false,
    }}
    curve="monotoneX"
    lineWidth={3}
    useMesh
    colors={{ scheme: "set2" }}
    yFormat=" >-"
    axisBottom={axisDefault(xLabel, 36)}
    axisLeft={axisDefault(yLabel, -40)}
    pointSize={6}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    enableSlices="x"
    legends={[
      {
        ...legendDefaults(),
        anchor: "top-right",
        direction: "row",
        translateX: 0,
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

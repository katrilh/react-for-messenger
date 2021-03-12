import { ResponsivePie } from "@nivo/pie";
import { PieChartObject } from "../types";
import { legendDefaults, marginDefault } from "./consts";

interface PieChartProps {
  data: PieChartObject[];
}

const PieChart = ({ data }: PieChartProps) => (
  <ResponsivePie
    data={data}
    margin={marginDefault}
    startAngle={-90}
    endAngle={90}
    innerRadius={0.4}
    padAngle={1.5}
    cornerRadius={1}
    sortByValue
    colors={{ scheme: "pastel2" }}
    borderWidth={3}
    borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
    radialLabel={(d) => `${d.label}: ${d.value}`}
    enableSliceLabels={false}
    legends={[
      {
        ...legendDefaults(),
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);

export default PieChart;

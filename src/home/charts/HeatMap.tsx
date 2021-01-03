import { ResponsiveHeatMap } from "@nivo/heatmap";
import { DataObject } from "../types";
import { margindefault } from "./consts";

interface HeatMapProps {
  data: DataObject[];
  keys?: string[];
}

const HeatMap = ({ data, keys }: HeatMapProps) => (
  <ResponsiveHeatMap
    data={data}
    keys={keys}
    margin={margindefault}
    padding={0.3}
    colors="RdPu"
    axisTop={{
      orient: "top",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: -90,
      legend: "",
      legendOffset: 36,
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendPosition: "middle",
      legendOffset: -40,
    }}
    hoverTarget="cell"
    animate={false}
  />
);

export default HeatMap;

import { ResponsiveHeatMap } from "@nivo/heatmap";
import { Heading } from "rebass/styled-components";
import { DataObject } from "../types";
import { CHART_HEIGHT, margindefault } from "./consts";

interface HeatMapProps {
  title?: string;
  data: DataObject[];
  keys?: string[];
}

const HeatMap = ({ title, data, keys }: HeatMapProps) => (
  <div style={{ height: CHART_HEIGHT, width: "100%" }}>
    <Heading>{title}</Heading>
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
  </div>
);

export default HeatMap;

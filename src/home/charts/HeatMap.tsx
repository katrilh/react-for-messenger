import { IndexByFunc, ResponsiveHeatMap } from "@nivo/heatmap";
import { DataObject } from "../types";

interface HeatMapProps {
  data: DataObject[];
  keys?: string[];
  minValue?: number;
}

const HeatMap = ({ data, keys, minValue }: HeatMapProps) => (
  <div style={{ height: 350, width: "100%" }}>
    <ResponsiveHeatMap
      data={data}
      keys={keys}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      minValue={minValue}
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
      animate={false}
    />
  </div>
);

export default HeatMap;

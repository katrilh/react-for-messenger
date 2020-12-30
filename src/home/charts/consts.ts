import { AxisProps } from "@nivo/axes";

export const axiesDefault = (label?: string): AxisProps => ({
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legend: [label],
  legendPosition: "middle",
  legendOffset: 32,
});

import { AxisProps } from "@nivo/axes";
import { Margin } from "@nivo/core";
import { LegendProps } from "@nivo/legends";
import { shortWeekdays } from "../consts";

export const marginDefault: Margin = {
  top: 70,
  right: 50,
  bottom: 50,
  left: 60,
};

export const legendDefaults = (): LegendProps => ({
  anchor: "right",
  direction: "column",
  symbolSize: 18,
  justify: false,
  translateX: -20,
  translateY: -35,
  itemsSpacing: 0.3,
  itemOpacity: 0.8,
  itemWidth: 40,
  itemHeight: 20,
  itemDirection: "left-to-right",
});

export const axisDefault = (
  label?: string,
  legendOffset?: number
): AxisProps => ({
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legend: label,
  legendPosition: "middle",
  legendOffset,
});

export const dayHourInit = () => {
  let temp: Record<string, Record<string, number>> = {};
  for (let day of shortWeekdays) {
    temp[day] = {};
    for (let i = 0; i < 24; i++) {
      temp[day][i] = 0;
    }
  }
  return temp;
};

import { AxisProps } from "@nivo/axes";
import { Margin } from "@nivo/core";
import { LegendProps } from "@nivo/legends";

export const CHART_HEIGHT = 300;

export const margindefault: Margin = {
  top: 70,
  right: 60,
  bottom: 50,
  left: 60,
};

export const legendDefaults = (): LegendProps => ({
  anchor: "top-right",
  direction: "row",
  justify: false,
  translateX: 0,
  translateY: -25,
  itemsSpacing: 1,
  itemOpacity: 0.8,
  itemWidth: 110,
  itemHeight: 20,
  itemDirection: "left-to-right",
});

export const axiesDefault = (
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

export const shortWeekdays: string[] = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

export const monthNames: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

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

export const range = (start: number, stop: number, step: number = 1) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

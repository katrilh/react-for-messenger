import { AxisProps } from "@nivo/axes";

export const axiesDefault = (label?: string): AxisProps => ({
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legend: [label],
  legendPosition: "middle",
  legendOffset: 32,
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

export const dayHourInit = () => {
  let temp: Record<string, Record<string | number, number>> = {};
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

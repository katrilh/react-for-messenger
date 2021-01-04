import { CacheFields, DataAndKey, PieChartObject } from "./types";

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

export const charBoxDefaults = {
  p: 0,
  height: 330,
  width: "100%",
  my: "10px",
  py: "10px",
  bg: "whitesmoke",
};

const DataAndKeyDefault: DataAndKey = { data: [], keys: [] };
const PieChartDefault: PieChartObject = { id: "", label: "", value: 0 };

export const cacheFieldsDefaults: CacheFields = {
  len: "",
  bar: DataAndKeyDefault,
  line: [],
  heat: DataAndKeyDefault,
  pie: [PieChartDefault],
};

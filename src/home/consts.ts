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
  pers: DataAndKeyDefault,
  line: [],
  heat: DataAndKeyDefault,
  pie: [PieChartDefault],
  days: DataAndKeyDefault,
};

import { CacheFields, DataAndKey } from "./types";

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
  height: 300,
  width: "100%",
};

const DataAndKeyDefault: DataAndKey = { data: [], keys: [] };

export const cacheFieldsDefaults: CacheFields = {
  len: "",
  bar: DataAndKeyDefault,
  line: [],
  heat: DataAndKeyDefault,
};

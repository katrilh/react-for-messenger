import { Serie } from "@nivo/line";
import { dayHourInit } from "./charts/consts";
import { monthNames } from "./consts";
import { FbMessage, DataAndKey, DataObject } from "./types";

export const range = (start: number, stop: number, step: number = 1) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

export const formatPersonYearBar = (msgs: FbMessage[]): DataAndKey => {
  const byYear: Record<number, Record<string, number>> = {};
  const keys = new Set<string>();

  msgs.map(({ sender_name, date }) => {
    const sendYear = date.getFullYear();
    if (!byYear[sendYear]) {
      byYear[sendYear] = {};
    }
    if (!byYear[sendYear][sender_name]) {
      byYear[sendYear][sender_name] = 1;
      keys.add(sender_name);
    } else {
      byYear[sendYear][sender_name]++;
    }
  });

  const personByYear: DataObject[] = [];
  for (const year in byYear) {
    // @ts-ignore
    byYear[year]["id"] = year;
    personByYear.push(byYear[year]);
  }

  return { data: personByYear, keys: Array.from(keys) };
};

export const formatTimeData = (msgs: FbMessage[]): [DataAndKey, Serie[]] => {
  const byDay = dayHourInit();
  const byYear: Record<number, Record<number, number>> = {};

  for (let i = 0; i < msgs.length; i++) {
    const date = msgs[i].date;
    const sendYear = date.getFullYear();
    const sendMonth = date.getMonth();

    if (!byYear[sendYear]) {
      byYear[sendYear] = {};
    }
    if (!byYear[sendYear][sendMonth]) {
      byYear[sendYear][sendMonth] = 1;
    } else {
      byYear[sendYear][sendMonth]++;
    }

    byDay[date.toLocaleDateString(undefined, { weekday: "short" })][
      date.getHours()
    ]++;
  }

  const hourByDay: DataObject[] = [];
  for (const day in byDay) {
    // @ts-ignore
    byDay[day]["id"] = day;
    hourByDay.push(byDay[day]);
  }

  const monthByYear: Serie[] = [];
  for (const year in byYear) {
    let temp: Serie = { id: year, data: new Array(12) };
    for (let monthIdx = 0; monthIdx < 12; monthIdx++) {
      temp.data[monthIdx] = {
        x: monthNames[monthIdx],
        y: byYear[year][monthIdx] ?? 0,
      };
    }
    monthByYear.push(temp);
  }
  return [{ data: hourByDay, keys: range(0, 23).map(String) }, monthByYear];
};

import { Serie } from "@nivo/line";
import { dayHourInit } from "./charts/consts";
import { monthNames } from "./consts";
import { FbMessage, DataAndKey, DataObject, PieChartObject } from "./types";

export const formatTimestamp = (ts_ms: number | Date): Date => new Date(ts_ms);

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

export const formatTimeData = (msgs: FbMessage[]): [Serie[], DataAndKey] => {
  const byDay = dayHourInit();
  const byYear: Record<number, Record<number, number>> = {};

  for (let i = 0; i < msgs.length; i++) {
    const date = msgs[i].date;
    const sendYear = date.getFullYear();
    const sendMonth = date.getMonth();

    if (!byYear[sendYear]) {
      byYear[sendYear] = {};
    }
    byYear[sendYear][sendMonth]
      ? byYear[sendYear][sendMonth]++
      : (byYear[sendYear][sendMonth] = 1);

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
  return [monthByYear, { data: hourByDay, keys: range(0, 23).map(String) }];
};

export const formatPieChartData = (msgs: FbMessage[]): PieChartObject[] => {
  const byType: Record<string, number> = {};
  msgs.map(({ type }) => {
    byType[type] ? byType[type]++ : (byType[type] = 1);
  });
  const typeAsPie: PieChartObject[] = [];
  for (const type in byType) {
    typeAsPie.push({
      id: type,
      label: type,
      value: byType[type],
    });
  }
  return typeAsPie;
};

export const formatTotal = (total: number): string => {
  const temp = total.toString().split("").reverse().join("");
  let tot = "";
  for (let i = 0; i < temp.length; i++) {
    if (i % 3 === 0) {
      tot = " " + tot;
    }
    tot = temp[i] + tot;
  }
  return tot;
};

const daysArray = (days: number): number[] => new Array(days).fill(0);
const isLeapYear = (year: number): boolean =>
  (year & 3) == 0 && (year % 25 != 0 || (year & 15) == 0);

const dayNo = (y: number, m: number, d: number): number =>
  --m * 31 -
  (m > 1
    ? ((1054267675 >> (m * 3 - 6)) & 7) -
      (y & 3 || (!(y % 25) && y & 15) ? 0 : 1)
    : 0) +
  d;

export const formatDayByYear = (msgs: FbMessage[]): DataAndKey => {
  const textingDays: Record<number, number[]> = {};
  msgs.map(({ date }) => {
    const year = date.getFullYear();
    if (!textingDays[year]) {
      textingDays[year] = isLeapYear(year) ? daysArray(366) : daysArray(365);
    }
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const idx = dayNo(year, month, day) - 1;
    textingDays[year][idx]++;
  });
  const daysByYear: DataObject[] = [];
  const keys: string[] = [];

  for (const year in textingDays) {
    daysByYear.push({
      id: year,
      [year]: textingDays[year].filter(Boolean).length,
    });
    keys.push(year);
  }

  return { data: daysByYear, keys };
};

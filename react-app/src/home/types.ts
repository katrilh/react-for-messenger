import { Serie } from "@nivo/line";

export interface FbMessageObject {
  [key: string]: FbMessage[];
}

export interface FbMessage {
  sender_name: string;
  date: Date;
  type: string;
}
export interface DataObject {
  [key: string]: string | number;
}
[];

export interface DataAndKey {
  data: DataObject[];
  keys: string[];
}

export interface PieChartObject {
  id: string;
  label: string;
  value: number;
}

export interface GraphWrapperCache {
  [key: string]: CacheFields;
}
export interface CacheFields {
  len: string;
  pers: DataAndKey;
  line: Serie[];
  heat: DataAndKey;
  pie: PieChartObject[];
  days: DataAndKey;
}

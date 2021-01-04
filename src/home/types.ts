import { Serie } from "@nivo/line";

export interface RawFbFile {
  participants: {
    name: string;
  }[];
  messages: RawFbMessage[];
  title: string;
}

export interface RawFbMessage {
  sender_name: string;
  timestamp_ms: number;
  type: string;
}

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

export interface GraphWrapperCache {
  [key: string]: CacheFields;
}
export interface CacheFields {
  len: string;
  bar: DataAndKey;
  line: Serie[];
  heat: DataAndKey;
}

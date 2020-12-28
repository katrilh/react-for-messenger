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

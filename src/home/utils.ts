import { FbMessage, FbMessageObject, RawFbFile, RawFbMessage } from "./types";

const chats: string[] = [
  "AdamGaidi_xxLY7ve1kw",
  "AndersHovden_L68rDhHhYA",
  "AsmundAqissiaqKlovstad_dvdpmcXrzw",
  "bitByteBitwGSHN_ofRkY94row",
  "dickallcock_CEcxw9nKIA",
  "MiriamFinjord_wioVTCMHTg",
  "OivindAlbrigtsen_LDoG2ODG6A",
];

const importDataFromFile = (chat: string, idx = 1) => {
  let content: RawFbFile = require(`../datafiles/${chat}/message_${idx}.json`);
  let loop = content.messages.length == 10000;
  while (loop) {
    const moreMsg = require(`../datafiles/${chat}/message_${idx++}.json`)
      .messages;
    loop = moreMsg.length == 10000;
    content.messages.push(...moreMsg);
  }
  return content;
};

const formatRawFbMessage = (input: RawFbMessage[]): FbMessage[] =>
  input.map(({ sender_name, timestamp_ms, type }) => {
    return { sender_name, date: new Date(timestamp_ms), type };
  });

export const intialLoadAll = () => {
  let temp: FbMessageObject = {};
  for (let c of chats) {
    let { title, messages } = importDataFromFile(c);
    temp[title] = formatRawFbMessage(messages);
  }
  return temp;
};

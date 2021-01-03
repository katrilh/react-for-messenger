import { FbMessage, FbMessageObject, RawFbFile, RawFbMessage } from "./types";

const chats: string[] = [
  "adamgaidi_xxly7ve1kw",
  "andershovden_l68rdhhhya",
  "asmundaqissiaqklovstad_dvdpmcxrzw",
  "bitbytebitwgshn_ofrky94row",
  "dickallcock_cecxw9nkia",
  "henriettekoolen_0dynefwwog",
  "melonpan_jg-5bu0law",
  "miriamfinjord_wiovtcmhtg",
  "oivindalbrigtsen_ldog2odg6a",
  "semiprostrippers_90wc6tyxpw",
  "soft_uvo_rcmpka",
  "speedyblubblubdiblubandfast_6i19ka21va",
  "theatokstad_ekxqyivyja",
  "thebestamongus_8kghvj9pww",
  "xcom19_tq6epsbhpq",
  "xcomtur_4q_1rvzshg",
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

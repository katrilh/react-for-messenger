# -*- coding: utf-8 -*-

import os
import io
import json
from datetime import datetime


def load_all_chats(dir_lst):
    def prettier_str(string):
        return string.encode('latin1').decode('utf8')

    def format_msg_lst(msg_lst):
        return [{"sender_name": prettier_str(m["sender_name"]),
                 "date": m["timestamp_ms"],
                 "type": m["type"]}
                for m in msg_lst]

    def load_json(base_path, _idx):
        base_path += str(_idx) + '.json'
        with io.open(base_path, "r",  encoding='utf8') as f:
            temp = json.loads(f.read())
        return {"title": temp["title"], "messages": temp["messages"]} if _idx == 1 else temp["messages"]

    def load_one_chat(chat):
        idx = 1
        base_path = f"datafiles/{chat}/message_"
        file_content_dict = load_json(base_path, idx)
        loop = len(file_content_dict["messages"]) == 10000
        while loop:
            idx += 1
            more_msg = load_json(base_path, idx)
            file_content_dict["messages"].extend(more_msg)
            loop = len(more_msg) == 10000

        return file_content_dict

    return {prettier_str(content["title"]):
            format_msg_lst(content["messages"]) for content in map(load_one_chat, dir_lst)}


if __name__ == '__main__':
    ll = ('achatof4bis_dfkd5fvq3w', 'adamgaidi_xxly7ve1kw', 'andershovden_l68rdhhhya', 'asmundaqissiaqklovstad_dvdpmcxrzw', 'bitbytebitwgshn_ofrky94row', 'dickallcock_cecxw9nkia', 'henriettekoolen_0dynefwwog', 'ingridfossa_8aene-1tpa', 'karantrening_qd5ds_u-fa', 'karolinelieholm_s8neosw_oa',
          'katrinelieholm_n549ayqjyw', 'melonpan_jg-5bu0law', 'miriamfinjord_wiovtcmhtg', 'oivindalbrigtsen_ldog2odg6a', 'semiprostrippers_90wc6tyxpw', 'soft_uvo_rcmpka', 'speedyblubblubdiblubandfast_6i19ka21va', 'thebestamongus_8kghvj9pww', 'xcom19_tq6epsbhpq', 'xcomtur_4q_1rvzshg')

    for (k, v) in load_all_chats(ll).items():
        print(len(v), k, v[0], sep='\t\t')

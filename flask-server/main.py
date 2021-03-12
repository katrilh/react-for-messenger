# -*- coding: utf-8 -*-
import os
from flask import Flask
from flask_cors import CORS  # cross_origin
from fileloader import load_all_chats


app = Flask(__name__)
CORS(app)


@app.route('/init')
def init_load():
    return load_all_chats(tuple(filter(lambda x: x != '.gitkeep',
                                       os.listdir('datafiles'))))

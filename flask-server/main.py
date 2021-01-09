# -*- coding: utf-8 -*-

import time
from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


@app.route('/hello')
@cross_origin(origin='*')
def say_hello_world():
    return {'hi': "Hello åæø", 'time': time.time()}

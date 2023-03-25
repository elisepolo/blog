from flask import Flask, request, jsonify, session
from json import *
from flask_cors import CORS
from flask_login import *


app = Flask(__name__)
CORS(app, supports_credentials=True)
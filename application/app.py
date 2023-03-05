from dataclasses import dataclass

import requests
from flask import Flask
from flask import Response as FlaskResponse
from flask import json, request
from flask_cors import CORS
from get_params import (
    get_course_params,
    get_event_params,
    get_player_params,
    get_player_statistics_params,
)
from requests import Response

app = Flask(__name__)
CORS(app)

cors_header = {"Access-Control-Allow-Origin": "*"}
BASE_API = "https://api.pdga.com/services/json"


@app.route("/")
def home():
    return "ok"


@app.get("/top-ten")
def top_ten() -> FlaskResponse:
    pass


@app.get("/disc-game")
def disc_game() -> FlaskResponse:
    letter: str = request.args.get("letter")
    disc_names = []
    if letter == "A":
        discs = [
            "anex",
            "ape",
            "aviar",
            "a1",
            "a2",
            "a3",
            "a4",
            "a5",
            "abyss",
            "ace",
            "addax",
            "adventure",
            "aero",
            "ahti",
        ]
        disc_names = discs
    data = DiscGameData(letter, disc_names, "23/1/2023")

    response: FlaskResponse = FlaskResponse(
        response=json.dumps(data), headers=cors_header
    )
    return response


@dataclass
class DiscGameData:
    letter: str
    disc_names: list
    last_modified: str

    def __init__(self, letter: str, disc_names: list, last_modified: str):
        self.letter = letter
        self.disc_names = disc_names
        self.last_modified = last_modified


if __name__ == "__main__":
    app.run(port=5000)


@dataclass
class LoginResponse:
    sessid: str
    session_name: str
    token: str


# @app.before_first_request
# def setup() -> None:
#     url = "https://api.pdga.com/services/json/user/login"
#     body = {"username": "anton sawka 211169", "password": "passwprd"}
#     response: Response = requests.post(
#         url,
#         data=body,
#     )
#     result = response.json()

#     global sessid
#     sessid = result["sessid"]
#     global session_name
#     session_name = result["session_name"]
#     global token
#     token = result["token"]
#     global pdga_header
#     pdga_header = {"Cookie": f"{session_name}={sessid}"}

# @app.get("/players")
# def players() -> FlaskResponse:
#     query_param_dict = get_player_params()

#     response: Response = requests.get(
#         BASE_API + "/players",
#         headers=pdga_header,
#         params=query_param_dict,
#     )

#     result = response.json()

#     try:
#         players = result["players"]
#     except Exception:
#         players = {}
#     response: FlaskResponse = FlaskResponse(
#         response=json.dumps(players), headers=cors_header
#     )
#     return response


# @app.get("/player-statistics")
# def player_statistics() -> FlaskResponse:
#     query_param_dict = get_player_statistics_params()
#     response: Response = requests.get(
#         BASE_API + "/player-statistics",
#         headers=pdga_header,
#         params=query_param_dict,
#     )
#     result = response.json()

#     try:
#         player_statistics = result["player-statistics"]
#     except Exception:
#         player_statistics = {}
#     response: FlaskResponse = FlaskResponse(
#         response=json.dumps(player_statistics), headers=cors_header
#     )
#     return response


# @app.get("/events")
# def events():
#     query_param_dict = get_event_params()
#     response: Response = requests.get(
#         BASE_API + "/event", headers=pdga_header, params=query_param_dict
#     )
#     result = response.json()

#     try:
#         events = result["events"]
#     except Exception:
#         events = {}
#     response: FlaskResponse = FlaskResponse(
#         response=json.dumps(events), headers=cors_header
#     )
#     return response


# @app.get("/courses")
# def courses():
#     query_param_dict = get_course_params()
#     response: Response = requests.get(
#         BASE_API + "/course",
#         headers=pdga_header,
#         params=query_param_dict,
#     )
#     result = response.json()

#     try:
#         courses = result["courses"]
#     except Exception:
#         courses = {}
#     response: FlaskResponse = FlaskResponse(
#         response=json.dumps(courses), headers=cors_header
#     )
#     return response

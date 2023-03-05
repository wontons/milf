from typing import Dict
from flask import request


def get_player_params() -> Dict[str, str]:
    pdga_number = request.args.get("pdga_number")
    first_name = request.args.get("first_name", None)
    last_name = request.args.get("last_name", None)
    _class = request.args.get("class", None)
    city = request.args.get("city", None)
    state_prov = request.args.get("state_prov", None)
    country = request.args.get("country", None)
    last_modified = request.args.get("last_modified", None)
    limit = request.args.get("limit", None)
    offset = request.args.get("offset", None)

    result: Dict[str, str] = {}

    if pdga_number is not None:
        result["pdga_number"] = pdga_number
    if first_name is not None:
        result["first_name"] = first_name
    if last_name is not None:
        result["last_name"] = last_name
    if _class is not None:
        result["class"] = _class
    if city is not None:
        result["city"] = city
    if state_prov is not None:
        result["state_prov"] = state_prov
    if country is not None:
        result["country"] = country
    if last_modified is not None:
        result["last_modified"] = last_modified
    if limit is not None:
        result["limit"] = limit
    if offset is not None:
        result["offset"] = offset

    return result


def get_player_statistics_params() -> Dict[str, str]:
    year = request.args.get("year", None)
    _class = request.args.get("class", None)
    division_name = request.args.get("", None)
    division_code = request.args.get("", None)
    continent = request.args.get("", None)
    country = request.args.get("country", None)
    state_prov = request.args.get("state_prov", None)
    gender = request.args.get("", None)
    pdga_number = request.args.get("", None)
    last_modified = request.args.get("last_modified", None)

    result: Dict[str, str] = {}

    if year is not None:
        result["year"] = year
    if _class is not None:
        result["class"] = _class
    if division_name is not None:
        result["division_name"] = division_name
    if division_code is not None:
        result["division_code"] = division_code
    if continent is not None:
        result["continent"] = continent
    if country is not None:
        result["country"] = country
    if state_prov is not None:
        result["state_prov"] = state_prov
    if gender is not None:
        result["gender"] = gender
    if pdga_number is not None:
        result["pdga_number"] = pdga_number
    if last_modified is not None:
        result["last_modified"] = last_modified

    return result


def get_event_params() -> Dict[str, str]:
    tournament_id = request.args.get("tournament_id", None)
    event_name = request.args.get("event_name", None)
    start_date = request.args.get("start_date", None)
    end_date = request.args.get("end_date", None)
    country = request.args.get("country", None)
    state = request.args.get("state", None)
    province = request.args.get("province", None)
    tier = request.args.get("tier", None)
    classification = request.args.get("classification", None)

    result: Dict[str, str] = {}

    if tournament_id is not None:
        result["tournament_id"] = tournament_id
    if event_name is not None:
        result["event_name"] = event_name
    if start_date is not None:
        result["start_date"] = start_date
    if end_date is not None:
        result["end_date"] = end_date
    if country is not None:
        result["country"] = country
    if state is not None:
        result["state"] = state
    if province is not None:
        result["province"] = province
    if tier is not None:
        result["tier"] = tier
    if classification is not None:
        result["classification"] = classification

    return result


def get_course_params() -> Dict[str, str]:
    course_name = request.args.get("course_name", None)
    postal_code = request.args.get("postal_code", None)
    city = request.args.get("city", None)
    country = request.args.get("country", None)
    state_prov = request.args.get("state_prov", None)
    latitude = request.args.get("latitude", None)
    longitude = request.args.get("longitude", None)
    course_id = request.args.get("course_id", None)

    result: Dict[str, str] = {}

    if course_name is not None:
        result["course_name"] = course_name
    if postal_code is not None:
        result["postal_code"] = postal_code
    if city is not None:
        result["city"] = city
    if country is not None:
        result["country"] = country
    if state_prov is not None:
        result["state_prov"] = state_prov
    if latitude is not None:
        result["latitude"] = latitude
    if longitude is not None:
        result["longitude"] = longitude
    if course_id is not None:
        result["course_id"] = course_id

    return result

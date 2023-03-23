from flask import Flask, jsonify, request
from flask_cors import CORS
from models import app, db, Park, City, Airport
from schema import city_schema, park_schema, airport_schema
from sqlalchemy import Integer, Column, String, Table, MetaData, Float, JSON, desc
import json

PARKS, CITIES, AIRPORTS = 468, 101, 731

DEFAULT_PAGE_SIZE = 12

@app.route("/")
def home():
    return ""


@app.route("/cities")
def get_cities():
    page = request.args.get("pg")
    sort = request.args.get("sort")

    query = db.session.query(City)

    for filter in City.filters:
        arg = request.args.get(filter)
        if arg is not None:
            query = query.filter(getattr(City, filter) == arg)

    if sort is not None:
        sort_params = sort.split("_")
        sort_attr = getattr(City, sort_params[0])
        asc = (sort_params[1] == "asc")
        query = query.order_by(sort_attr if asc else desc(sort_attr))

    if page is not None:
        query = paginate(query, page)

    result = city_schema.dump(query, many=True)
    return jsonify({"data": result})


@app.route("/airports")
def get_airports():
    page = request.args.get("pg")
    sort = request.args.get("sort")

    query = db.session.query(Airport)

    for filter in Airport.filters:
        arg = request.args.get(filter)
        if arg is not None:
            query = query.filter(getattr(Airport, filter) == arg)

    if sort is not None:
        sort_params = sort.split("_")
        sort_attr = getattr(Airport, sort_params[0])
        asc = (sort_params[1] == "asc")
        query = query.order_by(sort_attr if asc else desc(sort_attr))

    if page is not None:
        query = paginate(query, page)

    result = airport_schema.dump(query, many=True)
    return jsonify({"data": result})


@app.route("/parks")
def get_parks():
    page = request.args.get("pg")
    sort = request.args.get("sort")

    query = db.session.query(Park)

    for filter in Park.filters:
        arg = request.args.get(filter)
        if arg is not None:
            query = query.filter(getattr(Park, filter) == arg)

    if sort is not None:
        sort_params = sort.split("_")
        sort_attr = getattr(Park, sort_params[0])
        asc = (sort_params[1] == "asc")
        query = query.order_by(sort_attr if asc else desc(sort_attr))

    if page is not None:
        query = paginate(query, page)

    result = park_schema.dump(query, many=True)
    return jsonify({"data": result})


@app.route("/city/<int:r_id>")
def get_city(r_id):
    query = db.session.query(City).filter_by(id=r_id)
    result = city_schema.dump(query, many=True)[0]
    return jsonify({"data": result})


@app.route("/airport/<int:r_id>")
def get_airport(r_id):
    query = db.session.query(Airport).filter_by(id=r_id)
    result = airport_schema.dump(query, many=True)[0]
    return jsonify({"data": result})


@app.route("/park/<int:r_id>")
def get_park(r_id):
    query = db.session.query(Park).filter_by(id=r_id)
    result = park_schema.dump(query, many=True)[0]
    return jsonify({"data": result})


@app.route("/search/cities/<string:query>")
def search_cities(query):
    engine = db.create_engine(db_url)
    conn = engine.connect()
    metadata = db.MetaData()

    terms = query.split()
    
    queryCommand = "SELECT * FROM cities WHERE"
    for i in range(0, len(terms)):
        queryCommand += " long_name LIKE '%%{0}%%' OR cost LIKE '%%{0}%%' OR safety LIKE '%%{0}%%' OR population LIKE '%%{0}%%' OR name LIKE '%%{0}%%'".format(terms[i])
        if i < (len(terms) - 1):
            queryCommand += " OR"
    result = conn.execute(queryCommand).fetchall()

    currentCity = {}
    citiesJSON = []

    for row in result:
        currentCity["id"] = row[0]
        currentCity["airbnb_listings"] = row[1]
        currentCity["cost"] = row[2]
        currentCity["hiking_trails"] = row[3]
        currentCity["latitude"] = row[4]
        currentCity["long_name"] = row[5]
        currentCity["longitude"] = row[6]
        currentCity["name"] = row[7]
        currentCity["photo"] = row[8]
        currentCity["population"] = row[9]
        currentCity["rating"] = row[10]
        currentCity["safety"] = row[11]
        currentCity["short_name"] = row[12]
        currentCity["walkability"] = row[13]
        currentCity["nearest_airports"] = row[14]
        currentCity["nearest_parks"] = row[15]
        citiesJSON.append(currentCity)
        currentCity = {}

    return json.dumps(citiesJSON, indent=4)

@app.route("/search/airports/<string:query>")
def search_airports(query):
    engine = db.create_engine(db_url)
    conn = engine.connect()
    metadata = db.MetaData()
    terms = query.split()

    queryCommand = "SELECT * FROM airports WHERE"
    for i in range(0, len(terms)):
        queryCommand += (" name LIKE '%%{0}%%' OR city LIKE '%%{0}%%' OR state LIKE '%%{0}%%' OR address LIKE '%%{0}%%' OR icao_code LIKE '%%{0}%%' OR iata_code LIKE '%%{0}%%' OR phone LIKE '%%{0}%%' OR zip_code LIKE '%%{0}%%'").format(terms[i])
        if i < (len(terms) - 1):
            queryCommand += " OR"
    result = conn.execute(queryCommand).fetchall()

    currentAirport = {}
    airportsJSON = []

    for row in result:
        currentAirport["id"] = row[0]
        currentAirport["address"] = row[1]
        currentAirport["city"] = row[2]
        currentAirport["iata_code"] = row[3]
        currentAirport["icao_code"] = row[4]
        currentAirport["latitude"] = row[5]
        currentAirport["longitude"] = row[6]
        currentAirport["name"] = row[7]
        currentAirport["phone"] = row[8]
        currentAirport["state"] = row[9]
        currentAirport["website"] = row[10]
        currentAirport["zip_code"] = row[11]
        currentAirport["nearest_cities"] = row[12]
        currentAirport["nearest_parks"] = row[13]
        airportsJSON.append(currentAirport)
        currentAirport = {}

    return json.dumps(airportsJSON, indent=4)

@app.route('/search/parks/<string:query>')
def search_parks(query):
    engine = db.create_engine(db_url)
    conn = engine.connect()
    metadata = db.MetaData()
    terms = query.split()

    queryCommand = "SELECT * FROM parks WHERE"
    for i in range(0, len(terms)):
        queryCommand += (" name LIKE '%%{0}%%' OR phone LIKE '%%{0}%%' OR email LIKE '%%{0}%%'").format(terms[i])
        if i < (len(terms) - 1):
            queryCommand += " OR"
    result = conn.execute(queryCommand).fetchall()

    currentPark = {}
    parksJSON = []

    for row in result:
        currentPark["id"] = row[0]
        currentPark["activities"] = row[1]
        currentPark["description"] = row[2]
        currentPark["email"] = row[3]
        currentPark["fee"] = row[4]
        currentPark["latitude"] = row[5]
        currentPark["longitude"] = row[6]
        currentPark["name"] = row[7]
        currentPark["phone"] = row[8]
        currentPark["photos"] = row[9]
        currentPark["states"] = row[10]
        currentPark["topics"] = row[11]
        currentPark["website"] = row[12]
        currentPark["weekdays"] = row[13]
        currentPark["nearest_airports"] = row[14]
        currentPark["nearest_cities"] = row[15]
        parksJSON.append(currentPark)
        currentPark = {}

    return json.dumps(parksJSON, indent=4)


def to_dict(table):
    return {col.name: getattr(table, col.name) for col in table.__table__.columns}


def paginate(query, page_num, page_size=DEFAULT_PAGE_SIZE):
    return query.paginate(page=page_num, per_page=page_size, error_out=False).items


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)


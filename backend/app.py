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


@app.route("/cities/all")
def get_all_cities():
    engine = db.create_engine(db_url)
    conn = engine.connect()
    metadata = db.MetaData()

    cities = db.Table("cities", metadata, autoload=True, autoload_with=engine)
    
    queryCommnand = "SELECT * FROM cities"
    result = conn.execute(queryCommnand).fetchall()

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


@app.route("/airports/all")
def get_all_airports():
    engine = db.create_engine(db_url)
    conn = engine.connect()
    metadata = db.MetaData()

    airports = db.Table("airports", metadata, autoload=True, autoload_with=engine)

    queryCommnand = "SELECT * FROM airports"
    result = conn.execute(queryCommnand).fetchall()

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


@app.route("/parks/all")
def get_all_parks():
    engine = db.create_engine(db_url)
    conn = engine.connect()
    metadata = db.MetaData()

    parks = db.Table("parks", metadata, autoload=True, autoload_with=engine)

    queryCommnand = "SELECT * FROM parks"
    result = conn.execute(queryCommnand).fetchall()

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
    engine = db.create_engine(db_url)
    conn = engine.connect()
    metadata = db.MetaData()
    cities = db.Table("cities", metadata, autoload=True, autoload_with=engine)

    queryCommnand = "SELECT * FROM cities WHERE id = " + str(r_id + 1)
    result = conn.execute(queryCommnand).fetchone()

    city = {}
    city["id"] = result[0]
    city["airbnb_listings"] = result[1]
    city["cost"] = result[2]
    city["hiking_trails"] = result[3]
    city["latitude"] = result[4]
    city["long_name"] = result[5]
    city["longitude"] = result[6]
    city["name"] = result[7]
    city["photo"] = result[8]
    city["population"] = result[9]
    city["rating"] = result[10]
    city["safety"] = result[11]
    city["short_name"] = result[12]
    city["walkability"] = result[13]
    city["nearest_airports"] = result[14]
    city["nearest_parks"] = result[15]
    return json.dumps(city, indent=4)


@app.route("/airport/<int:r_id>")
def get_airport(r_id):
    engine = db.create_engine(db_url)
    conn = engine.connect()
    metadata = db.MetaData()
    airports = db.Table("airports", metadata, autoload=True, autoload_with=engine)

    queryCommnand = "SELECT * FROM airports WHERE id = " + str(r_id + 1)
    row = conn.execute(queryCommnand).fetchone()

    airport = {}
    airport["id"] = row[0]
    airport["address"] = row[1]
    airport["city"] = row[2]
    airport["iata_code"] = row[3]
    airport["icao_code"] = row[4]
    airport["latitude"] = row[5]
    airport["longitude"] = row[6]
    airport["name"] = row[7]
    airport["phone"] = row[8]
    airport["state"] = row[9]
    airport["website"] = row[10]
    airport["zip_code"] = row[11]
    airport["nearest_cities"] = row[12]
    airport["nearest_parks"] = row[13]
    return json.dumps(airport, indent=4)


@app.route("/park/<int:r_id>")
def get_park(r_id):
    engine = db.create_engine(db_url)
    conn = engine.connect()
    metadata = db.MetaData()
    parks = db.Table("parks", metadata, autoload=True, autoload_with=engine)

    queryCommnand = "SELECT * FROM parks WHERE id = " + str(r_id + 1)
    row = conn.execute(queryCommnand).fetchone()

    park = {}
    park["id"] = row[0]
    park["activities"] = row[1]
    park["description"] = row[2]
    park["email"] = row[3]
    park["fee"] = row[4]
    park["latitude"] = row[5]
    park["longitude"] = row[6]
    park["name"] = row[7]
    park["phone"] = row[8]
    park["photos"] = row[9]
    park["states"] = row[10]
    park["topics"] = row[11]
    park["website"] = row[12]
    park["weekdays"] = row[13]
    park["nearest_airports"] = row[14]
    park["nearest_cities"] = row[15]
    return json.dumps(park, indent=4)

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


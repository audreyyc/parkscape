from flask import Flask, jsonify
from flask_cors import CORS
import sqlalchemy as db
from sqlalchemy import Integer, Column, String, Table, MetaData, Float, JSON
import json

PARKS, CITIES, AIRPORTS = 468, 101, 731
db_url = 'mysql://admin:020402020402@idb7-db.cyvindjupys7.us-east-2.rds.amazonaws.com:3306/idb7?charset=utf8'

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Hello World!"

@app.route("/cities/<int:r_page>")
def get_cities(r_page):
    startID = (r_page - 1) * 12 + 1
    endID = r_page * 12

    engine = db.create_engine(db_url)
    conn = engine.connect()
    metadata = db.MetaData()

    cities = db.Table('cities', metadata, autoload=True, autoload_with=engine) 

    queryCommnand = 'SELECT * FROM cities WHERE id BETWEEN ' + str(startID) + ' AND ' + str(endID)
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
    
    return json.dumps(citiesJSON, indent = 4)
                      
    
@app.route("/airports/<int:r_page>")
def get_airports(r_page):
    startID = (r_page - 1) * 12 + 1
    endID = r_page * 12

    engine = db.create_engine(db_url)
    conn = engine.connect()
    metadata = db.MetaData()

    cities = db.Table('airports', metadata, autoload=True, autoload_with=engine) 

    queryCommnand = 'SELECT * FROM airports WHERE id BETWEEN ' + str(startID) + ' AND ' + str(endID)
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
    
    return json.dumps(airportsJSON, indent = 4)

@app.route("/parks/<int:r_page>")
def get_parks(r_page):
    startID = (r_page - 1) * 12 + 1
    endID = r_page * 12

    engine = db.create_engine(db_url)
    conn = engine.connect()
    metadata = db.MetaData()

    parks = db.Table('parks', metadata, autoload=True, autoload_with=engine) 

    queryCommnand = 'SELECT * FROM parks WHERE id BETWEEN ' + str(startID) + ' AND ' + str(endID)
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
    
    return json.dumps(parksJSON, indent = 4)

@app.route("/city/<int:r_id>")
def get_city(r_id):
    engine = db.create_engine(db_url)
    conn = engine.connect()
    metadata = db.MetaData()
    cities = db.Table('cities', metadata, autoload=True, autoload_with=engine) 

    queryCommnand = 'SELECT * FROM cities WHERE id = ' + str(r_id + 1)
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
    return json.dumps(city, indent = 4)

@app.route("/airport/<int:r_id>")
def get_airport(r_id):
    engine = db.create_engine(db_url)
    conn = engine.connect()
    metadata = db.MetaData()
    airports = db.Table('airports', metadata, autoload=True, autoload_with=engine) 

    queryCommnand = 'SELECT * FROM airports WHERE id = ' + str(r_id + 1)
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
    return json.dumps(airport, indent = 4)

@app.route("/park/<int:r_id>")
def get_park(r_id):
    engine = db.create_engine(db_url)
    conn = engine.connect()
    metadata = db.MetaData()
    parks = db.Table('parks', metadata, autoload=True, autoload_with=engine) 

    queryCommnand = 'SELECT * FROM parks WHERE id = ' + str(r_id + 1)
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
    return json.dumps(park, indent = 4)

if __name__=="main":
    app.run()
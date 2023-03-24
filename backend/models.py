from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)
db_url = "mysql://admin:020402020402@idb7-db.cyvindjupys7.us-east-2.rds.amazonaws.com:3306/idb7"
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://admin:020402020402@idb7-db.cyvindjupys7.us-east-2.rds.amazonaws.com:3306/idb7"
db = SQLAlchemy(app)


class City(db.Model):
    __tablename__ = "cities"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    state = db.Column(db.String)
    rating = db.Column(db.Float)
    airbnb_listings = db.Column(db.String)
    short_name = db.Column(db.String)
    photo = db.Column(db.String)
    walkability = db.Column(db.String)
    nearest_parks = db.Column(db.JSON)
    longitude = db.Column(db.Float)
    long_name = db.Column(db.String)
    cost = db.Column(db.Float)
    safety = db.Column(db.Integer)
    hiking_trails = db.Column(db.String)
    latitude = db.Column(db.Float)
    nearest_airports = db.Column(db.JSON)
    population = db.Column(db.Integer)
    filters = {"budget", "safety", "state"}


class Park(db.Model):
    __tablename__ = "parks"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    website = db.Column(db.String)
    activities = db.Column(db.JSON)
    fee = db.Column(db.Float)
    description = db.Column(db.String)
    photos = db.Column(db.JSON)
    nearest_airports = db.Column(db.JSON)
    topics = db.Column(db.JSON)
    weekdays = db.Column(db.JSON)
    longitude = db.Column(db.Float)
    states = db.Column(db.String)
    phone = db.Column(db.String)
    latitude = db.Column(db.Float)
    nearest_cities = db.Column(db.JSON)
    email = db.Column(db.String)
    filters = {"phone", "phone", "state"}


class Airport(db.Model):
    __tablename__ = "airports"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    website = db.Column(db.String)
    city = db.Column(db.String)
    icao_code = db.Column(db.String)
    nearest_parks = db.Column(db.JSON)
    longitude = db.Column(db.Float)
    iata_code = db.Column(db.String)
    phone = db.Column(db.String)
    state = db.Column(db.String)
    address = db.Column(db.String)
    latitude = db.Column(db.Float)
    nearest_cities = db.Column(db.JSON)
    zip_code = db.Column(db.String)
    filters = {"phone", "website", "state"}
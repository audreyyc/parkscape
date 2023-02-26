from flask import Flask
import sqlalchemy as db
from sqlalchemy import Integer, Column, String, Table, MetaData, Float, JSON
import time
import json

db_url = 'mysql://admin:020402020402@idb7-db.cyvindjupys7.us-east-2.rds.amazonaws.com:3306/idb7?charset=utf8'

# Creates a database 
def createDatabase():
    engine = db.create_engine(db_url)
    engine.execute("CREATE DATABASE idb7")
    engine.execute("USE idb7")
    
# Sets up database with required tables
def setupDatabase():
    engine = db.create_engine(db_url)
    conn = engine.connect()
    metadata = db.MetaData()


    # conn.set_character_set('utf8')
    # dbc.execute('SET NAMES utf8;')
    # dbc.execute('SET CHARACTER SET utf8;')
    # dbc.execute('SET character_set_connection=utf8;')

    Cities = Table('cities', metadata,
              Column('id', Integer, primary_key=True),
              Column('airbnb_listings', String(80)),
              Column('cost', Integer),
              Column('hiking_trails', String(150)),
              Column('latitude', Float),
              Column('long_name', String(80)),
              Column('longitude', Float),
              Column('name', String(40)),
              Column('photo', String(150)),
              Column('population', Integer),
              Column('rating', Float),
              Column('safety', Integer),
              Column('short_name', String(40)),
              Column('walkability', String(80)),
              Column("nearest_airports", JSON),
              Column('nearest_parks', JSON)
              )
    
    Airports = Table('airports', metadata,
              Column('id', Integer, primary_key=True),
              Column('address', String(60)),
              Column('city', String(40)),
              Column('iata_code', String(3)),
              Column('icao_code', String(4)),
              Column('latitude', Float),
              Column('longitude', Float),
              Column('name', String(60)),
              Column('phone', String(20)),
              Column('state', String(30)),
              Column('website', String(180)),
              Column('zip_code', String(10)),
              Column("nearest_cities", JSON),
              Column('nearest_parks', JSON)
              )
    
    Parks = Table('parks', metadata,
              Column('id', Integer, primary_key=True),
              Column('activities', JSON),
              Column('description', String(1000)),
              Column('email', String(50)),
              Column('fee', Float),
              Column('latitude', Float),
              Column('longitude', Float),
              Column('name', String(140)),
              Column('phone', String(40)),
              Column('photos', JSON),
              Column('states', String(80)),
              Column('topics', JSON),
              Column('website', String(70)),
              Column('weekdays', JSON),
              Column("nearest_airports", JSON),
              Column('nearest_cities', JSON)
              )
    
    citiesJSON = open("cities.json")
    cities = json.load(citiesJSON)
    for city in cities:
        query = db.insert(Cities).values(id=city["id"]+1, airbnb_listings=city["airbnb_listings"], 
                                         cost=city["cost"], hiking_trails=city["hiking_trails"],
                                         latitude=city["latitude"], long_name=city["long_name"], 
                                         longitude=city["longitude"], name=city["name"], 
                                         photo=city["photo"], population=city["population"],
                                         rating=city["rating"], safety=city["safety"], 
                                         short_name=city["short_name"], walkability=city["walkability"],
                                         nearest_parks=city["nearest_parks"], nearest_airports=city["nearest_airports"])
        Result = conn.execute(query)

    parksJSON = open("parks.json")
    parks = json.load(parksJSON)
    for park in parks:

        description = park["description"]
        description = description.replace('\u2019', '\'')

        # print(description)
        query = db.insert(Parks).values(id=park["id"]+1, activities=park["activities"],
                                        description=description, email=park["email"],
                                        fee=park["fee"], latitude=park["latitude"],
                                        longitude=park["longitude"], name=park["name"],
                                        phone=park["phone"], photos=park["photos"],
                                        states=park["states"], topics=park["topics"],
                                        website=park["website"], weekdays=park["weekdays"],
                                        nearest_airports=park["nearest_ariports"],
                                        nearest_cities=park["nearest_cities"])
        Result = conn.execute(query)

    airportsJSON = open("airports.json")
    airports = json.load(airportsJSON)
    for airport in airports:
        query = db.insert(Airports).values(id=airport["id"]+1, address=airport["address"],
                                           city=airport["city"], iata_code=airport["iata_code"],
                                           icao_code=airport["icao_code"], latitude=airport["latitude"],
                                           longitude=airport["longitude"], name=airport["name"],
                                           nearest_cities=airport["nearest_cities"], nearest_parks=airport["nearest_parks"],
                                           phone=airport["phone"], state=airport["state"],
                                           website=airport["website"], zip_code=airport["zip_code"])
        Result = conn.execute(query)

    metadata.create_all(engine)

if __name__ == "__main__":    
    print("Initializing database...")
    # setupDatabase()
    # createDatabase()
    print("Database initialization complete...")


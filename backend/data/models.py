import json


class Park:
    def __init__(
        self,
        id,
        name,
        description,
        latitude,
        longitude,
        photos,
        phone,
        email,
        website,
        activities,
        topics,
        states,
        weekdays,
        fee,
        nearest_cities,
        nearest_airports,
    ):
        self.id = id
        self.name = name
        self.description = description
        self.latitude = latitude
        self.longitude = longitude
        self.states = states
        self.photos = photos
        self.phone = phone
        self.email = email
        self.website = website
        self.activities = activities
        self.topics = topics
        self.weekdays = weekdays
        self.fee = fee
        self.nearest_cities = nearest_cities
        self.nearest_ariports = nearest_airports


class City:
    def __init__(
        self,
        id,
        name,
        short_name,
        long_name,
        latitude,
        longitude,
        population,
        cost,
        safety,
        rating,
        airbnb_listings,
        walkability,
        hiking_trails,
        nearest_airports,
        nearest_parks,
        photo,
    ):
        self.id = id
        self.name = name
        self.short_name = short_name
        self.long_name = long_name
        self.latitude = latitude
        self.longitude = longitude
        self.population = population
        self.cost = cost
        self.safety = safety
        self.rating = rating
        self.airbnb_listings = airbnb_listings
        self.walkability = walkability
        self.hiking_trails = hiking_trails
        self.nearest_airports = nearest_airports
        self.nearest_parks = nearest_parks
        self.photo = photo


class Airport:
    def __init__(
        self,
        id,
        name,
        iata_code,
        city,
        state,
        icao_code,
        phone,
        address,
        zip_code,
        latitude,
        longitude,
        website,
        nearest_cities,
        nearest_parks,
    ):
        self.id = id
        self.name = name
        self.iata_code = iata_code
        self.city = city
        self.state = state
        self.icao_code = icao_code
        self.phone = phone
        self.address = address
        self.zip_code = zip_code
        self.latitude = latitude
        self.longitude = longitude
        self.website = website
        self.nearest_cities = nearest_cities
        self.nearest_parks = nearest_parks

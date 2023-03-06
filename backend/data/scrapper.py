import requests
from requests.auth import HTTPBasicAuth
import json
import math

from models import Park
from models import City
from models import Airport


class NearbyCity:
    def __init__(self, id, name, distance):
        self.id = id
        self.name = name
        self.distance = distance


# Scrapes park data for all national parks from government API
def scrapeParksData():
    apiKey = "Gwv9unybpHRdKuFWR3R0R76vmjGGceiXIkNjwqlv"
    URL = "https://developer.nps.gov/api/v1/parks"
    params = {"api_key": apiKey, "limit": 468}
    request = requests.get(URL, params=params)
    response = request.text
    parks = json.loads(response)
    parksJSON = "["

    numberOfParks = int(parks["total"])
    for i in range(0, numberOfParks):
        park = parks["data"][i]
        id = i
        name = park["fullName"]
        description = park["description"]

        latitude, longitude = 0.0, 0.0
        try:
            latitude = float(park["latitude"])
            longitude = float(park["longitude"])
        except ValueError:
            pass

        activities, topics = [], []
        for activity in park["activities"]:
            activities.append(activity["name"])
        for topic in park["topics"]:
            topics.append(topic["name"])
        states = park["states"]

        phone = ""
        try:
            phone = park["contacts"]["phoneNumbers"][0]["phoneNumber"]
        except IndexError:
            phone = ""

        email = park["contacts"]["emailAddresses"][0]["emailAddress"]
        website = park["url"]

        fee = 0.0
        try:
            fee = float(park["entranceFees"][0]["cost"])
        except IndexError:
            pass

        weekdays = []
        try:
            hours = park["operatingHours"][0]["standardHours"]
            weekdays.append(hours["monday"])
            weekdays.append(hours["tuesday"])
            weekdays.append(hours["wednesday"])
            weekdays.append(hours["thursday"])
            weekdays.append(hours["friday"])
            weekdays.append(hours["saturday"])
            weekdays.append(hours["sunday"])
        except IndexError:
            pass

        photos = []
        for image in park["images"]:
            photos.append(image["url"])

        nearest_cities = calculateNearestCities(latitude, longitude)
        nearest_airports = calculateNearestAirports(latitude, longitude)
        parkObject = Park(
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
        )
        parkJSON = json.dumps(parkObject.__dict__, sort_keys=True)
        parksJSON += (parkJSON) + ","
    parksJSON = parksJSON[:-1]
    parksJSON += "]"

    with open("parks.json", "w") as text_file:
        text_file.write(parksJSON)


# Scrapes data for 100 largest cities in the US from RoadGoat API
def scrapeCitiesData():
    apiKey = "12637d12051404a70279f8952d3abd0e"
    secretKey = "59287e26bafab288a3e659e86527dc72"
    URL = "https://api.roadgoat.com/api/v2/destinations/"

    citySlugs = []
    citiesListJSON = open("city_list.json")
    data = json.load(citiesListJSON)
    for city in data:
        citySlugs.append(city["slug"])

    citiesJSON = "["

    for i in range(0, 101):
        currentCity = citySlugs[i] + "-usa"
        request = requests.get(URL + currentCity, auth=HTTPBasicAuth(apiKey, secretKey))
        response = request.text
        city = json.loads(response)

        id = i
        name = city["data"]["attributes"]["name"]
        short_name = city["data"]["attributes"]["short_name"]
        long_name = city["data"]["attributes"]["long_name"]
        latitude = city["data"]["attributes"]["latitude"]
        longitude = city["data"]["attributes"]["longitude"]
        population = city["data"]["attributes"]["population"]
        walkability = city["data"]["attributes"]["walk_score_url"]

        cost = -1
        try:
            cost = city["data"]["attributes"]["budget"][name]["value"]
        except KeyError:
            pass

        safety = -1
        try:
            safety = city["data"]["attributes"]["safety"][name]["value"]
        except KeyError:
            pass

        rating = city["data"]["attributes"]["average_rating"]
        airbnb_listings = city["data"]["attributes"]["airbnb_url"]
        hiking_trails = city["data"]["attributes"]["alltrails_url"]

        photo = ""
        try:
            photoID = city["data"]["relationships"]["photos"]["data"][0]["id"]
            included = city["included"]
            for resource in included:
                if resource["id"] == photoID:
                    photo = resource["attributes"]["image"]["full"]
        except KeyError:
            pass

        nearest_parks = calculateNearestParks(latitude, longitude)
        nearest_airports = calculateNearestAirports(latitude, longitude)
        cityObject = City(
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
        )
        cityJSON = json.dumps(cityObject.__dict__, sort_keys=True)
        citiesJSON += cityJSON + ","

    citiesJSON = citiesJSON[:-1]
    citiesJSON += "]"
    with open("cities.json", "w") as text_file:
        text_file.write(citiesJSON)


# Scrapes data for US airports from Airport Info API
def scrapeAirportsData():
    URL = "https://airport-info.p.rapidapi.com/airport"
    headers = {
        "X-RapidAPI-Key": "488009fae8mshd60a831c4f460f5p11df6cjsn3133bd77206e",
        "X-RapidAPI-Host": "airport-info.p.rapidapi.com",
    }
    airportsJSON = "["

    iataCodes = []
    with open("airport_list.txt") as text_file:
        lines = text_file.readlines()
        for line in lines:
            iataCodes.append(line[:-1])

    for i in range(0, len(iataCodes)):
        iataCode = iataCodes[i]
        params = {"iata": iataCode}
        request = requests.request("GET", URL, headers=headers, params=params)
        response = request.text
        airport = json.loads(response)

        id = i

        name = ""
        try:
            name = airport["name"]
        except KeyError:
            print(iataCode)
            print(response)
            continue
        iata_code = iataCode
        icao_code = airport["icao"]
        city = airport["city"]
        state = airport["state"]
        phone = airport["phone"]
        postal_code = airport["postal_code"]
        latitude = airport["latitude"]
        longitude = airport["longitude"]
        website = airport["website"]

        street_number, street = airport["street_number"], airport["street"]
        address = street_number + " " + street

        nearest_cities = calculateNearestCities(latitude, longitude)
        nearest_parks = calculateNearestParks(latitude, longitude)
        airportObject = Airport(
            id,
            name,
            iata_code,
            city,
            state,
            icao_code,
            phone,
            address,
            postal_code,
            latitude,
            longitude,
            website,
            nearest_cities,
            nearest_parks,
        )
        airportJSON = json.dumps(airportObject.__dict__, sort_keys=True)
        airportsJSON += airportJSON + ","

    airportsJSON = airportsJSON[:-1]
    airportsJSON += "]"
    with open("airports.json", "w") as text_file:
        text_file.write(airportsJSON)


# Calculates nearest cities to given location
def calculateNearestCities(lat, long):
    cities = []
    with open("cities.json") as text_file:
        cities = json.load(text_file)

    distances = {}
    for city in cities:
        cityLat, cityLon = city["latitude"], city["longitude"]
        distance = math.sqrt((cityLat - lat) ** 2 + (cityLon - long) ** 2)
        distances[distance] = (city["name"], city["id"])
    distances = sorted(distances.items())
    nearest_cities = distances[:3]

    nearestCitiesList = []
    for i in range(3):
        city = nearest_cities[i]
        nearestCitiesList.append(
            {"name": city[1][0], "id": city[1][1], "distance": city[0]}
        )
    return nearestCitiesList


# Calculates nearest parks to given location
def calculateNearestParks(lat, long):
    parks = []
    with open("parks.json") as text_file:
        parks = json.load(text_file)

    distances = {}
    for park in parks:
        parkLat, parkLon = park["latitude"], park["longitude"]
        distance = math.sqrt((parkLat - lat) ** 2 + (parkLon - long) ** 2)
        distances[distance] = (park["name"], park["id"])
    distances = sorted(distances.items())
    nearest_parks = distances[:3]

    nearestParksList = []
    for i in range(3):
        city = nearest_parks[i]
        nearestParksList.append(
            {"name": city[1][0], "id": city[1][1], "distance": city[0]}
        )
    return nearestParksList


# Calculates nearest airports to given location
def calculateNearestAirports(lat, long):
    airports = []
    with open("airports.json") as text_file:
        airports = json.load(text_file)

    distances = {}
    for airport in airports:
        airportLat, airportLon = airport["latitude"], airport["longitude"]
        distance = math.sqrt((airportLat - lat) ** 2 + (airportLon - long) ** 2)
        distances[distance] = (airport["name"], airport["id"], airport["iata_code"])
    distances = sorted(distances.items())
    nearest_airports = distances[:3]

    nearestAirportsList = []
    for i in range(3):
        airport = nearest_airports[i]
        nearestAirportsList.append(
            {
                "name": airport[1][0],
                "iata_code": airport[1][2],
                "id": airport[1][1],
                "distance": airport[0],
            }
        )
    return nearestAirportsList


if __name__ == "__main__":
    print("Starting data scrape...")
    # scrapeParksData()
    # scrapeCitiesData()
    # scrapeAirportsData()
    print("Data scraping complete...")

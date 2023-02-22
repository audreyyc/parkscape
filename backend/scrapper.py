import requests
import json
from models import Park

def scrapeParksData(): 
    apiKey = "Gwv9unybpHRdKuFWR3R0R76vmjGGceiXIkNjwqlv"
    URL = "https://developer.nps.gov/api/v1/parks"
    params = {
        "api_key": apiKey,
        "limit": 468
    }
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

        parkObject = Park(id, name, description, latitude, longitude, photos,
                          phone, email, website, activities, topics, states, 
                          weekdays, fee, [], [])
        parkJSON = json.dumps(parkObject.__dict__, sort_keys=True)
        parksJSON += (parkJSON) + ","
    parksJSON = parksJSON[:-1]
    parksJSON += "]"
    
    with open("parks.json", "w") as text_file:
        text_file.write(parksJSON)
    
    
if __name__ == "__main__":

    scrapeParksData()

import json

class Park():
    
    def __init__(self, id, name, description, latitude, longitude, photos, 
                 phone, email, website, activities, topics, states, weekdays, 
                 fee, nearest_cities, nearest_airports):
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

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, 
            sort_keys=False, indent=4)
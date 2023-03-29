import app
import unittest

app.app.config["TESTING"] = True
client = app.app.test_client()


class Tests(unittest.TestCase):
    def test_cities_page(self):
        with client:
            response = client.get("/cities?page=1")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(len(data), 12)

    def test_parks_page(self):
        with client:
            response = client.get("/parks?page=2")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(len(data), 12)

    def test_airports_page(self):
        with client:
            response = client.get("/airports?page=3")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(len(data), 12)

    def test_city(self):
        with client:
            response = client.get("/city/11")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(data["name"], "Austin, TX")
            self.assertEqual(data["short_name"], "Austin")
            self.assertEqual(data["population"], 790390)

    def test_park(self):
        with client:
            response = client.get("/park/25")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(data["name"], "Arches National Park")
            self.assertEqual(data["fee"], 30.0)
            self.assertEqual(data["states"], "UT")

    def test_airport(self):
        with client:
            response = client.get("/airport/55")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(data["state"], "Massachusetts")
            self.assertEqual(data["name"], "Laurence G. Hanscom Field")
            self.assertEqual(data["iata_code"], "BED")

    def test_cities_sort_filter(self):
        with client:
            response = client.get("/cities?sort=name_asc&state=TX")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(len(data), 13)
            self.assertTrue(check_filter(data, "state", "TX"))

    def test_parks_sort_filter(self):
        with client:
            response = client.get("/parks?sort=name_asc&states=TX")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(len(data), 17)
            self.assertTrue(check_filter(data, "states", "TX"))

    def test_airports_sort_filter(self):
        with client:
            response = client.get("/airports?sort=name_asc&state=Texas")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(len(data), 32)
            self.assertTrue(check_filter(data, "state", "Texas"))

    def test_cities_search(self):
        with client:
            response = client.get("/cities?search=Austin")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertTrue(check_search(data, "name", "Austin, TX"))

    def test_parks_search(self):
        with client:
            response = client.get("/parks?search=Yosemite")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertTrue(check_search(data, "name", "Yosemite National Park"))

    def test_airports_search(self):
        with client:
            response = client.get("/airports?search=Newark")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertTrue(check_search(data, "name", "Newark Liberty International Airport"))

def check_search(data, attr, expected):
    return data[0][attr] == expected

def check_filter(data, attr, expected):
    for obj in data:
        if obj[attr].find(expected) < 0:
            return False
    return True

def check_sort(data, attr, asc):
    prev = 0
    for obj in data:
        if prev != 0:
            if (asc and obj[attr] < prev) or (not asc and obj[attr] > prev):
                return False
        prev = obj[attr]
    return True

if __name__ == "__main__":
    unittest.main()

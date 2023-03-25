import app
import unittest
import json

app.app.config["TESTING"] = True
client = app.app.test_client()


class Tests(unittest.TestCase):
    def test_cities_page(self):
        with client:
            response = client.get("/cities?page=1")
            self.assertEqual(response.status_code, 200)
            data = json.loads(response.data)
            self.assertEqual(len(data), 12)

    def test_parks_page(self):
        with client:
            response = client.get("/parks?page=2")
            self.assertEqual(response.status_code, 200)
            data = json.loads(response.data)
            self.assertEqual(len(data), 12)

    def test_airports_page(self):
        with client:
            response = client.get("/airports?page=3")
            self.assertEqual(response.status_code, 200)
            data = json.loads(response.data)
            self.assertEqual(len(data), 12)

    def test_all_cities(self):
        with client:
            response = client.get("/cities")
            self.assertEqual(response.status_code, 200)
            data = json.loads(response.data)
            self.assertEqual(len(data), 101)

    def test_all_parks(self):
        with client:
            response = client.get("/parks")
            self.assertEqual(response.status_code, 200)
            data = json.loads(response.data)
            self.assertEqual(len(data), 468)

    def test_all_airports(self):
        with client:
            response = client.get("/airports")
            self.assertEqual(response.status_code, 200)
            data = json.loads(response.data)
            self.assertEqual(len(data), 707)

    def test_city(self):
        with client:
            response = client.get("/city/10")
            self.assertEqual(response.status_code, 200)
            data = json.loads(response.data)
            self.assertEqual(data["name"], "Austin, TX")
            self.assertEqual(data["short_name"], "Austin")
            self.assertEqual(data["population"], 790390)

    def test_park(self):
        with client:
            response = client.get("/park/24")
            self.assertEqual(response.status_code, 200)
            data = json.loads(response.data)
            self.assertEqual(data["name"], "Arches National Park")
            self.assertEqual(data["fee"], 30.0)
            self.assertEqual(data["states"], "UT")

    def test_airport(self):
        with client:
            response = client.get("/airport/54")
            self.assertEqual(response.status_code, 200)
            data = json.loads(response.data)
            self.assertEqual(data["state"], "Massachusetts")
            self.assertEqual(data["name"], "Laurence G. Hanscom Field")
            self.assertEqual(data["iata_code"], "BED")


if __name__ == "__main__":
    unittest.main()

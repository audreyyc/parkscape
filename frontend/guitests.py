from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver import Remote
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.support.select import Select
import unittest
import time

URL = "https://www.parkscape.me/"


class Test(unittest.TestCase):
    @classmethod
    def setUpClass(self):
        chrome_options = Options()
        chrome_options.add_argument("--window-size=1920,1080")
        chrome_options.add_argument("--start-maximized")
        chrome_options.add_argument("disable-infobars")
        chrome_options.add_argument("--disable-extensions")
        chrome_options.add_argument("--disable-gpu")
        chrome_options.add_argument("--disable-dev-shm-usage")
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--headless")
        self.driver = webdriver.Chrome(chrome_options=chrome_options)
        self.driver.get(URL)

    @classmethod
    def tearDownClass(self):
        self.driver.quit()

    def test_home(self):
        self.driver.get(URL)
        try:
            element = self.driver.find_element(By.CLASS_NAME, "navbar-brand")
            element.click()
        except Exception as e:
            print("Navbar brand not found " + str(e))

        try:
            element = self.driver.find_element(By.CLASS_NAME, "nav-link")
            element.click()
        except Exception as e:
            print("Home button not found " + str(e))

        self.assertEqual(str(self.driver.current_url), URL)

    def test_about(self):
        self.driver.get(URL)
        try:
            elements = self.driver.find_elements(By.CLASS_NAME, "nav-link")
            elements[1].click()
        except Exception as e:
            print("Home button not found " + str(e))

        self.assertEqual(str(self.driver.current_url), URL + "about")

    def test_about(self):
        self.driver.get(URL)
        try:
            elements = self.driver.find_elements(By.CLASS_NAME, "nav-link")
            elements[1].click()
        except Exception as e:
            print("About button not found " + str(e))

        self.assertEqual(str(self.driver.current_url), URL + "about")

    def test_parks(self):
        self.driver.get(URL)
        try:
            elements = self.driver.find_elements(By.CLASS_NAME, "nav-link")
            elements[2].click()
        except Exception as e:
            print("Parks button not found " + str(e))

        self.assertEqual(str(self.driver.current_url), URL + "parks")

    def test_cities(self):
        self.driver.get(URL)
        try:
            elements = self.driver.find_elements(By.CLASS_NAME, "nav-link")
            elements[3].click()
        except Exception as e:
            print("Cities button not found " + str(e))

        self.assertEqual(str(self.driver.current_url), URL + "cities")

    def test_about(self):
        self.driver.get(URL)
        try:
            elements = self.driver.find_elements(By.CLASS_NAME, "nav-link")
            elements[4].click()
        except Exception as e:
            print("Airports button not found " + str(e))

        self.assertEqual(str(self.driver.current_url), URL + "airports")

    def test_tool_card(self):
        self.driver.get(URL + "about")
        WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable(
                (By.XPATH, '//*[@id="root"]/div/div[8]/div/div[4]/div/a')
            )
        )
        try:
            element = self.driver.find_element_by_xpath(
                '//*[@id="root"]/div/div[8]/div/div[4]/div/a'
            )
            self.driver.execute_script("arguments[0].click();", element)
        except Exception as e:
            print("React card not found " + str(e))
        self.assertEqual(str(self.driver.current_url), "https://react.dev/")

    def test_api_card(self):
        self.driver.get(URL + "about")
        WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable(
                (By.XPATH, '//*[@id="root"]/div/div[10]/div/div[3]/div/a')
            )
        )
        try:
            element = self.driver.find_element_by_xpath(
                '//*[@id="root"]/div/div[10]/div/div[3]/div/a'
            )
            self.driver.execute_script("arguments[0].click()", element)
        except Exception as e:
            print("API card not found " + str(e))
        self.assertEqual(
            str(self.driver.current_url),
            "https://rapidapi.com/Active-api/api/airport-info/",
        )

    def test_park_card(self):
        self.driver.get(URL + "parks")
        WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, '//*[@id="1"]'))
        )
        try:
            element = self.driver.find_element_by_xpath('//*[@id="1"]')
            self.driver.execute_script("arguments[0].click()", element)
        except Exception as e:
            print("Park card not found " + str(e))
        self.assertEqual(
            str(self.driver.current_url),
            "https://www.parkscape.me/parks/1",
        )

    def test_city_card(self):
        self.driver.get(URL + "cities")
        WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, '//*[@id="1"]'))
        )
        try:
            element = self.driver.find_element_by_xpath('//*[@id="1"]')
            self.driver.execute_script("arguments[0].click()", element)
        except Exception as e:
            print("Park card not found " + str(e))
        self.assertEqual(
            str(self.driver.current_url),
            "https://www.parkscape.me/cities/1",
        )

    def test_airport_card(self):
        self.driver.get(URL + "airports")
        WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, '//*[@id="1"]/button'))
        )
        try:
            element = self.driver.find_element_by_xpath('//*[@id="1"]/button')
            self.driver.execute_script("arguments[0].click()", element)
        except Exception as e:
            print("Park card not found " + str(e))
        self.assertEqual(
            str(self.driver.current_url),
            "https://www.parkscape.me/airports/1",
        )

    def test_nearest_city(self):
        self.driver.get(URL + "parks/2")
        WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, '//*[@id="23"]/button'))
        )
        try:
            element = self.driver.find_element_by_xpath('//*[@id="23"]/button')
            self.driver.execute_script("arguments[0].click()", element)
        except Exception as e:
            print("Nearest city button not found " + str(e))
        self.assertEqual(
            str(self.driver.current_url),
            "https://www.parkscape.me/cities/23",
        )

    def test_website_search(self):
        self.driver.get(URL)
        search_bar = self.driver.find_element(
            By.XPATH, "/html/body/div/div/nav/div/div/form/input"
        )
        search_bar.send_keys("California")

        search_button = self.driver.find_element(
            By.XPATH, "/html/body/div/div/nav/div/div/form/button"
        )
        search_button.click()
        time.sleep(5)  # Wait for results to show

        num_of_cities = self.driver.find_element(
            By.XPATH, "/html/body/div/div/div/div[2]/div[1]/p"
        ).text
        num_of_airports = self.driver.find_element(
            By.XPATH, "/html/body/div/div/div/div[3]/div[1]/p"
        ).text

        self.assertEqual(int(num_of_cities), 17)
        self.assertEqual(int(num_of_airports), 36)

    def test_sorting(self):
        self.driver.get(URL + "parks")
        sorting_select = Select(
            self.driver.find_element(
                By.ID, "sort"
            )
        )
        sorting_select.select_by_index(2)
        apply_button = self.driver.find_element(
            By.XPATH, '//*[@id="root"]/div/div/div[2]/div[3]/button'
        )
        apply_button.click()
        time.sleep(5)
        first_park_name = self.driver.find_element(
            By.XPATH, "/html/body/div/div/div/div[3]/div/div[1]/div/a/div[1]/div"
        ).text
        self.assertEqual(first_park_name, "Zion National Park")

    def test_filtering(self):
        self.driver.get(URL + "cities")


        filtering_select = Select(
            self.driver.find_element(
                By.ID, "states"
            )
        )
        filtering_select.select_by_index(10)

  
        apply_button = self.driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div[2]/div[3]/button')
        apply_button.click()
        time.sleep(2)

        first_city_name = self.driver.find_element(
            By.XPATH, "/html/body/div/div/div/div[3]/div/div[1]/div/a/div[1]/div"
        ).text
        second_city_name = self.driver.find_element(
            By.XPATH, "/html/body/div/div/div/div[3]/div/div[2]/div/a/div[1]/div"
        ).text
        self.assertEqual(first_city_name, "Jacksonville, Florida, US")
        self.assertEqual(second_city_name, "Miami, Florida, US")


if __name__ == "__main__":
    unittest.main()

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import unittest

URL = "https://dev.d1rkv95cbxfqn4.amplifyapp.com/"

class Test(unittest.TestCase):

    @classmethod
    def setUpClass(self):
        self.driver = webdriver.Chrome()
        self.driver.get(URL)

    @classmethod
    def tearDownClass(self):
        self.driver.quit()

    def test_home(self):
        self.driver.get(URL)
        try:
            element = self.driver.find_element(By.CLASS_NAME, 'navbar-brand')
            element.click()
        except Exception as e:
            print("Navbar brand not found " + str(e))

        try:
            element = self.driver.find_element(By.CLASS_NAME, 'nav-link')
            element.click()
        except Exception as e:
            print("Home button not found " + str(e))
        
        self.assertEqual(str(self.driver.current_url), URL)
    
    def test_about(self):
        self.driver.get(URL)
        try:
            elements = self.driver.find_elements(By.CLASS_NAME, 'nav-link')
            elements[1].click()
        except Exception as e:
            print("Home button not found " + str(e))
        
        self.assertEqual(str(self.driver.current_url), URL + 'about')
        
    def test_about(self):
        self.driver.get(URL)
        try:
            elements = self.driver.find_elements(By.CLASS_NAME, 'nav-link')
            elements[1].click()
        except Exception as e:
            print("About button not found " + str(e))
        
        self.assertEqual(str(self.driver.current_url), URL + 'about')

    def test_parks(self):
        self.driver.get(URL)
        try:
            elements = self.driver.find_elements(By.CLASS_NAME, 'nav-link')
            elements[2].click()
        except Exception as e:
            print("Parks button not found " + str(e))
        
        self.assertEqual(str(self.driver.current_url), URL + 'parks')
    
    def test_cities(self):
        self.driver.get(URL)
        try:
            elements = self.driver.find_elements(By.CLASS_NAME, 'nav-link')
            elements[3].click()
        except Exception as e:
            print("Cities button not found " + str(e))
        
        self.assertEqual(str(self.driver.current_url), URL + 'cities')
    
    def test_about(self):
        self.driver.get(URL)
        try:
            elements = self.driver.find_elements(By.CLASS_NAME, 'nav-link')
            elements[4].click()
        except Exception as e:
            print("Airports button not found " + str(e))
        
        self.assertEqual(str(self.driver.current_url), URL + 'airports')
    
    def test_tool_card(self):
        self.driver.get(URL + "about")
        WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div/div[8]/div[2]/div[1]/div/a')))
        try:
            element = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[8]/div[2]/div[1]/div/a')
            self.driver.execute_script("arguments[0].click();", element)
        except Exception as e:
            print("React card not found " + str(e))
        self.assertEqual(str(self.driver.current_url), 'https://reactjs.org/')

    def test_api_card(self):
        self.driver.get(URL + "about")
        WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div/div[10]/div/div[3]/div/a')))
        try:
            element = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[10]/div/div[3]/div/a')
            self.driver.execute_script("arguments[0].click()", element)
        except Exception as e:
            print("API card not found " + str(e))
        self.assertEqual(str(self.driver.current_url), 'https://rapidapi.com/Active-api/api/airport-info/')

if __name__ == '__main__':
    unittest.main()

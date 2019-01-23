"""
    **V1**
        - students can register and wait for verification
        - some student and all corpers can create contents for the frontpage.
        - Forums establishment:
            - the general forum
            - the choice based forum (only one)
"""

import time

from django.test import LiveServerTestCase
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import WebDriverException
import os

MAX_WAIT = 10

class NewVisitorTest(StaticLiveServerTestCase):    

    def setUp(self):
        self.browser = webdriver.Chrome()
        staging_server = os.environ.get('STAGING_SERVER')
        if staging_server:
            self.live_server_url = 'http://' + staging_server

    def tearDown(self):
        self.browser.quit()

    def wait_for_row_in_list_table(self, row_text):
        start_time = time.time()
        while True:
            try:
                table = self.browser.find_element_by_id('id_list_table')
                rows = table.find_elements_by_tag_name('tr')
                self.assertIn(row_text, [row.text for row in rows])
                return
            except (AssertionError, WebDriverException) as e:
                if time.time() - start_time > MAX_WAIT:
                    raise e
                time.sleep(0.5)

    def test_can_start_a_list_and_retrieve_it_later(self):
        # a student just heard of the sch platform
        # he goes to check out the homepage
        self.browser.get(self.live_server_url + '/threads/list')

        # noticing the header saids that "ASSA"
        self.assertIn("ASSA", self.browser.title)

        header_text = self.browser.find_element_by_tag_name('h1').text
        self.assertIn('ASSA forum', header_text)

        # and a small tag describing the full acronym
        logo_description = self.browser.find_element_by_id('logo_description').text
        self.assertIn('Afesiere Secondary School Afesiere Forum', logo_description)

        # he went on and saw a box
        # inviting him to write a news content or article straight away
        title_inputbox = self.browser.find_element_by_id('content_title')
        self.assertEqual(
            title_inputbox.get_attribute('placeholder'),
            'Enter the title...'
        )

        content_inputbox = self.browser.find_element_by_id('content_body')
        self.assertEqual(
            content_inputbox.get_attribute('placeholder'),
            'Start writing the content here...'
        )

        # he types "Boys in Afesiere sch" into the first box that depicts "Topic"
        title_inputbox.send_keys('Boys in Afesiere sch')

        # and went ahead to write the following in the body part: "Afesiere boys are
        # best in the entire Ughelli North among all secondary school boys"
        content_inputbox.send_keys('Afesiere boys are best in the entire Ughelli North among all secondary school boys')

        # When he hits enter, the page updates, and now the page lists 
        # "Boys in Afesiere sch" as an article item
        content_inputbox.submit() #send_keys(Keys.ENTER)
        

        self.wait_for_row_in_list_table('Boys in Afesiere sch')

        # There was still a text box inviting him to add another item. he enters 
        # "Girls in Ughelli North" with details "Afesiere boys are best in the 
        # entire Ughelli North among all secondary school boys"
        title_inputbox = self.browser.find_element_by_id('content_title')
        title_inputbox.send_keys('Girls in Ughelli North')

        content_inputbox = self.browser.find_element_by_id('content_body')
        content_inputbox.send_keys('Afesiere boys are best in the entire Ughelli North among all secondary school boys')
        content_inputbox.submit()
        

        # The page updates again, and now shows both items on the news list
        self.wait_for_row_in_list_table('Boys in Afesiere sch')
        self.wait_for_row_in_list_table('Girls in Ughelli North')
       
        # HE wonder if he could be able to read the details of each news items.
        # he click on the first title and passed to another page that shows the topic
        # and details of the topic of the forum

        # Again he went back and did same for the second topic

        # Satisfied, he goes to sleep

        self.fail('Finish the test')




############################################################################
# Solomon hard the her school now has online forum
# quickly when she got home, she decided to check it out
# she quicky saw a list news and article items shown on the frontpage.
# she quickly clicked on the one that interests her the most
# finishing reading she went back to the main page.
# she found another informational article that interest her.
# clicks a again and was also taken to the detail page.
# certisfied she went off and sleep.   

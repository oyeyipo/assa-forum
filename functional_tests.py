"""
    **V1**
        - students can register and wait for verification
        - some student and all corpers can create contents for the frontpage.
        - Forums establishment:
            - the general forum
            - the choice based forum (only one)
"""

from selenium import webdriver
import unittest



class NewVisitorTest(unittest.TestCase):

    def setUp(self):
        self.browser = webdriver.Chrome()

    def tearDown(self):
        self.browser.quit()

    def test_can_start_a_list_and_retrieve_it_later(self):
        # a student just heard of the sch platform
        # he goes to check out the homepage
        self.browser.get('http://localhost:8000')

        # noticing the header saids that "ASBN"
        self.assertIn("ASSA", self.browser.title)
        self.fail('Finish the test')

if __name__ == '__main__':
    unittest.main()



# and a small tag describing the full acronym
# he went on and saw a box
# inviting him to write a news content or article straight away
# he types "Boys in Afesiere sch" into the first box that depicts "Topic"
# and went ahead to write the following in the body part: "Afesiere boys are
# best in the entire Ughelli North among all secondary school boys"

# When he hits enter, the page updates, and now the page lists 
# "Boys in Afesiere sch" as an article item

# There was still a text box inviting him to add another item. he enters 
# "Girls in Ughelli North" with details "Afesiere boys are best in the 
# entire Ughelli North among all secondary school boys"

# The page updates again, and now shows both items on the news list

# HE wonder if he could be able to read the details of each news items.
# he click on the first title and passed to another page that shows the topic
# and details of the topic of the forum

# Again he went back and did same for the second topic

# Satisfied, he goes to sleep




############################################################################
# Solomon hard the her school now has online forum
# quickly when she got home, she decided to check it out
# she quicky saw a list news and article items shown on the frontpage.
# she quickly clicked on the one that interests her the most
# finishing reading she went back to the main page.
# she found another informational article that interest her.
# clicks a again and was also taken to the detail page.
# certisfied she went off and sleep.   
from django.test import TestCase
from threads.views import threads_page
from django.urls import resolve

class ThreadsPageTest(TestCase):

    def test_root_url_resolves_to_threads_page_view(self):
        found = resolve('/threads/lists')
        self.assertEqual(found.func, threads_page)




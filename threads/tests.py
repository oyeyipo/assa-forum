from django.test import TestCase


class ThreadsPageTest(TestCase):

    def test_uses_threads_list_template(self):
        response = self.client.get('/threads/list')
        self.assertTemplateUsed(response, 'threads/list.html')




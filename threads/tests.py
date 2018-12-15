from django.test import TestCase


class ThreadsPageTest(TestCase):

    def test_uses_threads_list_template(self):
        response = self.client.get('/threads/list')
        self.assertTemplateUsed(response, 'threads/list.html')

    def test_can_save_a_POST_request(self):
        response = self.client.post('/threads/list', data={
            'title_text': 'Boys in Afesiere sch',
            'content_text': 'Afesiere boys are best in the entire Ughelli North among all secondary school boys',
            })
        self.assertIn('Boys in Afesiere sch', response.content.decode())
        self.assertTemplateUsed(response, 'threads/list.html')





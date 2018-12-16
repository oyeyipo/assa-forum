from django.test import TestCase
from threads.models import Content

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


class ItemModelTest(TestCase):

    def test_saving_and_retrieving_content(self):
        first_content = Content()
        first_content.title = 'The first (ever) list content'
        first_content.save()

        second_content = Content()
        second_content.title = 'Content the second'
        second_content.save()

        saved_contents = Content.objects.all()
        self.assertEqual(saved_contents.count(), 2)

        first_saved_content = saved_contents[0]
        second_saved_content = saved_contents[1]

        self.assertEqual(first_saved_content.title, 'The first (ever) list content')
        self.assertEqual(second_saved_content.title, 'Content the second')


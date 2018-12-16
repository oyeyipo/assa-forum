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

        self.assertEqual(Content.objects.count(), 1)
        new_content = Content.objects.first()
        self.assertEqual(new_content.title, 'Boys in Afesiere sch')

    def test_can_redirects_after_POST(self):
        response = self.client.post('/threads/list', data={
            'title_text': 'Boys in Afesiere sch',
            'content_text': 'Afesiere boys are best in the entire Ughelli North among all secondary school boys',
            })
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['location'], '/threads/list')

    def test_only_saves_contents_when_necessary(self):
        self.client.get('/threads/list')
        self.assertEqual(Content.objects.count(), 0)

    def test_displays_all_content_items(self):
        Content.objects.create(title='Contenty 1', body="body of content")
        Content.objects.create(title='Contenty 2', body="body of content")

        response = self.client.get('/threads/list')

        self.assertIn('Contenty 1', response.content.decode())
        self.assertIn('Contenty 2', response.content.decode())
        

class ItemModelTest(TestCase):

    def test_saving_and_retrieving_content(self):
        # TODO: pay attention to this space, there
        # TODO cont'd: is a more compact way to write this unittest

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


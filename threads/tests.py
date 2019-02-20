from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient, APITestCase
from .serializers import ThreadDetailSerializer, ThreadListSerializer


from .models import Thread


class ThreadModelTest(APITestCase):
    client = APIClient()

    def setUp(self):
        self.thread_title = "Hey! Hello ASSA"
        self.thread_content = "A content of the proposed thread"
        self.thread = Thread(title=self.thread_title, content=self.thread_content)

    def test_model_can_create_a_thread(self):
        """Test the threads model can create a thread."""
        old_count = Thread.objects.count()
        self.thread.save()
        new_count = Thread.objects.count()
        self.assertNotEqual(old_count, new_count)

    def test_saving_and_retrieving_thread(self):

        pass


class ThreadViewTest(APITestCase):
    client = APIClient()
    url = reverse("threads:list_create")

    def setUp(self):
        Thread.objects.create(title="little title", content="Contenty")
        Thread.objects.create(title="little title 1", content="Contenty 1")
        self.content1 = Thread.objects.create(title="little title 2", content="Contenty 3")
        self.content2 = Thread.objects.create(title="little title 3", content="Contenty 3")

    # bobo makes a request to view the list threads
    # input the url a page comes on
    def test_get_returns_http_200(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # Listing all the threads
    def test_get_return_threads_list(self):
        response = self.client.get(self.url)

        threads = Thread.objects.all()
        context = {'request': response}
        serializer = ThreadListSerializer(threads, many=True, context=context)

        self.assertEqual(response.data, serializer.data)

    # he saw a link to a the detailed view of of each thread
    # after clicking on it it took him to a detail view
    # of the clicked thread
    def test_can_link_to_detail_view_of_each_thread(self):
        response = self.client.get(reverse('threads:detail_delete_update', kwargs={'pk': self.content1.pk}))
        thread = Thread.objects.get(pk=self.content1.pk)
        serializer = ThreadDetailSerializer(thread)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    def test_get_throws_error_for_invalid_detail_thread(self):
        response = self.client.get(reverse('threads:detail_delete_update', kwargs={'pk': 40}))

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    # on the threads list page he saw a form to created a 
    # new thread and he did
    # this successfully redirecting him to the threads detail page
    # there there was a form to prepopulated to update or change
    # things in thread content
    # he decide to make some changes
    # after making some changes it shows success and redirected to the
    # smae detail post


    # bobo decided to create a new thread but got an error because
    # he was not a reqisterred user

    # bobo tries to change the contents of a thread but he was 
    # not the owner 
    # so he got an error 
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient, APITestCase

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
    url = reverse("threads:list")

    def test_uses_correct_url(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_can_print_out_response_data(self):
        # url = reverse("threads:list")
        # response = self.client.get(url)
        # print(response)
        pass

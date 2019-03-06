from django.urls import include, path

from .views import CommentListAPIView


app_name = "comment"
urlpatterns = [
    path("", CommentListAPIView.as_view(), name="list_create"),
]

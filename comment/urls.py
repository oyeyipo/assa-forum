from django.urls import include, path

from .views import CommentListAPIView, CommentDetailAPIView


app_name = "comment"
urlpatterns = [
    path("", CommentListAPIView.as_view(), name="list_create"),
    path("<slug:uuid>/", CommentDetailAPIView.as_view(), name="thread"),
]

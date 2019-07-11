from django.contrib import admin
from django.urls import include, path

from .views import (
    ThreadListAPIView,
    ThreadListCreateAPIView,
    ThreadDetailUpdateDeleteAPIView,
    HelloView,
    ThreadDetailAPIView,
)

app_name = "threads"
urlpatterns = [
    path("", ThreadListCreateAPIView.as_view(), name="list_create"),
    path("list/", ThreadListAPIView.as_view(), name="list"),
    path(
        "<slug:uuid>/",
        ThreadDetailUpdateDeleteAPIView.as_view(),
        name="detail_delete_update",
    ),
    path(
        "<slug:uuid>/comments/",
        ThreadDetailUpdateDeleteAPIView.as_view(),
        name="thread_comments",
    ),

    # Test URLs
    path("<slug:uuid>/", ThreadDetailAPIView.as_view(), name="detail"),
    path("hello", HelloView.as_view(), name="hello"),
]

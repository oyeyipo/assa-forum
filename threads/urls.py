from django.contrib import admin
from django.urls import include, path

from .views import (
    ThreadListCreateAPIView,
    ThreadDetailUpdateDeleteAPIView,
    HelloView,
    ThreadDetailAPIView,
)

app_name = "threads"
urlpatterns = [
    path("", ThreadListCreateAPIView.as_view(), name="list_create"),
    path(
        "<slug:uuid>/",
        ThreadDetailUpdateDeleteAPIView.as_view(),
        name="detail_delete_update",
    ),

    # Test URLs
    path("<slug:uuid>/", ThreadDetailAPIView.as_view(), name="detail"),
    path("hello", HelloView.as_view(), name="hello"),
]

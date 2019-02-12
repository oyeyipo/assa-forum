from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import ThreadListAPIView

app_name = 'threads'
urlpatterns = [
    path("", ThreadListAPIView.as_view(), name='list'),
]


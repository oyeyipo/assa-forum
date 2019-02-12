from django.shortcuts import render

from rest_framework.generics import ListAPIView
from .models import Thread

from .serializers import ThreadSerializer

class ThreadListAPIView(ListAPIView):
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer

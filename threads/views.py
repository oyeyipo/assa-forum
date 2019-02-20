from django.shortcuts import render
from rest_framework.generics import (
    ListCreateAPIView,
    UpdateAPIView,
    RetrieveAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework.permissions import (
    AllowAny,
    IsAdminUser,
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
)
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Thread
from .serializers import ThreadDetailSerializer, ThreadListSerializer
from .permissions import IsOwnerOrReadOnly


class ThreadListCreateAPIView(ListCreateAPIView):
    queryset = Thread.objects.all()
    serializer_class = ThreadListSerializer
    lookup_field = "uuid"
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ThreadDetailUpdateDeleteAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Thread.objects.all()
    serializer_class = ThreadDetailSerializer
    lookup_field = "uuid"
    permission_classes = [IsOwnerOrReadOnly, IsAuthenticated]




class ThreadDetailAPIView(RetrieveAPIView):
    '''
    This view is basically useless for now
    '''
    queryset = Thread.objects.all()
    serializer_class = ThreadDetailSerializer
    lookup_field = "uuid"
    permission_classes = [IsAuthenticated]


class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {"message": "Hello, World!"}
        return Response(content)

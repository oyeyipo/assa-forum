from django.http import Http404
from django.shortcuts import get_object_or_404, render
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveAPIView,
    RetrieveUpdateDestroyAPIView,
    UpdateAPIView,
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
from .permissions import IsOwnerOrReadOnly
from .serializers import ThreadDetailSerializer, ThreadListSerializer


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


# class ThreadCommentsAPIView(RetrieveAPIView):
#     lookup_field = "uuid"
#     permission_classes = []

#     def get_serializer_class(self):
#         return ThreadDetailSerializer

#     def get_object(self):
#         qs = self.get_queryset()
#         thread_id = self.kwargs[self.lookup_field]
#         thread = get_object_or_404(qs, uuid=thread_id)
#         obj = thread.comments.all()
#         return obj

#     def get_queryset(self):
#         return Thread.objects.all()


####################################################
###################################################
class ThreadDetailAPIView(RetrieveAPIView):
    """
    This view is basically useless for now
    """

    queryset = Thread.objects.all()
    serializer_class = ThreadDetailSerializer
    lookup_field = "uuid"
    permission_classes = [IsAuthenticated]


class HelloView(APIView):
    """
    This view is basically useless for now
    """

    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {"message": "Hello, World!"}
        return Response(content)

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

from .models import Club
from .serializers import ClubListSerializer

# from .permissions import IsOwnerOrReadOnly


class ClubListCreateAPIView(ListCreateAPIView):
    queryset = Club.objects.all()
    serializer_class = ClubListSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


"""
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
"""

"""
def get_permissions(self):
    if self.request.method == 'GET' or self.request.method == 'PUT':
        return [DRYPermissions(),]
    return []
"""
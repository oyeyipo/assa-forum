from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    ListCreateAPIView,
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

from threads.permissions import IsOwnerOrReadOnly

from .models import User
from .serializers import (
    CorperProfileSerializer,
    StudentProfileSerializer,
    UserCreateSerializer,
    UserDetailSerializer,
    UserListSerializer,
)
from rest_framework import status
from django.http import Http404


class UserListCreate(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserCreateSerializer
    lookup_field = "username"
    permission_classes = [AllowAny]


class UserDetailCreate(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserDetailSerializer
    lookup_field = "username"
    permission_classes = [AllowAny]


class UserProfileDetailAPIView(APIView):


    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)

    def get_object(self, username):
        try:
            return User.objects.get(username=username)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, username, format=None):
        owner = self.get_object(username)

        if not request.user.is_authenticated:
            return Response(
                {"msg": "your are not logged in"}, status.HTTP_401_UNAUTHORIZED
            )
        if owner.roles == User.CORPER_VAR:
            user = owner.corper_profile
            serializer = CorperProfileSerializer(user)
        if owner.roles == User.STUDENT_VAR:
            user = owner.student_profile
            serializer = StudentProfileSerializer(user)
        return Response(serializer.data)

# class UserProfileDetail(RetrieveAPIView):
    #     lookup_field = "username"
#     permission_classes = [IsAuthenticated]

#     def get_serializer_class(self):
#         if self.request.user.roles == User.CORPER_VAR:
#             return CorperProfileSerializer
#         elif self.request.user.roles == User.STUDENT_VAR:
#             return StudentProfileSerializer

#     def get_queryset(self, *args, **kwargs):
#         user_id = self.kwargs.get("username")

#         user = User.objects.get(username=user_id)
#         if self.request.user.roles == User.CORPER_VAR:
#             profile = user.corper_profile
#         elif self.request.user.roles == User.STUDENT_VAR:
#             profile = user.student_profile
#         return profile

#     def get_queryset(self, *args, **kwargs):
#         user_id = self.kwargs.get("username")

#         user = User.objects.get(username=user_id)
#         if self.request.user.roles == User.CORPER_VAR:
#             profile = user.corper_profile
#         elif self.request.user.roles == User.STUDENT_VAR:
#             profile = user.student_profile
#         return profile
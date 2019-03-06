from django.http import Http404
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.generics import (CreateAPIView, ListAPIView,
                                     ListCreateAPIView, RetrieveAPIView,
                                     RetrieveUpdateDestroyAPIView)
from rest_framework.permissions import (AllowAny, IsAdminUser, IsAuthenticated,
                                        IsAuthenticatedOrReadOnly)
from rest_framework.response import Response
from rest_framework.views import APIView

from threads.permissions import IsOwnerOrReadOnly

from .models import Comment
from .serializers import CommentListSerializer, CommentDetailSerializer

class CommentListAPIView(ListCreateAPIView):
	serializer_class = CommentListSerializer
	lookup_field = "uuid"

	def get_queryset(self):
		return Comment.objects.all()


class CommentDetailAPIView(RetrieveAPIView):
	serializer_class = CommentDetailSerializer
	lookup_field = "uuid"

	def get_queryset(self):
		return Comment.objects.all()

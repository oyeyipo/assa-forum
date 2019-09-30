from rest_framework.serializers import (
    ModelSerializer,
    HyperlinkedIdentityField,
    HyperlinkedRelatedField,
    SerializerMethodField
)

from comment.serializers import CommentDetailSerializer
from comment.models import Comment
from .models import Thread


class ThreadListSerializer(ModelSerializer):
    url = HyperlinkedIdentityField(
        view_name="api:threads:detail_delete_update",
        read_only=True,
        lookup_field="uuid",
    )
    owner = SerializerMethodField()
    comment_count = SerializerMethodField()

    class Meta:
        model = Thread
        fields = ("url", "owner", "title", "content", "uuid", "comment_count")

    def get_owner(self, obj):
        return str(obj.owner.username)

    def get_comment_count(self, obj):
        qs = obj.comments.all().count()
        return qs


class ThreadDetailSerializer(ModelSerializer):
    owner = SerializerMethodField()
    comments = SerializerMethodField()

    class Meta:
        model = Thread
        fields = ("id", "owner", "title", "content", "uuid", "created", "updated", "comments")
        read_only_fields = ("created", "updated")

    def get_owner(self, obj):
        return str(obj.owner.username)

    def get_comments(self, obj):
        if obj.comments.count() > 0:
            return CommentDetailSerializer(obj.comments.all(), many=True).data
        return None


from rest_framework.serializers import (
        ModelSerializer, 
        HyperlinkedIdentityField,
        SerializerMethodField
    )

from .models import Comment


class CommentListSerializer(ModelSerializer):
    url = HyperlinkedIdentityField(
        view_name="api:comments:thread",
        read_only=True,
        lookup_field="uuid",
    )
    user = SerializerMethodField()

    reply_count = SerializerMethodField()

    class Meta:
        model = Comment
        fields = [
            "id",
            "user",
            "parent",
            "body",
            "created_on",
            "reply_count",
            "url",
        ]

    def get_user(self, obj):
        user_obj = obj
        return str(user_obj.user.username)

    def get_reply_count(self, obj):
        if obj.is_parent:
            return obj.children().count()
        return 0


class CommentChildSerializer(ModelSerializer):
    user = SerializerMethodField()

    class Meta:
        model = Comment
        fields = [
            "user",
            "body",
            "created_on",
        ]

    def get_user(self, obj):
        return str(obj.user.username)



class CommentDetailSerializer(ModelSerializer):
    replies = SerializerMethodField()
    user = SerializerMethodField()
    reply_count = SerializerMethodField()

    class Meta:
        model = Comment
        fields = [
            "uuid",
            "user",
            "body",
            "comment_on",
            "created_on",
            "reply_count",
            "replies",
        ]

    def get_user(self, obj):
        return str(obj.user.username)

    def get_replies(self, obj):
        if obj.is_parent:
            return CommentChildSerializer(obj.children(), many=True).data
        return None

    def get_reply_count(self, obj):
        if obj.is_parent:
            return obj.children().count()
        return 0


"""
    "id": 1,
    "body": "Hello There",
    "created_on": "2019-03-06T14:26:15.610849Z",
    "lft": 1,
    "rght": 4,
    "tree_id": 1,
    "level": 0,
    "comment_on": 3,
    "parent": null,
    "user": 13

"""

from rest_framework.serializers import ModelSerializer, HyperlinkedIdentityField


from .models import Comment

class CommentListSerializer(ModelSerializer):
	class Meta:
		model = Comment
		fields = [
			"id",
			"user",
			"parent",
			"body",
			"level",
			"comment_on",
			"created_on",
		]


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

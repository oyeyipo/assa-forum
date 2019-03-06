from rest_framework.serializers import ModelSerializer, HyperlinkedIdentityField


from .models import Comment

class CommentListSerializer(ModelSerializer):
	class Meta:
		model = Comment
		fields = '__all__'




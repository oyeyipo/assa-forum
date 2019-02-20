from rest_framework.serializers import (
    ModelSerializer,
    HyperlinkedIdentityField
)
from .models import User, CorperProfile, StudentProfile


class UserListSerializer(ModelSerializer):
    url = HyperlinkedIdentityField(
        view_name="api:users:detail_delete_update",
        read_only=True,
        lookup_field="username",
    )

    class Meta:
        model = User
        fields = (
            "url", 
            "id",
            "username", 
            "roles", 
            "first_name",
        )


class UserDetailSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = (
            "username", 
            "roles", 
            "bios", 
            "first_name", 
            "last_name", 
            "email"
        )
        read_only_fields = ("id", "email")


class UserCreateSerializer(ModelSerializer):
    url = HyperlinkedIdentityField(
        view_name="api:users:detail_delete_update",
        read_only=True,
        lookup_field="username",
    )
    class Meta:
        model = User
        fields = (
            "url",
            "username", 
            "roles", 
            "email",
            "password",
        )
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username'],
            roles=validated_data['roles']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class CorperProfileSerializer(ModelSerializer):
    class Meta:
        model = CorperProfile
        fields = '__all__'


class StudentProfileSerializer(ModelSerializer):
    class Meta:
        model = StudentProfile
        fields = '__all__'


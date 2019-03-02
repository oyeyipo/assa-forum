from rest_framework.serializers import (
    ModelSerializer,
    HyperlinkedIdentityField,
    SerializerMethodField
)
from .models import Club, GeneralClub, OptionalClub, SpecialCLub


class ClubListSerializer(ModelSerializer):
    class Meta:
        model = Club
        fields = '__all__'


"""

class ThreadListSerializer(ModelSerializer):
    url = HyperlinkedIdentityField(
        view_name="api:threads:detail_delete_update",
        read_only=True,
        lookup_field="uuid",
    )
    owner = SerializerMethodField()

    class Meta:
        model = Thread
        fields = ("url", "owner", "title", "content", "uuid")

    def get_owner(self, obj):
        return str(obj.owner.username)



class ThreadDetailSerializer(ModelSerializer):
    owner = SerializerMethodField()
    class Meta:
        model = Thread
        fields = ("id", "owner", "title", "content", "uuid", "created", "updated")
        read_only_fields = ("created", "updated")

    def get_owner(self, obj):
        return str(obj.owner.username)

"""
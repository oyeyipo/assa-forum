from rest_framework import serializers
from .models import Thread


class ThreadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Thread
        fields = ('id', 'name', 'created', 'updated')
        read_only_fields = ('created', 'updated')
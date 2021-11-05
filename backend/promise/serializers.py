from rest_framework import serializers
from promise.models import Promises


class PromisesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Promises
        fields = "__all__"

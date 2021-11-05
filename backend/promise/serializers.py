from rest_framework import serializers
from promise.models import Elections


class ElctionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Elections
        fields = "__all__"

from rest_framework import serializers
from promise.models import Promises, Candidates


class PromisesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Promises
        fields = "__all__"


class CandidatesSerializer(serializers.ModelSerializer):
    promises = PromisesSerializer(many=True, read_only=True)

    class Meta:
        model = Candidates
        fields = ("hubo_id", "name", "party", "promises")

from django.db import models

# Create your models here.
class Elections(models.Model):
    sgDate = models.IntegerField()
    type = models.IntegerField()
    name = models.CharField(max_length=100)


class Candidates(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    participated = models.ManyToManyField(Elections, related_name="participants")


class Promises(models.Model):
    election_id = models.ForeignKey("Elections", on_delete=models.CASCADE)
    candidate_id = models.ForeignKey("Candidates", on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    contents = models.TextField()

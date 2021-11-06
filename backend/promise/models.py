from django.db import models

# Create your models here.


class Candidates(models.Model):
    hubo_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    party = models.CharField(max_length=100)


class Promises(models.Model):
    vote_date = models.IntegerField
    realm = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    contents = models.TextField()
    written_by = models.ForeignKey(
        "Candidates", related_name="promises", on_delete=models.CASCADE
    )


class Keywords(models.Model):
    keyword = models.CharField(max_length=30)

from django.db import models

# Create your models here.
class Promises(models.Model):
    vote_date = models.IntegerField
    candidate = models.CharField(max_length=100)
    party = models.CharField(max_length=100)
    realm = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    contents = models.TextField()


class Keywords(models.Model):
    keyword = models.CharField(max_length=30)

from django.db import models


class User(models.Model):
    user_name = models.CharField(max_length=255)
    email = models.CharField(max_length=50)
    
    def _str_(self):
        return f"{self.user_name}"

class Canyon_Details(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='canyon', null=True)
    canyon_name = models.CharField(max_length=255)
    rating = models.CharField(max_length=8)
    length = models.CharField(max_length=15)
    gear = models.CharField(max_length=255)
    rappels = models.CharField(max_length=255)
    water = models.CharField(max_length=255)
    flashflood = models.CharField(max_length=255)
    access = models.CharField(max_length=10)
    description = models.TextField()

    def __str__(self):
        return f"{self.canyon_name} /n{self.rating} /n{self.length} /n{self.gear} /n{self.rappels} /n{self.water} /n{self.flashflood} /n{self.access} /n{self.description}"


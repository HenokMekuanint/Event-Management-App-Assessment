from django.db import models

# Create your models here.
from django.conf import settings

class Event(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='events')
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateTimeField()
    location = models.CharField(max_length=255)
    reminder = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.title
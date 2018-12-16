from django.db import models


class Content(models.Model):
    title = models.CharField(max_length=250, default='')
    body = models.TextField(default='')

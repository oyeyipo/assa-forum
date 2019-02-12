from django.db import models

from django.urls import reverse


class Thread(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)


    def get_absolute_url(self):
        return reverse('threads:detail', kwargs={'pk': self.pk})
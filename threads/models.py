from django.db import models
import uuid as uuid_lib
from django.urls import reverse

from accounts.models import User as Bare_User

from django.conf import settings



User = settings.AUTH_USER_MODEL

def get_sentinel_user():

    """
    django 2.1 doc: Page 1119 (1125 of 1894)

    SET()
        Set the ForeignKey to the value passed to SET(), or if a callable is passed in, the result of calling it.
        In most cases, passing a callable will be necessary to avoid executing queries at the time your models.py
        is imported:

    class MyModel(models.Model):
        user = models.ForeignKey(
                settings.AUTH_USER_MODEL,
                on_delete=models.SET(get_sentinel_user),
            )
    """
    del_user = Bare_User.objects.get_or_create(username='deleted')[0]
    return del_user




class Thread(models.Model):
    owner = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200)
    content = models.TextField()
    updated = models.DateTimeField(auto_now=True)
    uuid = models.UUIDField(db_index=True,
                            default=uuid_lib.uuid4,
                            editable=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title[:100]

    def get_absolute_url(self):
        return reverse("api:threads:detail_delete_update", kwargs={"uuid": self.uuid})

    # def comments(self):
    #     return Thread.comments.all()


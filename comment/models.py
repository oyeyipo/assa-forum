from django.db import models
from threads.models import Thread
from django.conf import settings
from mptt.models import MPTTModel, TreeForeignKey
import uuid as uuid_lib
# from shortuuidfield import ShortUUIDField
import shortuuid

User = settings.AUTH_USER_MODEL


class CommentManager(models.Manager):
    def all(self):
        qs = super(CommentManager, self).filter(parent=None)
        return qs


class Comment(MPTTModel):

    uuid = models.UUIDField(db_index=True,
                            default=uuid_lib.uuid4,
                            editable=False)
    body = models.CharField(max_length=280)
    comment_on = models.ForeignKey(Thread, on_delete=models.CASCADE, null=True, related_name='comments')
    parent = TreeForeignKey('self', null=True, blank=True, related_name='replies', db_index=True, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    created_on = models.DateTimeField(auto_now_add=True, editable=False)

    # url = ShortUUIDField(db_index=True, default=uuid_lib.uuid4, editable=False, unique=True)

    objects = CommentManager()

    class MPTTMeta:
        order_insertion_by = ['created_on']

    def __str__(self):
        return str(f'{self.user}: {self.body[:50]}...')

    def children(self):
        return Comment.objects.filter(parent=self)

    @property
    def is_parent(self):
        if self.parent is not None:
            return False
        return True

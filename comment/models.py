from django.db import models
from threads.models import Thread
from django.conf import settings
from mptt.models import MPTTModel, TreeForeignKey

User = settings.AUTH_USER_MODEL


class Comment(MPTTModel):
	body = models.CharField(max_length=280)
	comment_on = models.ForeignKey(Thread, on_delete=models.CASCADE, null=True, related_name='comments')
	parent = TreeForeignKey('self', null=True, blank=True, related_name='replies', db_index=True, on_delete=models.CASCADE)
	user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
	created_on = models.DateTimeField(auto_now_add=True, editable=False)

	def __str__(self):
		return str(f'{self.user}: {self.body[:50]}...')











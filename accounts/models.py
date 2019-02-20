from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver

from django.core.validators import RegexValidator


class User(AbstractUser):

    STUDENT_VAR = 1
    CORPER_VAR = 2
    PREFECT_VAR = 3
    SPECIAL_VAR = 4
    CREATOR_VAR = 5

    ROLE_CHOICES = (
        (STUDENT_VAR, "student"),
        (CORPER_VAR, "corper"),
        # (CREATOR_VAR, "creator"),
        # (PREFECT_VAR, "prefect"),
        # (SPECIAL_VAR, "special"),
    )

    roles = models.PositiveIntegerField(choices=ROLE_CHOICES, null=True)
    bios = models.CharField(max_length=200, blank=True, null=True)


class StudentProfile(models.Model):
    CLASS_CHOICES = ((4, "SS 1"), (5, "SS 2"), (6, "SS 3"))

    # SCHOOL_CHOICES = ((1, "Afiesere Sec. Sch., Afiesere"),)

    user = models.OneToOneField(
        User, on_delete=models.CASCADE, primary_key=True, related_name="student_profile"
    )
    class_in = models.PositiveIntegerField(choices=CLASS_CHOICES, null=True)
    # school = models.PositiveIntegerField(choices=SCHOOL_CHOICES, null=True)

    def __str__(self):
        username = self.user.username
        title = 'Profile for ' + username
        return title


class CorperProfile(models.Model):
    MARITAL_STATUS = (
        (1, "Married"),
        (2, "Single and Searching"),
        (3, "Single"),
        (4, "Widowed"),
    )

    user = models.OneToOneField(
        User, on_delete=models.CASCADE, primary_key=True, related_name="corper_profile"
    )
    state_code_regex = RegexValidator(
            regex = r'^([dtDT]{2}/[\d]{2}[a-cA-C]{1}/[\d]{4})$',
            message = (
                'Enter a valid DT number. This value may contain only letters, '
                'numbers and / eg. DT/18B/3683 '
            ),
            code = 'invalid_dt_number')
    state_code = models.CharField(max_length=11, validators=[state_code_regex], unique=True, null=True)
    marital_status = models.PositiveIntegerField(choices=MARITAL_STATUS, null=True)

    def __str__(self):
        username = self.user.username
        username = username.capitalize()
        title = f'Profile for >> {username}'
        return title


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, *args, **kwargs):
    if instance.roles == User.STUDENT_VAR:
        StudentProfile.objects.get_or_create(user=instance)
        instance.student_profile.save()
    if instance.roles == User.CORPER_VAR:
        CorperProfile.objects.get_or_create(user=instance)
        instance.corper_profile.save()

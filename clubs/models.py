from django.db import models
from multiselectfield import MultiSelectField


STUDENT_VAR = 1
MODERATOR_VAR = 2
PREFECT_VAR = 3
SPECIAL_VAR = 4
SS1_VAR = 5
SS2_VAR = 6
SS3_VAR = 7


STUDENT_ROLE_CHOICE = ((STUDENT_VAR, 'Ord Student'),
                       (SPECIAL_VAR, 'Special Student'),
                       (PREFECT_VAR, 'Prefect'),
                       (MODERATOR_VAR, 'Moderator'),
                       (SS1_VAR, 'SS1 Student'),
                       (SS2_VAR, 'SS2 Student'),
                       (SS3_VAR, 'SS3 Student'),
                       )
class Club(models.Model):
    name = models.CharField(max_length=20)
    description = models.CharField(max_lenght=250, blank=True, null=True)
    rule = models.TextField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)


class GeneralClub(models.Model):
    club = models.OneToOneField(
        Club, on_delete=models.CASCADE, primary_key=True, related_name="general_club"
    )

class OptionalClub(models.Model):
    club = models.OneToOneField(
        Club, on_delete=models.CASCADE, primary_key=True, related_name="optional_club"
    )

class SpecialCLub(models.Model):
    club = models.OneToOneField(
            Club, on_delete=models.CASCADE, primary_key=True, related_name="special_club"
        )
    special_for = MultiSelectField(choices=STUDENT_ROLE_CHOICE, default=1)
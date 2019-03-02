from django.db import models
from multiselectfield import MultiSelectField
from asssa.models import TimeStampedModel
from django.conf import settings


User = settings.AUTH_USER_MODEL

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

GENERAL_CLUB = 1
OPTIONAL_CLUB = 2
SPECIAL_CLUB = 3

CLUB_CHOICES = (
    (GENERAL_CLUB, 'General Club'),
    (OPTIONAL_CLUB, 'Optional Club'),
    (SPECIAL_CLUB, 'Special Club'),
)


class Club(TimeStampedModel):
    name = models.CharField(max_length=20)
    description = models.CharField(max_length=250, blank=True, null=True)
    rule = models.TextField(blank=True, null=True)
    club_type = models.PositiveIntegerField(choices=CLUB_CHOICES)

    __original_club_type = None

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.__original_club_type = self.club_type

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        is_new = self.pk is None
        
        ## THis block of code is useless for now
        if not is_new:
            if self.club_type != self.__original_club_type:
                print(f'there is a diff: orig {self.__original_club_type} != real {self.club_type}')
        ####

        super().save(*args, **kwargs)
        self.__original_club_type = self.club_type

        if self.club_type == GENERAL_CLUB:
            GeneralClub.objects.get_or_create(club=self)
        if self.club_type == SPECIAL_CLUB:
            SpecialCLub.objects.get_or_create(club=self)
        if self.club_type == OPTIONAL_CLUB:
            OptionalClub.objects.get_or_create(club=self)
 

class GeneralClub(TimeStampedModel):
    club = models.OneToOneField(
        Club, on_delete=models.CASCADE, primary_key=True, related_name="general_club"
    )

    def __str__(self):
        name = self.club.name
        title = 'General Group for ' + name
        return title

class OptionalClub(TimeStampedModel):
    club = models.OneToOneField(
        Club, on_delete=models.CASCADE, primary_key=True, related_name="optional_club"
    )
    users_joined = models.ManyToManyField(User, related_name='opt_users',blank=True)

    def __str__(self):
        name = self.club.name
        title = 'Optional Group for ' + name
        return title


class SpecialCLub(TimeStampedModel):
    club = models.OneToOneField(
            Club, on_delete=models.CASCADE, primary_key=True, related_name="special_club"
        )
    special_for = MultiSelectField(choices=STUDENT_ROLE_CHOICE)

    def __str__(self):
        name = self.club.name
        title = 'Special Group for ' + name
        return title

        
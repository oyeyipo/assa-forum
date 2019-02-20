from django.db import models


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
    special_for = models.PositiveIntegerField(choices=)
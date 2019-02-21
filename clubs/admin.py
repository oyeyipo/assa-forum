from django.contrib import admin

from .models import Club, GeneralClub, OptionalClub, SpecialCLub


@admin.register(Club)
class ClubAdmin(admin.ModelAdmin):
    list_display = ['name', 'description', 'created']
    list_filter = ['created', 'updated']


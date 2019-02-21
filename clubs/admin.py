from django.contrib import admin

from .models import Club, GeneralClub, OptionalClub, SpecialCLub


@admin.register(Club)
class ClubAdmin(admin.ModelAdmin):
    list_display = ["name", "description", "created"]
    list_filter = ["created", "updated"]


@admin.register(GeneralClub)
class GeneralClubAdmin(admin.ModelAdmin):
    pass

@admin.register(OptionalClub)
class OptionalClubAdmin(admin.ModelAdmin):
    pass

@admin.register(SpecialCLub)
class SpecialCLubAdmin(admin.ModelAdmin):
    pass

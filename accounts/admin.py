from django import forms
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.admin.widgets import FilteredSelectMultiple
from django.forms import ModelForm

from .models import CorperProfile, StudentProfile, User
from django.contrib.auth.models import Group
from django.contrib.auth.forms import ReadOnlyPasswordHashField

class UserCreationForm(forms.ModelForm):
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Repeat Password', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = '__all__'

    def clean_password2(self):
        # check that the two password entries match
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwors don't match")
        return password2

    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super().save(commit=False)
        user.set_password(self.cleaned_data['password1'])
        if commit:
            user.save()
        return user

class UserChangeForm(forms.ModelForm):
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = '__all__'

    def clean_password(self):
        return self.initial['password']

class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm

    list_display = ('username', 'email', 'is_staff')
    list_filter = ('is_staff',)
    fieldsets = (
        (None, 
            {'fields': ('username', 'password', 'roles')}
        ),
        (
            'Personal Details', {
                'fields': (
                    ('first_name', 'last_name',),
                    'email',
                    'bios'
                )
            }
        ),
        (
            'Permissions', {
                'fields': (
                    ('is_staff', 'is_active', 'is_superuser'),
                    'groups',
                    'user_permissions'
                )
            }
        ),
        (
            'Important Dates', {
                'fields': (
                    ('date_joined', 'last_login')
                )
            }
        ),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'roles', 'bios', 'first_name', 'last_name','email', 'password1', 'password2')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ('groups', 'user_permissions')


@admin.register(CorperProfile)
class CorperProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'state_code', 'marital_status']

@admin.register(StudentProfile)
class StudentProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'class_in']
    

admin.site.register(User, UserAdmin)


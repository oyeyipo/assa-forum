# Generated by Django 2.1.7 on 2019-03-02 10:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import multiselectfield.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Club',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('updated', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('name', models.CharField(max_length=20)),
                ('description', models.CharField(blank=True, max_length=250, null=True)),
                ('rule', models.TextField(blank=True, null=True)),
                ('club_type', models.PositiveIntegerField(choices=[(1, 'General Club'), (2, 'Optional Club'), (3, 'Special Club')])),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='GeneralClub',
            fields=[
                ('updated', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('club', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='general_club', serialize=False, to='clubs.Club')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='OptionalClub',
            fields=[
                ('updated', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('club', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='optional_club', serialize=False, to='clubs.Club')),
                ('users_joined', models.ManyToManyField(blank=True, related_name='opt_users', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='SpecialCLub',
            fields=[
                ('updated', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('club', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='special_club', serialize=False, to='clubs.Club')),
                ('special_for', multiselectfield.db.fields.MultiSelectField(choices=[(1, 'Ord Student'), (4, 'Special Student'), (3, 'Prefect'), (2, 'Moderator'), (5, 'SS1 Student'), (6, 'SS2 Student'), (7, 'SS3 Student')], max_length=13)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]

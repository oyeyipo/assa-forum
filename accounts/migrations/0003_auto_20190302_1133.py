# Generated by Django 2.1.7 on 2019-03-02 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_remove_studentprofile_school'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='roles',
            field=models.PositiveIntegerField(choices=[(1, 'student'), (2, 'corper')], null=True),
        ),
    ]

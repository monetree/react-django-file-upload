# Generated by Django 2.1.3 on 2018-11-12 14:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('access', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='register',
            name='verified',
            field=models.BooleanField(default=False),
        ),
    ]

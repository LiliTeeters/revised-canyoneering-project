# Generated by Django 3.2.9 on 2021-12-20 22:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('canyoneering_app', '0006_auto_20211220_2159'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='canyon_details',
            name='user',
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]

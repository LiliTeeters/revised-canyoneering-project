from django.contrib import admin
from canyoneering_app.models import User, Canyon_Details

my_app_models = [User, Canyon_Details]
admin.site.register(my_app_models)

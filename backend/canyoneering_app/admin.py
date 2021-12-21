from django.contrib import admin
from canyoneering_app.models import Canyon_Details

my_app_models = [ Canyon_Details]
admin.site.register(my_app_models)

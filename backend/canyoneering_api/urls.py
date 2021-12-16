
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('canyons/', include('canyoneering_app.urls')),
]

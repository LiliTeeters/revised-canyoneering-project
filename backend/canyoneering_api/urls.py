
from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('canyons/', include('canyoneering_app.urls')),
    path('token-auth/', obtain_jwt_token),
]

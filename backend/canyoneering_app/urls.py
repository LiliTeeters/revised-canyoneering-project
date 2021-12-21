
from django.urls import path
from canyoneering_app.views import *
from .views import CanyonViewSet, UserViewSet 
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'canyons', CanyonViewSet, basename='canyons')

urlpatterns = router.urls
urlpatterns += [
    path('current_user/', current_user),
    path('users/', UserList.as_view())
]

from django.urls import path
from canyoneering_app.views import *

from .views import CanyonViewSet # This library gives us all of the functions usually found in views.py
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', CanyonViewSet, basename='canyon')
urlpatterns = router.urls

# urlpatterns = [
#     path('', canyons_list, name='canyons_list'),
#     path('create', create_canyon, name='create_canyon'),
#     path('<int:canyon_id>', canyon_detail, name='canyon_detail'),
#     path('<int:canyon_id>/update', update_canyon, name='update_canyon'),
#     path('<int:canyon_id>/delete', delete_canyon, name='delete_canyon'),
# ]
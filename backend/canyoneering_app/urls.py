
from django.urls import path
from canyoneering_app.views import *
from .views import CanyonViewSet, UserViewSet, current_user, UserList, add_favorite, user_favorites
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'canyons', CanyonViewSet, basename='canyons')

urlpatterns = router.urls
urlpatterns += [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('add_favorite/', add_favorite, name='add_favorite'),
    path('favorites/<int:user_id>/', user_favorites, name='user_favorites'), 

]
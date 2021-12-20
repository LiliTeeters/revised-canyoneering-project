from rest_framework import serializers
from .models import User, Canyon_Details

class CanyonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Canyon_Details
        fields = ['canyon_name', 'rating', 'length', 'gear', 'rappels', 'water', 'flashflood', 'access', 'description']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'user_name', 'email', 'canyon']
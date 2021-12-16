from django.shortcuts import render
from .models import Canyon_Details
from rest_framework import viewsets
from .serializers import CanyonSerializer
# Create your views here.

class CanyonViewSet(viewsets.ModelViewSet):
    queryset = Canyon_Details.objects.all()
    serializer_class = CanyonSerializer
    
# def canyons_list(request):
#     pass

# def create_canyon(request):
#     pass

# def canyon_detail(request, canyon_id):
#     pass

# def update_canyon(request, canyon_id):
#     pass

# def delete_canyon(request, canyon_id):
#     pass
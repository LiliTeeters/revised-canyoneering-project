from django.shortcuts import render
from .models import Canyon_Details
from rest_framework import viewsets
from .serializers import CanyonSerializer, UserSerializer, UserSerializerWithToken
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.

class CanyonViewSet(viewsets.ModelViewSet):
    queryset = Canyon_Details.objects.all()
    serializer_class = CanyonSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

## The core of this functionality is the api_view decorator, which takes a list of HTTP methods that your view should respond to.
@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    print("hellow testing")
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
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
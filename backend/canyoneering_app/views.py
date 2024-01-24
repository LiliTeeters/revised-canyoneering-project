from django.shortcuts import get_object_or_404, render
from .models import Canyon_Details, Favorite
from rest_framework import viewsets
from .serializers import CanyonSerializer, UserSerializer, UserSerializerWithToken
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
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
    
@api_view(['POST'])

def add_favorite(request):
    user_id = request.data.get('userId')
    canyon_id = request.data.get('canyonId')

    # Fetch user and canyon from the database
    user = User.objects.get(pk=user_id)
    canyon = Canyon_Details.objects.get(pk=canyon_id)

    # Create a new favorite
    favorite, created = Favorite.objects.get_or_create(user=user, canyon=canyon)

    if created:
        return Response({'status': 'Favorite added'}, status=status.HTTP_201_CREATED)
    else:
        return Response({'status': 'Favorite already exists'}, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_favorites(request, user_id):
    """
    Fetch a list of favorite canyons for a given user.
    """
    user = get_object_or_404(User, pk=user_id)
    favorites = Favorite.objects.filter(user=user)
    data = [CanyonSerializer(favorite.canyon).data for favorite in favorites]
    return Response(data)
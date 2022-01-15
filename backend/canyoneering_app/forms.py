from django import forms
from .models import User, Canyon_Details

class CanyonForm(forms.ModelForm):
    class Meta:
        model = Canyon_Details
        fields = ('canyon_name', 'rating', 'length', 'gear', 'rappels', 'water', 'flashflood', 'access', 'description', 'latitude', 'longitude')
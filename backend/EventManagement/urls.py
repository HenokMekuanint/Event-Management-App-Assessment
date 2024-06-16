from django.contrib import admin
from django.urls import path,include
from .views import CreateEventView,UpdateEventView,GetEventsView,DeleteEventView
urlpatterns = [
    path('createEvent',CreateEventView.as_view()),
    path('editEvent',UpdateEventView.as_view()),
    path('getEvent',GetEventsView.as_view()),
    path('deleteEvent',DeleteEventView.as_view())
 
]
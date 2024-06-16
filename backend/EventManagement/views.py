from django.shortcuts import render
from rest_framework.views import APIView
import jwt
from authentication.models import User
from .serializers import EventSerializer
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import Event
# Create your views here.
class CreateEventView(APIView):
    permission_classes =[IsAuthenticated]
    def post(self, request):
        # The user is automatically attached to the request after successful authentication
        user = request.user

        # Modify the request data to include the user
        data = request.data.copy()
        data['user'] = user.id

        # Validate and save the event data using the serializer
        serializer = EventSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
class GetEventsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        events = Event.objects.filter(user=request.user)
        if not events:
            return Response({'error': 'Event not found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)
    
class DeleteEventView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, event_id):
        event = Event.objects.filter(id=event_id, user=request.user).first()
        if not event:
            return Response({'error': 'Event not found'}, status=status.HTTP_404_NOT_FOUND)
        event.delete()
        return Response({'message': 'Event deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
    
class UpdateEventView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, event_id):
        event = Event.objects.filter(id=event_id, user=request.user).first()
        if not event:
            return Response({'error': 'Event not found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = EventSerializer(event, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
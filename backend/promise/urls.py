from django.urls import path, include
from rest_framework.routers import DefaultRouter
from promise import views

# Create a router and register our viewsets with it.
# router = DefaultRouter()
# router.register(r"", views.PromiseView)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path("", views.PromiseView.as_view()),
]

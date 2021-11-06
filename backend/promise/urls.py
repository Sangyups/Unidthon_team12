from django.urls import path
from promise import views

# Create a router and register our viewsets with it.
# router = DefaultRouter()
# router.register(r"", views.PromiseView)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path("promise/", views.PromiseView.as_view()),
    path("admin/", views.AdminView.as_view()),
    path("keywords/", views.KeywordsView.as_view()),
]

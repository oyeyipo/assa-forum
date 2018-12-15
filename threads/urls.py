from django.urls import path
from threads import views

app_name='threads'
urlpatterns = [
    path('list', views.threads_page, name='list'),
]
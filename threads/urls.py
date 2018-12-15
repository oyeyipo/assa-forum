from django.urls import path
from threads import views

app_name='threads'
urlpatterns = [
    path('lists', views.threads_page, name='lists'),
]
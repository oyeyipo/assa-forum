from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views

app_name = "asssa"
urlpatterns = [
    # APp Urls 
    path("users/", include("accounts.urls", namespace="users")),
    path("threads/", include("threads.urls", namespace="threads")),
    path("clubs/", include("clubs.urls", namespace="clubs")),

    # Auth token urls
    path("token/", jwt_views.TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", jwt_views.TokenRefreshView.as_view(), name="token_refresh"),
]


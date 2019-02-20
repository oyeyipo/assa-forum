from django.urls import include, path

from .views import UserListCreate, UserDetailCreate, UserProfileDetailAPIView

app_name = "acccounts"
urlpatterns = [
    path("", UserListCreate.as_view(), name="list_create"),
    path("<slug:username>/", UserDetailCreate.as_view(), name="detail_delete_update"),
    path("<slug:username>/profile/", UserProfileDetailAPIView.as_view(), name="profile"),
    # path("hello", HelloView.as_view(), name="hello"),
]

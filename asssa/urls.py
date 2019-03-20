from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path("admin/", admin.site.urls),

    path('api/', include('asssa.api_urls', namespace="api"), name='api'),

]

if settings.DEBUG:
    urlpatterns+= (static(settings.STATIC_URL, document_root=settings.STATIC_ROOT))

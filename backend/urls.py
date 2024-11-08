from django.urls import path, include
from rest_framework.routers import DefaultRouter
from todos.views import TodoViewSet
from django.conf.urls.static import static
from django.conf import settings

router = DefaultRouter()
router.register(r'todos', TodoViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

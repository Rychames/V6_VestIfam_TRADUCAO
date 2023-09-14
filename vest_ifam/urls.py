from django.urls import path
from . import views

app_name = "vest_ifam"

urlpatterns = [
    path('', views.index, name="index"),
    path('quiz/', views.quiz, name="quiz"),
    path('start_quiz/', views.start_quiz, name="start_quiz"),
    path('questions_quiz/', views.questions_quiz, name="questions_quiz"),
    path('video_class/', views.video_class, name="video_class"),

]

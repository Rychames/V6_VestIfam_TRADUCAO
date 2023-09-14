from django.shortcuts import render


def index(request):
    return render(request, 'vest_ifam/pages/index.html')

def quiz(request):
    return render(request, 'vest_ifam/pages/quiz.html')

def start_quiz(request):
    return render(request, 'vest_ifam/pages/start_quiz.html')

def questions_quiz(request):
    return render(request, 'vest_ifam/pages/questions_quiz.html')

def video_class(request):
    return render(request, 'vest_ifam/pages/video_class.html')
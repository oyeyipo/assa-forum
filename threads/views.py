from django.shortcuts import render

def threads_page(request):
    return render(request, 'threads/list.html')

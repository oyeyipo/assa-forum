from django.shortcuts import render

def threads_page(request):
    return render(request, 'list.html')

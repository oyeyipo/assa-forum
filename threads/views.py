from django.shortcuts import render
from django.http import HttpResponse


def threads_page(request):
    title = request.POST.get('title_text', '')
    content = request.POST.get('content_text', '')
    context = {
        'new_content_title': title,
    }
    return render(request, 'threads/list.html', context)

from django.shortcuts import redirect, render
from threads.models import Content


def threads_page(request):
    # TODO: Display multiple items in the table
    # TODO: Support more than one list!
    if request.method == 'POST':
        new_title = request.POST['title_text']
        new_body = request.POST['content_text']
        Content.objects.create(title=new_title, body=new_body)
        return redirect('/threads/list')

    contents = Content.objects.all()
    context = {'contents': contents}
    return render(request, 'threads/list.html', context)

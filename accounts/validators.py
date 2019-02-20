from .models import CorperProfile
from django.core.exceptions import ValidationError


def validate_state_code(value):
    # obj = CorperProfile.objects.all().exclude(state_code=value)
    print(CorperProfile.objects.all())

    print('-------------------------')
    obj = CorperProfile.objects.filter(state_code=value)
    item = CorperProfile.objects.get(state_code=value)
    print(item.user)

    if obj.exists():
        if not item.user:
            raise ValidationError('This DT number already exists')
    return value
from django.contrib import admin
from django.utils.safestring import mark_safe
from .models import Elections
from .models import Candidates
from .models import Promises


@admin.register(Elections)
class ElctionsAdmin(admin.ModelAdmin):
    list_display = ["id", "sgDate", "type", "name"]

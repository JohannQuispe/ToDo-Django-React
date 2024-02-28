from django.db import models

# Create your models here.
class Task(models.Model):
    title=models.CharField(max_length=255, null=True,blank=True)
    description = models.TextField(blank=True, null=True)
    done = models.BooleanField(default=False)
    def __str__(self) -> str:
        return self.title
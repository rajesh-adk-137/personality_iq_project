
from django.db import models
from django.contrib.auth.models import AbstractUser

class UserSystem(AbstractUser):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=150, blank=True, null=True)
    password=models.CharField(max_length=255)
    username=None
    
    
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=[]

    groups = models.ManyToManyField('auth.Group', related_name='custom_usersystem_groups', blank=True)
    user_permissions = models.ManyToManyField('auth.Permission', related_name='custom_usersystem_user_permissions', blank=True)
    
    
    
    
    




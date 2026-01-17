from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerealizer(serializers.ModelSerializer):
  password=serializers.CharField(writeonly=True)
  class Meta:
    model=User
    fields=['username','email','password']

  def create(self,validated_data):
    # user=User.objects.create(**validated_data  ) or
    user=User.objects.create_user(
      user=validated_data['username'],
      user=validated_data['email'],
      user=validated_data['password'],
    )  
    return user


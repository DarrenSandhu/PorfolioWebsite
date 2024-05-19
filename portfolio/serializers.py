from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Education, Experience, Project, CustomUser, Skill, Programming

class ProgrammingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Programming
        fields = '__all__'
class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

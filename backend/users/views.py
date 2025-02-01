
        
        
        
        
import jwt
import datetime
from django.contrib.auth import authenticate
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from .serializers import UserSerializer
from .models import UserSystem


class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        response = Response()
        response.data = {
            'message': f"Hi {user.name}, you've been registered successfully"
        }

        return response

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = UserSystem.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User not found')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect Password')

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response()
        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }

        return response


def login_required(view_func):
    def wrapper(self, request, *args, **kwargs):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed("Unauthenticated")

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Unauthenticated")

        return view_func(self, request, *args, **kwargs)

    return wrapper




class LogoutView(APIView):
    def post(self, request):
        response=Response()
        response.delete_cookie('jwt')
        response.data={
            'response':'success'
        }
        return response
    

#this works fine too. it also allows the cookies


# class UserView(APIView):
#     def get(self, request):
#         auth_header = request.headers.get('Authorization')
#         cookie_token = request.COOKIES.get('jwt')

#         token = None

#         if auth_header and auth_header.startswith('Bearer '):
#             token = auth_header.split('Bearer ')[1]
#         elif cookie_token:
#             token = cookie_token

#         if not token:
#             raise AuthenticationFailed("Invalid token")

#         try:
#             payload = jwt.decode(token, 'secret', algorithms=['HS256'])
#             user_id = payload['id']
#             user = UserSystem.objects.filter(id=user_id).first()

#             if not user:
#                 raise AuthenticationFailed("User not found")

#             response_data = {
#                 'name': user.name,
#                 'email': user.email
#                 # Add more fields if needed
#             }

#             return Response(response_data)
#         except jwt.ExpiredSignatureError:
#             raise AuthenticationFailed("Token expired")
#         except jwt.InvalidTokenError:
#             raise AuthenticationFailed("Invalid token")




    
import jwt
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from .models import UserSystem

class UserView(APIView):
    def get(self, request):
        auth_header = request.headers.get('Authorization')

        if not auth_header or not auth_header.startswith('Bearer '):
            raise AuthenticationFailed("Invalid token")

        token = auth_header.split('Bearer ')[1]

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
            user_id = payload['id']
            user = UserSystem.objects.filter(id=user_id).first()

            if not user:
                raise AuthenticationFailed("User not found")

            # Construct the response without including the 'password' field
            response_data = {
                'name': user.name,
                'email': user.email
                # Add more fields if needed
            }

            return Response(response_data)
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Token expired")
        except jwt.InvalidTokenError:
            raise AuthenticationFailed("Invalid token")
    
    
    
    
    


class ArrayProcessView(APIView):
    def post(self, request):
        input_array = request.data.get('input_array')

        if len(input_array) != 20:
            return Response({"error": "Input array should be of size 20"}, status=400)

        # Custom logic to process the input array and generate an output array of size 12
        output_array = calculate_trait(input_array)

        return Response({"output_array": output_array})






import numpy as np

def calculate_trait(input_array):
    m = np.zeros((20, 5))  # Initialize a matrix of size 20*5 with zeros

    for i, option in enumerate(input_array):
        m[i][option - 1] = 1  # Mark the selected option position as 1

    a = 1
    b = 0.8
    c = 0.5
    d = -0.5
    e = -1

    trait = np.zeros(12)

    trait[0] = a*(    m[0][3]+   m[0][4]+m[10][1]    )+b*( m[0][2]+m[10][2]+m[14][3]+m[13][0]      )+c*( m[10][4]+  m[10][3]+m[14][1]+m[14][2]      )+d*(    m[0][1]+m[14][0]    ) +e*(    m[0][0]+m[10][0]    ) 




    trait[1] = a*(    m[0][0]+  m[10][0]     )+b*( m[10][3]+  m[14][0]+ m[13][2]+ m[13][4]     )+c*( m[0][1]+  m[10][4]+ m[10][2]+ m[15][1]+ m[15][2]      )+d*(    m[0][2]+m[10][2]+ m[14][3]    ) +e*(    m[0][4]+m[0][3]) 





    trait[2] = a*(    m[4][3]+   m[5][2]+ m[5][4]    )+b*( m[2][2]+ m[2][3]+ m[5][1]+ m[13][0]      )+c*( m[2][0]+  m[2][1]+ m[4][1]+ m[13][1]+ m[15][4]       )+d*(    m[4][2]+   m[4][0]+ m[15][0]  ) +e*(    m[2][4]+  m[4][0]+ m[5][3]   ) 




    trait[3] = a*(    m[6][4]+   m[9][0]+m[12][4]    )+b*( m[6][3]+  m[12][3]+m[7][0]+m[11][0]    )+c*( m[6][2]+ m[9][1]+m[12][2]+m[11][1]+m[19][0]+m[19][2]       )+d*(    m[6][1]+m[9][4]+m[12][1]+m[7][4]+m[11][4]+m[19][1]) +e*(    m[6][0]+ m[12][0]   ) 



    trait[4] = a*(    m[16][4]+ m[8][0]      )+b*( m[18][1]+m[8][1]+m[3][2]      )+c*( m[18][3]+m[16][3]+m[8][3]+m[0][3]+m[4][3]        )+d*(    m[18][4]+m[16][1]+m[8][2]    ) +e*(    m[16][0]+m[8][4]    ) 




    trait[5] = a*(    m[17][4]       )+b*( m[1][2]+m[4][3]+m[5][2]+m[17][3]+m[15][1]  )+c*( m[1][0]+m[4][1]+m[5][1]+m[8][3]+m[17][1]       )+d*(    m[4][0]+ m[5][3]+m[17][3]   ) +e*(    m[8][4]    ) 




    trait[6] = a*(    m[16][0]+  m[8][2]     )+b*( m[16][1]+ m[7][4]+m[8][4]+m[13][0]     )+c*( m[16][2]+ m[7][3]+m[8][3]+m[13][1]+m[4][4]      )+d*(    m[16][3]+m[7][0]+m[8][0]+m[4][3]    ) +e*(    m[16][4]+m[8][1]    ) 



    trait[7] = a*(    m[13][0]       )+b*( m[3][2]+m[4][1]+m[8][1]+m[18][1]      )+c*( m[3][0]+m[4][3]+m[8][3]+m[13][1]+m[15][4]        )+d*(    m[4][4]+m[8][4]+m[13][2]+m[13][3]    ) +e*(    m[3][3]    ) 



    trait[8] = a*(    m[17][3]       )+b*( m[1][4]+m[5][1]+m[17][1]      )+c*( m[1][2]+m[2][3]+m[3][1]+m[3][4]+m[5][0]    )+d*(    m[1][0]+m[1][1]+m[3][0]+m[3][2]+m[5][3]+m[17][2]    ) +e*(    m[17][0]  )
    

    trait[9] = a*(    m[10][3]    )+b*( m[2][1]+ m[9][4]+m[10][0]+m[14][0]+m[14][1]     )+c*( m[2][3]+m[2][0]+m[9][2]+m[14][2]        )+d*(    m[9][0]+m[10][2]+m[14][3]    ) +e*(    m[2][4]    ) 



    trait[10] = a*(    m[12][2]+m[5][1]       )+b*( m[19][1]+m[11][3]+m[11][4]+m[5][2]      )+c*( m[19][2]+ m[12][0]+m[11][2]+m[6][1]+m[7][0]       )+d*(    m[11][0]+m[11][1]+m[6][3]+m[6][4]+m[5][0]    ) +e*(    m[19][3]+m[5][3]    )

    

    trait[11]= a*(    m[3][4]       )+b*( m[19][4]+m[17][1]+m[15][4]+m[13][3]+m[2][0]      )+c*( m[19][2]+ m[18][3]+m[12][2]+m[3][1]+m[2][4]       )+d*(    m[19][3]+m[18][4]+m[17][2]+m[13][1]+m[2][1]    ) +e*(    m[3][0]   ) 

    print(trait)
    

    trait = [x * 10 for x in trait]
    trait = (np.clip(trait, 0, None) ** 2)
    trait = 100 * trait / np.sum(trait)
    
    trait = trait.astype(int)
    return trait





















# import random

# def custom_processing_logic(input_array):
#     # Ensure the input array has at least 12 elements
#     if len(input_array) < 12:
#         return "Input array should have at least 12 elements"

#     # Adjust the first 12 elements to sum up to 100
#     output_array = input_array[:12]

#     # Calculate the sum of the first 12 elements
#     current_sum = sum(output_array)

#     # Adjust the elements proportionally to sum up to 100
#     if current_sum != 0:
#         scaling_factor = 100 / current_sum
#         output_array = [value * scaling_factor for value in output_array]

#     return output_array

# # Generate a sample input array
# input_array = [random.uniform(1, 10) for _ in range(20)]  # Generating an input array with 20 random numbers

# output_array = custom_processing_logic(input_array)
# print(output_array)


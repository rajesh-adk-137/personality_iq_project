---
# 🧠 Personality IQ - Full Stack App (Django + React)

<p align="center">
  <a href="https://github.com/rajesh-adk-137/personality_iq_project" target="blank">
    <img src="https://img.shields.io/github/watchers/rajesh-adk-137/personality_iq_project?style=for-the-badge&logo=appveyor" alt="Watchers"/>
  </a>
  <a href="https://github.com/rajesh-adk-137/personality_iq_project/fork" target="blank">
    <img src="https://img.shields.io/github/forks/rajesh-adk-137/personality_iq_project?style=for-the-badge&logo=appveyor" alt="Forks"/>
  </a>
  <a href="https://github.com/rajesh-adk-137/personality_iq_project/stargazers" target="blank">
    <img src="https://img.shields.io/github/stars/rajesh-adk-137/personality_iq_project?style=for-the-badge&logo=appveyor" alt="Stars"/>
  </a>
</p>
<p align="center">
  <a href="https://github.com/rajesh-adk-137/personality_iq_project/issues" target="blank">
    <img src="https://img.shields.io/github/issues/rajesh-adk-137/personality_iq_project?style=for-the-badge&logo=appveyor" alt="Issues"/>
  </a>
  <a href="https://github.com/rajesh-adk-137/personality_iq_project/pulls" target="blank">
    <img src="https://img.shields.io/github/issues-pr/rajesh-adk-137/personality_iq_project?style=for-the-badge&logo=appveyor" alt="Open Pull Requests"/>
  </a>
</p>
<p align="center">
  <a href="https://github.com/rajesh-adk-137/personality_iq_project/blob/master/LICENSE" target="blank">
    <img src="https://img.shields.io/github/license/rajesh-adk-137/personality_iq_project?style=for-the-badge&logo=appveyor" alt="License"/>
  </a>
</p>

A full-stack web application using Django (REST API) for the backend and React for the frontend. This project enables users to take Personality and IQ tests to gain insights into their traits and cognitive abilities. The Personality Test is fully functional, providing users with analytical results based on psychological models. The IQ Test is currently under development and will include logic-based questions to assess intelligence.

This project serves as a learning experience in implementing databases, authentication, REST APIs, and frontend development while creating an engaging and interactive user experience. 

(This project was completed in 2023, reuploaded in this new repo with proper formatting and installation guide.)

---

## 📌 Features
✅ **User authentication** using JWT tokens  
✅ **Personality Test**: 20 questions mapped mathematically to personality types  
✅ **Results Calculation**: Personality scores displayed after completion  
✅ **Database**: MySQL for data storage  
✅ **REST API**: Built with Django REST Framework  
✅ **Frontend**: React with Bootstrap for UI  
✅ **Backend**: Django with CORS-enabled API  

---

## 🚀 Tech Stack
- **Backend:** Django, Django REST Framework, MySQL  
- **Frontend:** React, React Router, Bootstrap  
- **Other:** JWT authentication, Axios, CORS  

---

## 🛠️ Installation Guide

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/rajesh-adk-137/personality_iq_project.git
```

```sh
cd personality_iq_project
```

---

### 2️⃣ Backend Setup (Django)

#### Navigate to the backend directory
```sh
cd backend
```

#### Create a virtual environment
```sh
python -m venv env
```

#### Activate the virtual environment
**Windows:**
```sh
env\Scripts\activate
```
**Mac/Linux:**
```sh
source env/bin/activate
```

#### Install dependencies
```sh
pip install -r requirements.txt
```

#### MySQL Database Setup
1. Install **XAMPP** and start **Apache & MySQL** servers.  
2. Open **phpMyAdmin** and create a new database:  
   **Database Name:** `personality_iq_db`  
3. Update `backend/django_backend/settings.py` with your MySQL database credentials:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'personality_iq_db',
        'USER': 'root',  # Change if necessary
        'PASSWORD': '',  # Set if you have a MySQL password
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

#### Apply migrations
```sh
python manage.py migrate
```

#### Start the backend server
```sh
python manage.py runserver
```
➡️ The backend will run at: **`http://127.0.0.1:8000/`**

---

### 3️⃣ Frontend Setup (React)

#### Navigate to the frontend directory
```sh
cd ../frontend
```

#### Install dependencies
```sh
npm install --legacy-peer-deps
```

#### Start the React app
```sh
npm start
```
➡️ The frontend will run at: **`http://localhost:3000/`**

---

## 📡 API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/register/` | Register a new user |
| `POST` | `/api/login/` | Authenticate user & return JWT token |
| `GET`  | `/api/personality-test/` | Retrieve personality test questions |
| `POST` | `/api/personality-test/submit/` | Submit answers and get results |

---

## 📸 Screenshots  

Here are some screenshots of the project interface:

| Page | Hosted Image |
|------|--------------|
| **Landing Page** | ![Landing Page](https://github.com/user-attachments/assets/d87a7819-dbe3-45f5-bcea-046bcf742c8c) |
| **Signup Page** | ![Signup Page](https://github.com/user-attachments/assets/918f0e6a-044b-441a-a8f1-aebfcd9f562b) |
| **Personality Test - Question 1** | ![Question 1](https://github.com/user-attachments/assets/d18cdef2-9f48-49dd-8323-2576c345dde0) |
| **Personality Test - Question 20** | ![Question 20](https://github.com/user-attachments/assets/658a5db0-1c42-4ac5-a562-3863b4066d79) |
| **Results Page** | ![Results Page](https://github.com/user-attachments/assets/9623b1f6-52f5-40ee-899a-64b436898b9c) |
| **Details Page** | ![Details Page](https://github.com/user-attachments/assets/6c2f12ac-9364-40eb-9555-71ea5bc8fcec) |
| **IQ Test Section** | ![IQ Test Section](https://github.com/user-attachments/assets/32b90f3c-0f80-472a-8003-1e9d46406413) |


---

## 🤝 Contributing
Want to improve this project? Feel free to submit a **pull request**!  

---

## 📜 License
This project is licensed under the **MIT License**.  
---

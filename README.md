# 🧠 Personality IQ - Full Stack App (Django + React)

A full-stack application built using **Django (REST API)** for the backend and **React** for the frontend. This project was created as a learning experience in implementing databases, Django, and React. While the personality test is fully functional, the IQ test section is still under development.

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
git clone <your-repo-url>
cd personality_iq_project
```

---

### 2️⃣ Backend Setup (Django)
```sh
cd backend  # Navigate to backend directory
python -m venv env  # Create a virtual environment
env\Scripts\activate  # Activate the virtual environment (Windows)
pip install -r requirements.txt  # Install dependencies
```

#### **MySQL Database Setup**
1. Install **XAMPP** and run **Apache & MySQL** servers.
2. Open **phpMyAdmin** and create a new database (e.g., `personality_iq_db`).
3. Update `backend/settings.py` with your MySQL database credentials:

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

4. Apply migrations and start the backend:
```sh
python manage.py migrate  # Apply migrations
python manage.py runserver  # Start the Django server
```
➡️ Backend will run at: **`http://127.0.0.1:8000/`**

---

### 3️⃣ Frontend Setup (React)
```sh
cd frontend  # Navigate to frontend directory
npm install --legacy-peer-deps  # Install dependencies
npm start  # Start the React app
```
➡️ Frontend will run at: **`http://localhost:3000/`**

---

## 📡 API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/register/` | Register a new user |
| `POST` | `/api/login/` | Authenticate user & return JWT token |
| `GET` | `/api/personality-test/` | Retrieve personality test questions |
| `POST` | `/api/personality-test/submit/` | Submit answers and get results |

---

## 📸 Screenshots (To Be Added)
*(Upload project images here)*

---

## 🤝 Contributing
Want to improve this project? Feel free to submit a pull request!

---

## 📜 License
This project is licensed under the **MIT License**.

---


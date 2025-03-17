# chat-application
A live chat application is a real-time communication tool that allows users to communicate end to end communication

# MERN Stack Chat Application  

A real-time chat application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO for real-time communication.  

## Features  

- Real-time messaging  
- User authentication  
- Chat history  
- Typing indicators  
- Responsive design  

## Prerequisites  

- Node.js (>=16.0.0)  
- npm (>=8.0.0)  
- MongoDB (local or cloud-based)  
- Modern web browser  

## Technologies Used  

- **Frontend:** React.js  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Real-time Communication:** Socket.IO  
- **Authentication:** JSON Web Tokens (JWT)  
- **Additional Libraries:** CORS, dotenv, Axios  

## Installation  

1. Clone the repository:  
2. Create a .env file in both the root directory and update the following variables:
   
PORT=5000  
DB_URI=[your-mongodb-uri]  
JWT_SECRET=[your-secret-key]  
JWT_EXPIRES_IN=[expires-time]  

3.Install dependencies for both frontend and backend:

npm install  
cd frontend && npm install  

Start the backend server:
npm start  

Start the frontend development server:
cd frontend && npm run dev  

The application will be available at http://localhost:3000 for the frontend and http://localhost:5000 for the backend API.

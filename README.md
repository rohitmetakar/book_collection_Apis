# Technoology
  - Node.js
  - mongoDB
# Set up Repo
 - clone code git repo
# API endpoint : 

 - Registration ( create for user authentication) 
   - POST - http://localhost:4080/api/auth/userRegister   // { "userName": "roht",  "password": "Guddu@123"}
 - Login : ( create for user authentication)
   - POST - http://localhost:4080/api/auth/login    // { "userName": "rohit", "password": "Rohit@123" }
 - Book collection APIs:
   - POST - http://localhost:4080/api/auth/books    // {"title":"shivcharitrya","author":"xkmksd","year":"34234","genre":"iissssss"} and authToken
   - GET - http://localhost:4080/api/auth/getBooks  authToken
   - GET - http://localhost:4080/api/auth/getBooks/:id  // get by id and authToken
   - PUT - http://localhost:4080/api/auth/updateBook/:id  // update bok by id and authToken
   - DELETE - http://localhost:4080/api/auth/deleteBook/:id  // delete book by id and authToken
# dependencies : 
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "joi": "^17.13.3",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.6.1"
# .env file for adding :
     PORT = 4080
     MONGO_URI = "mongodb+srv://rohitmetakar3112:bl1JDTKODKob3ICE@cluster0.iyzpdih.mongodb.net/video_data?retryWrites=true&w=majority&appName=Cluster0"
     JWT_SECRET=your_jwt_secret

    

# Technoology
  - Node.js
  - mongoDB
# Set up Repo
 - clone code
# API endpoint : 
 #create for user authentication - 
 - Registration 
    POST - http://localhost:4080/api/auth/userRegister
 - Login :
    POST - http://localhost:4080/api/auth/login
 - Book collection APIs:
    POST - http://localhost:4080/api/auth/books
    GET - http://localhost:4080/api/auth/getBooks
    GET - http://localhost:4080/api/auth/getBooks/:id  //get book by id
    PUT - http://localhost:4080/api/auth/updateBook/:id  // update bok by id
    DELETE - http://localhost:4080/api/auth/deleteBook/:id  // delete book by id
# dependencies : 
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "joi": "^17.13.3",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.6.1"
    

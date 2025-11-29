# Backend project with JavaScript BY HITESH SIR 🚀🚀
- [Model link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

# Frontend and Backend
- Frontend is the part of a website or application that users see and interact with, while the backend is the server-side that powers it. Frontend development uses languages like HTML, CSS, and JavaScript to build the user interface, while backend development uses languages like Python, Java, or Ruby to manage data, servers, and application logic. 
- A full-stack developer is a person who can handle both front-end and back-end development, building an application from start to finish.

# database schema 
1. A database schema serves as the blueprint for a database, defining its structure and organization in a formal language supported by a database management system (DBMS). It outlines how data is logically stored, including the relationships between different tables and other database objects. 
2. These schemas act as blueprints for your data, specifying field types, required fields, default values, and even custom validation logic.

###### How to setup a professional backend project 🚀
- npm init
- git initialize
- third party service
- folder structure

# database connection
1. npm i mongoose express dotenv
2. online database connection --> MongoDB ATLAS (username, password, IP Address, String connection) | database access, network access
3. database coonection in codebase -->( .env = PORT, MONGODB_URI) , (constants = database's name )
4. App through express, db connection through Mongodb and mongoose will connects database
5. mongoose reads the MongoDB_URI from .env and mongoose.connect() connects your node.js App to mongoBD
6. two approach to connect with database --> 1. write all connection code in index.js, 2. make a file(db - index.js) and import in index.js
7. When we talk to the database --> try-catch / promise (Error handling) and async-await (database is in another continent)
8. Error : your project uses ES Modules, and ES Modules do NOT support require() --> solve by adding experimental features inside package.json (nodemon)

# We make App through express
1. Read documentation
- Creates an Express application. The express() function is a top-level function exported by the express module.
- request: The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.
           In this documentation and by convention, the object is always referred to as req (and the HTTP response is res) but its actual name is determined by the parameters to the callback function in which you’re working.
           properties - req.baseURL, req.body, req.params
- response: The res object represents the HTTP response that an Express app sends when it gets an HTTP request.
            In this documentation and by convention, the object is always referred to as res (and the HTTP request is req) but its
            actual name is determined by the parameters to the callback function in which you’re working.

2. Search npm js
- npm i cookie-parser cors
- enable CORS => This allows your frontend to talk to your backend.
3. configuration setting 
- comming data from multiple places into backend so we need some configurations setting and how to configure ---> .use()

4. middleware
- Middleware in Node.js, particularly within frameworks like Express.js, refers to functions that have access to the request (req) object,
   the response (res) object, and the next() middleware function in the application's request-response cycle. These functions can perform
   various tasks before the request reaches its final route handler or after a response is generated.
- Types of Middleware:
   a. Application-level middleware: Bound to the Express application instance using app.use()
   b. Router-level middleware: Similar to application-level middleware but bound to an instance of express.Router(), allowing for modular routing.
   c. Built-in middleware: Provided by Express itself, such as express.static() for serving static files, express.json() for parsing JSON request bodies, and express. urlencoded() for parsing URL-encoded data.
   d. Third-party middleware: External modules installed via npm to add specific functionalities (e.g., cookie-parser for parsing cookies, cors for handling Cross-Origin Resource Sharing).
   e. Error-handling middleware: A special type of middleware defined with four arguments (err, req, res, next) specifically designed to catch and handle errors that occur during the request-response cycle.

5. status code
   - API's server have status code
   - In Node.js, particularly when building web servers with frameworks like Express, HTTP status codes are used to indicate the outcome
      of a client's request to the server. These codes are part of the HTTP response and inform the client whether the request was successful, redirected, or encountered an error.

# models
1. data fields
- user.models.js
- video.models.js
2. npm i mongoose-aggregate-paginate-v2 (A page based custom aggregate pagination library for Mongoose with customizable labels)
- mongodb aggregation pipeline
- The MongoDB Aggregation Framework is a powerful tool for processing and transforming data within MongoDB collections. 
   It allows for complex data analysis, reporting, and transformations directly within the database, minimizing the need for extensive client-side processing.
3. Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions. Middleware is specified on the schema level and is useful for writing plugins.
4. npm i bcrypt jsonwebtoken
- bcrypt: A library to help you hash passwords.
- JWT: it's bearer token. (Access token, Refresh token)

5. # Explain the code of user models
-  # import
- mongoose → Used to create MongoDB models and schemas. |for creating schemas & interacting with MongoDB.
- Schema → A blueprint/structure for how a user document should look. | Schema → shortcut for mongoose.Schema.
- jwt → Used to generate tokens for login (Access + Refresh tokens). 
- bcrypt → Used to hash passwords securely.
- Hashing converts your real password into a secret, unreadable string before saving it in the database. why use - Because if someone hacks your database, they should NOT see your real passwords.
- Refresh Token : Used during silent login (access token expires → refresh token creates a new one).
- Access Token contains: user id, email, username,  full name --> Used for: Authorization, Protecting routes.
- Refresh Token contains only: _id   --> Used to generate new access token without login.
# salt round = 10 (industry standard)
- A salt is a random string added to the password before hashing so that:
- two users with the same password will NOT have the same hash
- attackers cannot use precomputed tables (rainbow tables)
- password → password + randomSalt → hash     => This makes hashing more secure.
- Salt rounds (also called cost factor) = how many times bcrypt internally processes the password.(Higher rounds = more secure, Higher rounds = slower hashing)
- 10 rounds => It is secure enough for modern applications, It is fast enough to not slow down signup/login
- bcrypt generates a random salt internally, applies hashing 10 times, produces a secure, unique hash
# Pagination Plugin
- This lets you paginate complex queries like: filter by tag, search videos, sort by views, group by categories etc.


6. # Cloudinary Services
- Cloudinary is a cloud-based media management service that allows you to easily upload, store, optimize, and deliver:Images, Videos, Thumbnails, Audio, Raw files . It is widely used in modern apps—Instagram, TikTok, YouTube clones, e-commerce apps, etc.

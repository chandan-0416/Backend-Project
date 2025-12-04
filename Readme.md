# Backend project with JavaScript BY HITESH SIR 🚀🚀

- [Model link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

# Frontend and Backend
- Frontend is the part of a website or application that users see and interact with, while the backend is the server-side that powers it. Frontend development uses languages like HTML, CSS, and JavaScript to build the user interface, while backend development uses languages like Python, Java, or Ruby to manage data, servers, and application logic.
- A full-stack developer is a person who can handle both front-end and back-end development, building an application from start to finish.
# database schema
1. A database schema serves as the blueprint for a database, defining its structure and organization in a formal language supported by a database management system (DBMS). It outlines how data is logically stored, including the relationships between different tables and other database objects.
2. These schemas act as blueprints for your data, specifying field types, required fields, default values, and even custom validation logic.
# MongoDB Atlas
MongoDB Atlas is a fully managed, multi-cloud database-as-a-service that simplifies the deployment, scaling, and management of MongoDB databases. It automates tasks like provisioning, patching, backups, and scaling, allowing developers to focus on building applications instead of managing infrastructure. It is built on major cloud providers like AWS, Azure, and Google Cloud. 
# Difference between mongodb and mongodb atlas
MongoDB is an open-source database that requires manual management, while MongoDB Atlas is a fully managed cloud-based service that automates tasks like backups, scaling, and security. The choice depends on your needs: self-hosted MongoDB offers more control and is free to start with, but comes with higher operational overhead; Atlas offers ease of use, automated scaling, and built-in features for high availability, suitable for those who prefer not to manage the infrastructure
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

# We make our App through the express

1. Read documentation

- Creates an Express application. The express() function is a top-level function exported by the express module.
- request: The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on. - In this documentation and by convention, the object is always referred to as req (and the HTTP response is res) but its actual name is determined by the parameters to the callback function in which you’re working.
  properties - req.baseURL, req.body, req.params
- response: The res object represents the HTTP response that an Express app sends when it gets an HTTP request. - In this documentation and by convention, the object is always referred to as res (and the HTTP request is req) but its
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

- # import
- mongoose → Used to create MongoDB models and schemas. |for creating schemas & interacting with MongoDB.
- Schema → A blueprint/structure for how a user document should look. | Schema → shortcut for mongoose.Schema.
- jwt → Used to generate tokens for login (Access + Refresh tokens).
- bcrypt → Used to hash passwords securely.
- Hashing converts your real password into a secret, unreadable string before saving it in the database. why use - Because if someone hacks your database, they should NOT see your real passwords.
- Refresh Token : Used during silent login (access token expires → refresh token creates a new one).
- Access Token contains: user id, email, username, full name --> Used for: Authorization, Protecting routes.
- Refresh Token contains only: \_id --> Used to generate new access token without login.

# salt round = 10 (industry standard)

- A salt is a random string added to the password before hashing so that:
- two users with the same password will NOT have the same hash
- attackers cannot use precomputed tables (rainbow tables)
- password → password + randomSalt → hash => This makes hashing more secure.
- Salt rounds (also called cost factor) = how many times bcrypt internally processes the password.(Higher rounds = more secure, Higher rounds = slower hashing)
- 10 rounds => It is secure enough for modern applications, It is fast enough to not slow down signup/login
- bcrypt generates a random salt internally, applies hashing 10 times, produces a secure, unique hash

# Pagination Plugin

- This lets you paginate complex queries like: filter by tag, search videos, sort by views, group by categories etc.

6.  How to upload files in backend | file upload (file handling) | use third party server to upload like Cloudinary service

# Cloudinary Services

- Cloudinary is a cloud-based media management service that allows you to easily upload, store, optimize, and deliver:Images, Videos, Thumbnails, Audio, Raw files . It is widely used in modern apps—Instagram, TikTok, YouTube clones, e-commerce apps, etc.
- file upload (choose 1 package/way out of 2 packages)- express file upload and multer
- npm i cloudinary multer
- and also import fs(file system) to manage the files , use multer as node.js middleware

# Multer

- Multer is a Node.js middleware that simplifies handling multipart/form-data, which is the encoding type used for file uploads. It provides middleware to process incoming data, making uploaded files and other form fields easily accessible in req.file or req.files and req.body objects, respectively.
- Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.
- Multer accepts an options object, the most basic of which is the dest/storage property, which tells Multer where to upload the files.
- If you want more control over your uploads, you'll want to use the storage option instead of dest. Multer ships with storage engines DiskStorage and MemoryStorage:
- DiskStorage: The disk storage engine gives you full control on storing files to disk.
- MemoryStorage: The memory storage engine stores the files in memory as Buffer objects. It doesn't have any options.

7. # HTTP Course : [Hypertext Transfer Protocol]

- Operating System, network, communication / HTTP or HTTPs, client, server, IP Address
- (URL: Uniform Resource Locator, URI: Uniform Resource Identifier, URNs: Uniform Resource Names)
- URI is the general term for any identifier, while URL and URN are specific types of URIs
- HTTP Headers : (Metadata, most common headers)
- HTTP Methods
- HTTP Status code

# How we write HTTP request in code

```
{
- Frontend (React)

    fetch("/api/login", {
  method: "POST",
  body: JSON.stringify({ email, password })
})

 - API Route (Next.js)

 export async function POST(req) {
  const { email, password } = await req.json();
  return NextResponse.json({ message: "OK" });
}
}
```

# HTTP Request–Response Cycle Diagram

```
{
STEP 1: Browser creates an HTTP Request
-----------------------------------------
URL: /api/login
Method: POST
Headers: Content-Type: application/json
Body: { email, password }

STEP 2: Request sent to the Server
-----------------------------------------
Frontend --> Internet --> Server (Backend)

STEP 3: Backend processes the request
-----------------------------------------
- Validates user
- Talks to Database
- Generates token

STEP 4: Server sends HTTP Response
-----------------------------------------
Status: 200
Headers: Content-Type: application/json
Body: { "message": "Login success" }

STEP 5: Frontend receives response
-----------------------------------------
Frontend updates UI
}
```

# HTTP Request/Response

- HTTP Request → what frontend sends
- Contains:
  ✔ Method
  ✔ Headers
  ✔ URL
  ✔ Body
- HTTP Response → what backend returns
- Contains:
  ✔ Status Code
  ✔ Headers
  ✔ Data (JSON, HTML, file, etc.)

# Example of Full Response (API)

```
{
    HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: no-cache

{
  "productId": 5,
  "name": "iPhone 14",
  "price": 799
}
}
```

# How Frontend Handles the Response

```
{
    const res = await fetch("/api/login");
const data = await res.json();

if (res.status === 200) {
    console.log("Login success:", data);
} else {
    console.log("Error:", data.message);
}

}
```

- The frontend decides what to do depending on: success or failure, what data was returned, response code

# Full Architecture

```
   {       ┌──────────────────────────┐
           │        CLIENT            │
           │  (React, Next.js UI)     │
           └────────────┬─────────────┘
                        |
                        | HTTP Request (fetch/axios)
                        v
            ┌─────────────────────────┐
            │          API            │
            │ (/api/... endpoints)    │
            └────────────┬────────────┘
                         |
                         v
            ┌─────────────────────────┐
            │        BACKEND          │
            │ Business Logic, Auth    │
            │ Controllers, Services   │
            └────────────┬────────────┘
                         |
                         | DB Query
                         v
            ┌─────────────────────────┐
            │        DATABASE         │
            │  MongoDB, MySQL, etc    │
            └────────────┬────────────┘
                         |
                         | Hosted On Cloud
                         v
           ┌──────────────────────────┐
           │         CLOUD            │
           │ Vercel, AWS, Mongo Atlas │
           └──────────────────────────┘
}
```

8.  Controller's Journey

# Controllers - (Logic building)

- controllers : method with HOF & helper(wrapper) --> where run --> on URL => route
- route : route create from the express, file suggestion

# API Testing

- Thunder Client
- Postman (we, use) --> collection share, use for data testing, How to use Postman for backend, Postman properly configure,

# Postman

- Postman is a powerful API development and testing tool that simplifies the process of building, testing, and managing APIs. It allows
  developers to send HTTP requests, analyze responses, automate workflows, and collaborate efficiently. With support for multiple authentication methods, request body formats, and automated testing, Postman has become one of the most popular tools for modern API development.
- In Postman, you can send requests by selecting the HTTP method (GET, POST, etc.) and entering the API URL in the request bar. After
  clicking Send, Postman displays the server’s response along with headers, status codes, and data.

9. Logic Building for the Register Controller => Business logic building --> Problems => broke into small steps

# Todos for RegisterUser

- get user details from frontend (How? -> take data through Postman and which data we will take from user details according to the user Model)
- validation - not empty
- check if user already exist: username, email
- check for images, check for avatar
- upload them to cloudinary, avatar
- create user object - create entry in db
- remove password and refresh token field from response
- check for user creation
- return res

# Todos for loginUser

- req.body
- username or email
- find the user
- password check
- access token and refresh token
- send cookie

# Todos for logoutUser

{

1. logout

- cookie clear
- reset refresh Token(in Model)
- problem : can't do like user.findById
- solution : generate our own middleware --> this will verify the user is exist or not to logout
- middleware majorely use with route

2. Middleware (authmiddleware.ts) => "Jane se pahle mujhse mil kar jana"

}

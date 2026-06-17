// ES module imports
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// Enable CORS => This allows your frontend to talk to your backend.
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//Body Parsers => These lines allow your backend to receive JSON and form data.
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit:
    "16kb"}))

//Serve Public Files => This exposes all files in the public/ folder (images, docs, etc.)
app.use(express.static("public"))

// Cookie Parser => Used for handling tokens, login cookies, sessions, etc.
app.use(cookieParser())


//route import
import userRouter from "./routes/user.route.js"

// route declaration

app.use("/api/v1/users", userRouter)
// http://localhost:8000/api/v1/users/register |   aese url/route bnata hai 

export {app}
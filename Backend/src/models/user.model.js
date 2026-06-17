import mongoose, {Schema} from "mongoose"; // Used to create MongoDB models and schemas.
import jwt from "jsonwebtoken" // Used to generate tokens for login (Access + Refresh tokens).
import bcrypt from "bcrypt" // Used to hash passwords securely.

const userSchema = new Schema(  // This defines the structure of the "User" document stored in MongoDB
    {
        username: {  // Fields Explanation
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,  // no extra spaces
            index: true  // faster search
        },
         email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true, 
        },
         fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String, // cloudinary url , This will store a Cloudinary URL for profile image.
            required: true,
        },
        coverImage: {
            type: String,
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: { // Stored in encrypted form (never plain text).
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: { // Used during silent login (access token expires → refresh token creates a new one).
            type: String
        },
    },
    {
       timestamps: true
    }

)

userSchema.pre("save", async function(next) { // Password Hashing Middleware
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10) //(takes the real password ,salt rounds = 10 (industry standard))
    next()
})

userSchema.methods.isPasswordCorrect = async function // Password Compare Method
(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function() { // Generate Access Token
   return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function() { // Generate Refresh Token
    return jwt.sign(
        {
            _id: this._id,
        
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)
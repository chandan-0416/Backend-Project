import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try { 
    const connectionInstance = await mongoose.connect
    (`${process.env.MONGODB_URI}/${DB_NAME}`)

    console.log(`\n MOngoDB connected !! DB HOST: ${connectionInstance.connection.host}`); 
    
    // console.log("MONGODB_URI:", process.env.MONGODB_URI);

    } catch (error) {
        console.log("MONGODB connection FAILED ", error); // show error
        process.exit(1) //Stop the app if DB connection fails
    }
}

export default connectDB 
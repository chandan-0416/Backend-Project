import mongoose, {Schema} from "mongoose" // for creating schemas & interacting with MongoDB
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2" // a plugin that adds pagination support for MongoDB aggregate queries.

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, // cloudinary url
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        view: {
            type: Number,
            default: 0
        },
        isPublished:{
            type: Boolean,
            default: true 
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)
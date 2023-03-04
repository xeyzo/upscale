import mongoose from "mongoose";


const taskSchema = mongoose.Schema({
    judul:{
        type:String,
        required: true
    },
    deskripsi:{
        type:String,
    },
    status:{
        type:Boolean,
        required:true,
        default:false
    }
})

export default mongoose.model("Task", taskSchema)
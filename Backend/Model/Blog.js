import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: {type: String, require: true},

})
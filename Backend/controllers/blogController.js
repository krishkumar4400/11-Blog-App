import imageKit from "../config/imageKit.js";
import Blog from "../Model/Blog.js";
import fs from 'fs';

export const getAllBlogs = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error.message);
    }
}

export const addNewBlog = async (req,res) => {
    try {
        const {title, subTitle, description, isPublished, category} = JSON.parse(req.body.blog);
        const imageFile = req.file;

        // check if all fields are present
        if(!title || !description || !category || !imageFile || !isPublished) {
            return res.json({
              message: "Mising required fields",
              success: false,
            }); 
        }

        const fileBuffer = fs.readFileSync(imageFile.path);

        // upload image to imagekit
        const response = await imageKit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname, 
            folder: "/blogs"
        });

        // optimize through imagekit URL transformation
        const optimizedImageURL = imageKit.url({
            path:response.filePath,
            transformations: [
                {quality: 'auto'}, // auto compression
                {format: 'webp'}, // convert to modern format 
                {width:'1280'}, // width resizing 
                {}
            ]
        });

        const image = optimizedImageURL;

        await Blog.create({
            title, subTitle, description, isPublished, category, image 
        });

        await blog.save();

        res.json({
            message: "Blog added successfully",
            success: true 
        });

    } catch (error) {
        console.log(error.message);
        res.json({
            message: "Server is not responding",
            success: false 
        });
    }
}

export const getRecentBlogs = async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error.message);
    }
}
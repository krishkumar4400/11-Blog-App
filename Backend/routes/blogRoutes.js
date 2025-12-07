import { Router } from "express";
import { addNewBlog } from "../controllers/blogController.js";
import upload from "../middlewares/multer.js";

const blogRouter = Router();

blogRouter.post('/add-blog',upload.single('image'), addNewBlog);

export default blogRouter;
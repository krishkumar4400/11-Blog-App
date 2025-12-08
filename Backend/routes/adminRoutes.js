import { Router } from "express";
import { adminLogin, approveComment, deleteComment, getAllBlogsAdmin, getAllcomments, getDashboardData } from "../controllers/adminController.js";
import auth from "../middlewares/auth.js";

const adminRouter = Router();

adminRouter.post('/login', adminLogin);
adminRouter.get('/all-blogs', auth, getAllBlogsAdmin);
adminRouter.get('/comments', auth, getAllcomments);
adminRouter.get('/dashboard-data', auth, getDashboardData);
adminRouter.post('/delete-comment', auth, deleteComment);
adminRouter.post('/approve-comment', auth, approveComment);

export default adminRouter;
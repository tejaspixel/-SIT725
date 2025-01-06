import express from "express";
const router = express.Router();
import blogController from '../controllers/blogController.js';

router.get('/', blogController.getBlogs);
router.post("/like", blogController.likeBlog);

export default router;
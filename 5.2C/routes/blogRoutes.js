import express from "express";
const router = express.Router();
import blogController from '../controllers/blogController.js';

router.get('/', blogController.getBlogs);

export default router;
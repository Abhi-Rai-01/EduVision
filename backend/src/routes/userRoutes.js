import express from 'express';
import {
  bookmarkCourse,
  removeBookmark,
  getBookmarks
} from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// All routes are protected
router.post('/bookmark/:courseId', protect, bookmarkCourse);
router.delete('/bookmark/:courseId', protect, removeBookmark);
router.get('/bookmarks', protect, getBookmarks);

export default router;
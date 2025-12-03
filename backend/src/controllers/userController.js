import User from '../models/User.js';
import Course from '../models/Course.js';

// @desc    Bookmark a course
// @route   POST /api/users/bookmark/:courseId
// @access  Private
export const bookmarkCourse = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const course = await Course.findById(req.params.courseId);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    if (user.bookmarkedCourses.includes(req.params.courseId)) {
      return res.status(400).json({
        success: false,
        message: 'Course already bookmarked'
      });
    }

    user.bookmarkedCourses.push(req.params.courseId);
    course.bookmarks += 1;

    await user.save();
    await course.save();

    res.status(200).json({
      success: true,
      message: 'Course bookmarked successfully',
      data: user.bookmarkedCourses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error bookmarking course',
      error: error.message
    });
  }
};

// @desc    Remove bookmark
// @route   DELETE /api/users/bookmark/:courseId
// @access  Private
export const removeBookmark = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const course = await Course.findById(req.params.courseId);

    if (course && course.bookmarks > 0) {
      course.bookmarks -= 1;
      await course.save();
    }

    user.bookmarkedCourses = user.bookmarkedCourses.filter(
      id => id.toString() !== req.params.courseId
    );
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Bookmark removed successfully',
      data: user.bookmarkedCourses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error removing bookmark',
      error: error.message
    });
  }
};

// @desc    Get user's bookmarked courses
// @route   GET /api/users/bookmarks
// @access  Private
export const getBookmarks = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate('bookmarkedCourses');

    res.status(200).json({
      success: true,
      count: user.bookmarkedCourses.length,
      data: user.bookmarkedCourses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching bookmarks',
      error: error.message
    });
  }
};
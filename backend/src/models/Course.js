import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Course title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Course description is required'],
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  platform: {
    type: String,
    required: [true, 'Platform is required'],
    enum: ['Coursera', 'edX', 'Udemy', 'YouTube', 'Khan Academy', 'FreeCodeCamp', 'GeeksforGeeks', 'Scaler', 'Other'],
    index: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Technology', 'Business', 'Design', 'Marketing', 'Personal Development', 'Science', 'Mathematics', 'Language', 'Arts', 'Health', 'Other'],
    index: true
  },
  subcategory: String,
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner',
    index: true
  },
  duration: {
    type: String,
    required: [true, 'Duration is required']
  },
  language: {
    type: String,
    default: 'English'
  },
  courseUrl: {
    type: String,
    required: [true, 'Course URL is required'],
    trim: true
  },
  thumbnailUrl: String,
  instructor: String,
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  studentsEnrolled: {
    type: String,
    default: '0'
  },
  tags: [String],
  prerequisites: [String],
  skills: [String],
  isFree: {
    type: Boolean,
    default: true,
    required: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isFeatured: {
    type: Boolean,
    default: false,
    index: true
  },
  views: {
    type: Number,
    default: 0
  },
  bookmarks: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Indexes for better performance
courseSchema.index({ title: 'text', description: 'text', tags: 'text' });
courseSchema.index({ category: 1, difficulty: 1 });
courseSchema.index({ platform: 1, isFeatured: 1 });

const Course = mongoose.model('Course', courseSchema);

export default Course;
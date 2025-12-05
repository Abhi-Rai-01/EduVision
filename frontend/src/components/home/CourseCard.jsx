import React from 'react';
import { Star, Clock, ExternalLink } from 'lucide-react';

export default function CourseCard({ course }) {
  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full font-semibold">
            {course.platform}
          </span>
          <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">
            FREE
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
          {course.title}
        </h3>
        
        {course.instructor && (
          <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>
        )}
        
        <div className="flex items-center mb-3">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-700 font-medium">{course.rating}</span>
          <span className="ml-2 text-sm text-gray-500">({course.studentsEnrolled})</span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
            {course.difficulty}
          </span>
        </div>
      </div>
      
      <div className="p-6 pt-0">
        <a
          href={course.courseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-700 transition-colors inline-flex items-center justify-center"
        >
          View Course
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ExternalLink, Clock, Award, Users, Star } from 'lucide-react';
import { courseService } from '../services/courseService';

export default function CourseDetailPage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourse();
  }, [id]);

  const fetchCourse = async () => {
    try {
      const response = await courseService.getCourse(id);
      setCourse(response.data);
    } catch (error) {
      console.error('Error fetching course:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Course not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 p-8 text-white">
            <div className="flex items-center mb-4">
              <span className="bg-white text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold">
                {course.platform}
              </span>
              <span className="ml-3 bg-green-500 px-3 py-1 rounded-full text-sm font-semibold">
                FREE
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            {course.instructor && (
              <p className="text-indigo-100">by {course.instructor}</p>
            )}
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Star className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                <div className="font-bold text-lg">{course.rating}</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Users className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
                <div className="font-bold text-lg">{course.studentsEnrolled}</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Clock className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="font-bold text-lg">{course.duration}</div>
                <div className="text-sm text-gray-600">Duration</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Award className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <div className="font-bold text-lg">{course.difficulty}</div>
                <div className="text-sm text-gray-600">Level</div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">About this course</h2>
              <p className="text-gray-700 leading-relaxed">{course.description}</p>
            </div>

            {/* Skills */}
            {course.skills && course.skills.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">Skills you'll gain</h3>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Button */}
            <a
              href={course.courseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-indigo-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              Start Learning Now
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
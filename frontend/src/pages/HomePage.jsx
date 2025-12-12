import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, BookOpen, Users, Award } from 'lucide-react';
import CourseCard from '../components/home/CourseCard';
import { courseService } from '../services/courseService';

export default function HomePage() {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchFeaturedCourses();
  }, []);

  const fetchFeaturedCourses = async () => {
    try {
      const response = await courseService.getFeaturedCourses();
      setFeaturedCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/courses?search=${searchQuery}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Discover Free Learning Resources
            <span className="text-indigo-600"> All in One Place</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Access thousands of high-quality free courses from Coursera, edX, Udemy, YouTube, and more.
            Start your learning journey today!
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for courses, skills, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:outline-none text-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
              >
                Search
              </button>
            </div>
          </form>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">10,000+</div>
              <div className="text-gray-600">Free Courses</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">10+</div>
              <div className="text-gray-600">Platforms</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">15+</div>
              <div className="text-gray-600">Categories</div>
            </div>
          </div>
        </div>

        {/* Featured Courses */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <TrendingUp className="mr-3 h-8 w-8 text-indigo-600" />
              Featured Courses
            </h2>
            <Link
              to="/courses"
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              View All →
            </Link>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
              <p className="mt-4 text-gray-600">Loading courses...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of learners discovering free courses every day
          </p>
          <Link
            to="/courses"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore All Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
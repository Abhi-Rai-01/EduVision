import React from 'react';
import { BookOpen, Target, Users, Heart } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        About EduVision
                    </h1>
                    <p className="text-xl text-gray-600">
                        Making Quality Education Accessible for Everyone
                    </p>
                </div>

                {/* Mission Section */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <div className="flex items-center mb-4">
                        <Target className="h-8 w-8 text-indigo-600 mr-3" />
                        <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        EduVision is dedicated to democratizing education by providing students with easy access to thousands of free, high-quality learning resources from top platforms worldwide. We believe that financial constraints should never be a barrier to learning.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Our platform aggregates free courses from Coursera, edX, Udemy, YouTube, and other leading educational platforms, saving students countless hours of searching and helping them focus on what matters most - learning.
                    </p>
                </div>

                {/* Problem & Solution */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <div className="flex items-center mb-4">
                        <BookOpen className="h-8 w-8 text-indigo-600 mr-3" />
                        <h2 className="text-2xl font-bold text-gray-900">The Problem We Solve</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Students today face a paradox: there are thousands of free courses available online, but finding them is time-consuming and overwhelming. Many students either:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                        <li>Waste hours searching across multiple platforms</li>
                        <li>Miss out on quality free courses because they're hard to find</li>
                        <li>End up paying for courses that are available for free elsewhere</li>
                        <li>Get overwhelmed by the sheer number of options</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                        EduVision solves this by bringing all free courses together in one place, with powerful search and filtering capabilities to help you find exactly what you need.
                    </p>
                </div>

                {/* Features */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <div className="flex items-center mb-4">
                        <Users className="h-8 w-8 text-indigo-600 mr-3" />
                        <h2 className="text-2xl font-bold text-gray-900">What We Offer</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">📚 10,000+ Free Courses</h3>
                            <p className="text-gray-600">Access verified free courses from top universities and platforms worldwide.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">🔍 Smart Search</h3>
                            <p className="text-gray-600">Find courses quickly with our powerful search and filtering system.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">✅ Verified Content</h3>
                            <p className="text-gray-600">All courses are verified to ensure they're truly free and high-quality.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">🌐 Multiple Platforms</h3>
                            <p className="text-gray-600">Courses from Coursera, edX, Udemy, YouTube, and 50+ other platforms.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">📱 Responsive Design</h3>
                            <p className="text-gray-600">Learn on any device - desktop, tablet, or mobile.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">⚡ Instant Access</h3>
                            <p className="text-gray-600">Direct links to courses - no sign-up required to browse.</p>
                        </div>
                    </div>
                </div>

                {/* Vision */}
                <div className="bg-indigo-600 rounded-lg shadow-md p-8 text-white">
                    <div className="flex items-center mb-4">
                        <Heart className="h-8 w-8 mr-3" />
                        <h2 className="text-2xl font-bold">Our Vision</h2>
                    </div>
                    <p className="leading-relaxed mb-4">
                        We envision a world where every student, regardless of their financial situation, has access to world-class education. EduVision is just the beginning.
                    </p>
                    <p className="leading-relaxed">
                        Our goal is to continuously expand our platform, add more features like personalized recommendations, progress tracking, and community learning, while always keeping education free and accessible to all.
                    </p>
                </div>

                {/* Developer Info */}
                <div className="mt-8 text-center text-gray-600">
                    <p className="mb-2">Developed by <strong>Abhi Rai</strong></p>
                    <p className="text-sm">Indian Institute of Technology Patna</p>
                    <p className="text-sm">Capstone Project - December 2025</p>
                </div>
            </div>
        </div>
    );
}
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">EduVision</h3>
          <p className="text-gray-400 mb-4">
            Making Quality Education Accessible for Everyone
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-indigo-400">About</a>
            <a href="#" className="hover:text-indigo-400">Contact</a>
            <a href="#" className="hover:text-indigo-400">Privacy</a>
            <a href="#" className="hover:text-indigo-400">Terms</a>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 EduVision - Developed by Abhi Rai | IIT Patna
          </p>
        </div>
      </div>
    </footer>
  );
}
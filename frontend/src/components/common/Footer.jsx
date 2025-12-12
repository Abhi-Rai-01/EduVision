import React from 'react';
import { Link } from 'react-router-dom';


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
            <Link to="/about" className="hover:text-indigo-400">About</Link>
            <Link to="/contact" className="hover:text-indigo-400">Contact</Link>
            <a href="https://github.com/Abhi-Rai-01/EduVision" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              GitHub
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 EduVision - Developed by Abhi Rai | IIT Patna
          </p>
        </div>
      </div>
    </footer>
  );
}
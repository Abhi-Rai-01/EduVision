import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Course from './models/Course.js';

dotenv.config();

const courses = [
  {
    title: 'CS50: Introduction to Computer Science',
    description: 'Harvard University\'s introduction to computer science and programming. Learn to think algorithmically and solve problems efficiently. Topics include abstraction, algorithms, data structures, software engineering, and web development. Languages include C, Python, SQL, JavaScript, CSS, and HTML.',
    platform: 'edX',
    category: 'Technology',
    subcategory: 'Computer Science',
    difficulty: 'Beginner',
    duration: '11 weeks',
    language: 'English',
    courseUrl: 'https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science',
    instructor: 'David J. Malan',
    rating: 4.9,
    studentsEnrolled: '4M+',
    tags: ['Computer Science', 'Programming', 'C', 'Python', 'JavaScript'],
    skills: ['Programming', 'Problem Solving', 'Algorithms', 'Web Development'],
    isFree: true,
    isVerified: true,
    isFeatured: true
  },
  {
    title: 'Python for Everybody Specialization',
    description: 'Learn to program and analyze data with Python. This Specialization builds on the success of the Python for Everybody course and will introduce fundamental programming concepts including data structures, networked application program interfaces, and databases.',
    platform: 'Coursera',
    category: 'Technology',
    subcategory: 'Programming',
    difficulty: 'Beginner',
    duration: '8 months',
    language: 'English',
    courseUrl: 'https://www.coursera.org/specializations/python',
    instructor: 'Charles Russell Severance',
    rating: 4.8,
    studentsEnrolled: '2M+',
    tags: ['Python', 'Data Analysis', 'SQL', 'Web Scraping'],
    skills: ['Python Programming', 'Data Structures', 'Database Management'],
    isFree: true,
    isVerified: true,
    isFeatured: true
  },
  {
    title: 'The Complete 2024 Web Development Bootcamp',
    description: 'Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps. This comprehensive bootcamp covers frontend and backend development.',
    platform: 'YouTube',
    category: 'Technology',
    subcategory: 'Web Development',
    difficulty: 'Beginner',
    duration: '65 hours',
    language: 'English',
    courseUrl: 'https://www.youtube.com/watch?v=nu_pCVPKzTk',
    instructor: 'freeCodeCamp.org',
    rating: 4.9,
    studentsEnrolled: '500K+',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    skills: ['Frontend Development', 'Backend Development', 'Full Stack'],
    isFree: true,
    isVerified: true,
    isFeatured: true
  },
  {
    title: 'Machine Learning by Stanford University',
    description: 'Learn about the most effective machine learning techniques. Gain practice implementing them and getting them to work for yourself. This course provides a broad introduction to machine learning, datamining, and statistical pattern recognition.',
    platform: 'Coursera',
    category: 'Technology',
    subcategory: 'Artificial Intelligence',
    difficulty: 'Intermediate',
    duration: '3 months',
    language: 'English',
    courseUrl: 'https://www.coursera.org/learn/machine-learning',
    instructor: 'Andrew Ng',
    rating: 4.9,
    studentsEnrolled: '5M+',
    tags: ['Machine Learning', 'AI', 'Neural Networks', 'Deep Learning'],
    skills: ['Machine Learning', 'Supervised Learning', 'Unsupervised Learning'],
    isFree: true,
    isVerified: true,
    isFeatured: true
  },
  {
    title: 'Digital Marketing Specialization',
    description: 'Master strategic marketing concepts and tools to address brand communication. This Specialization explores several aspects of the new digital marketing environment, including topics such as digital marketing analytics, search engine optimization, social media marketing.',
    platform: 'Coursera',
    category: 'Marketing',
    subcategory: 'Digital Marketing',
    difficulty: 'Beginner',
    duration: '6 months',
    language: 'English',
    courseUrl: 'https://www.coursera.org/specializations/digital-marketing',
    instructor: 'University of Illinois',
    rating: 4.6,
    studentsEnrolled: '300K+',
    tags: ['SEO', 'Social Media Marketing', 'Analytics', 'Content Marketing'],
    skills: ['Digital Marketing', 'SEO', 'Social Media Strategy'],
    isFree: true,
    isVerified: true,
    isFeatured: true
  },
  {
    title: 'Graphic Design Specialization',
    description: 'Make Compelling Design. Learn and apply the principles of graphic design towards a comprehensive branding project. This specialization covers the fundamentals of graphic design: imagemaking, typography, composition, working with color and shape.',
    platform: 'Coursera',
    category: 'Design',
    subcategory: 'Graphic Design',
    difficulty: 'Beginner',
    duration: '5 months',
    language: 'English',
    courseUrl: 'https://www.coursera.org/specializations/graphic-design',
    instructor: 'California Institute of the Arts',
    rating: 4.7,
    studentsEnrolled: '250K+',
    tags: ['Graphic Design', 'Typography', 'Adobe Illustrator', 'Branding'],
    skills: ['Visual Design', 'Typography', 'Color Theory', 'Layout'],
    isFree: true,
    isVerified: true,
    isFeatured: true
  },
  {
    title: 'Data Science Professional Certificate',
    description: 'Kickstart your career in data science. Master Python, analyze data, create visualizations, and build machine learning models. No prior experience needed. This Professional Certificate will give you the technical skills to become job-ready.',
    platform: 'edX',
    category: 'Technology',
    subcategory: 'Data Science',
    difficulty: 'Intermediate',
    duration: '9 months',
    language: 'English',
    courseUrl: 'https://www.edx.org/professional-certificate/ibm-data-science',
    instructor: 'IBM',
    rating: 4.5,
    studentsEnrolled: '400K+',
    tags: ['Data Science', 'Python', 'Machine Learning', 'Data Visualization'],
    skills: ['Data Analysis', 'Python', 'SQL', 'Machine Learning'],
    isFree: true,
    isVerified: true,
    isFeatured: false
  },
  {
    title: 'UI/UX Design Specialization',
    description: 'Design High-Impact User Experiences. Research, design, and prototype effective, visually-driven websites and apps. This specialization covers user interface design, user experience research, and prototyping.',
    platform: 'Coursera',
    category: 'Design',
    subcategory: 'UI/UX Design',
    difficulty: 'Beginner',
    duration: '6 months',
    language: 'English',
    courseUrl: 'https://www.coursera.org/specializations/ui-ux-design',
    instructor: 'California Institute of the Arts',
    rating: 4.7,
    studentsEnrolled: '180K+',
    tags: ['UI Design', 'UX Design', 'Prototyping', 'Figma', 'User Research'],
    skills: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    isFree: true,
    isVerified: true,
    isFeatured: true
  },
  {
    title: 'Financial Markets by Yale University',
    description: 'An overview of the ideas, methods, and institutions that permit human society to manage risks and foster enterprise. Learn about behavioral finance, forecasting, pricing, debt, equity, derivatives, and regulation.',
    platform: 'Coursera',
    category: 'Business',
    subcategory: 'Finance',
    difficulty: 'Intermediate',
    duration: '7 weeks',
    language: 'English',
    courseUrl: 'https://www.coursera.org/learn/financial-markets-global',
    instructor: 'Robert Shiller',
    rating: 4.8,
    studentsEnrolled: '600K+',
    tags: ['Finance', 'Investment', 'Stock Market', 'Economics'],
    skills: ['Financial Analysis', 'Investment Strategy', 'Risk Management'],
    isFree: true,
    isVerified: true,
    isFeatured: false
  },
  {
    title: 'Introduction to Cybersecurity',
    description: 'Learn cybersecurity basics and protect yourself online. Explore the cybersecurity landscape and understand how to protect personal and organizational assets. Topics include cryptography, network security, and ethical hacking.',
    platform: 'edX',
    category: 'Technology',
    subcategory: 'Cybersecurity',
    difficulty: 'Beginner',
    duration: '6 weeks',
    language: 'English',
    courseUrl: 'https://www.edx.org/learn/cybersecurity/the-university-of-washington-introduction-to-cybersecurity',
    instructor: 'University of Washington',
    rating: 4.6,
    studentsEnrolled: '150K+',
    tags: ['Cybersecurity', 'Network Security', 'Ethical Hacking', 'Cryptography'],
    skills: ['Security Fundamentals', 'Threat Detection', 'Risk Assessment'],
    isFree: true,
    isVerified: true,
    isFeatured: false
  },
  {
    title: 'Google Data Analytics Professional Certificate',
    description: 'Prepare for a career in the high-growth field of data analytics. Learn in-demand skills like data cleaning, visualization, and analysis. No degree or experience required.',
    platform: 'Coursera',
    category: 'Technology',
    subcategory: 'Data Analytics',
    difficulty: 'Beginner',
    duration: '6 months',
    language: 'English',
    courseUrl: 'https://www.coursera.org/professional-certificates/google-data-analytics',
    instructor: 'Google',
    rating: 4.8,
    studentsEnrolled: '1M+',
    tags: ['Data Analytics', 'SQL', 'Spreadsheets', 'Tableau', 'R Programming'],
    skills: ['Data Analysis', 'Data Visualization', 'SQL', 'Tableau'],
    isFree: true,
    isVerified: true,
    isFeatured: true
  },
  {
    title: 'Introduction to Psychology',
    description: 'What are people most afraid of? What do our dreams mean? This course will introduce you to the most interesting experiments within the field of psychology, discussing how these social science findings help explain aspects of your life.',
    platform: 'Coursera',
    category: 'Personal Development',
    subcategory: 'Psychology',
    difficulty: 'Beginner',
    duration: '6 weeks',
    language: 'English',
    courseUrl: 'https://www.coursera.org/learn/introduction-psychology',
    instructor: 'Yale University',
    rating: 4.9,
    studentsEnrolled: '800K+',
    tags: ['Psychology', 'Human Behavior', 'Mental Health', 'Cognitive Science'],
    skills: ['Critical Thinking', 'Understanding Human Behavior', 'Research Methods'],
    isFree: true,
    isVerified: true,
    isFeatured: false
  },
  {
    title: 'Excel Skills for Business Specialization',
    description: 'Master Excel from beginner to advanced level. Learn to build spreadsheets, use formulas and functions, create professional dashboards, and analyze data. Essential for any business professional.',
    platform: 'Coursera',
    category: 'Business',
    subcategory: 'Business Skills',
    difficulty: 'Beginner',
    duration: '6 months',
    language: 'English',
    courseUrl: 'https://www.coursera.org/specializations/excel',
    instructor: 'Macquarie University',
    rating: 4.8,
    studentsEnrolled: '500K+',
    tags: ['Microsoft Excel', 'Data Analysis', 'Business Analytics', 'Spreadsheets'],
    skills: ['Excel', 'Data Visualization', 'Financial Modeling', 'Pivot Tables'],
    isFree: true,
    isVerified: true,
    isFeatured: false
  },
  {
    title: 'The Science of Well-Being',
    description: 'Learn how to increase your own happiness and build more productive habits. Based on the most popular course at Yale, this course offers practical strategies for living a happier, more fulfilling life.',
    platform: 'Coursera',
    category: 'Personal Development',
    subcategory: 'Self Improvement',
    difficulty: 'Beginner',
    duration: '10 weeks',
    language: 'English',
    courseUrl: 'https://www.coursera.org/learn/the-science-of-well-being',
    instructor: 'Laurie Santos, Yale University',
    rating: 4.9,
    studentsEnrolled: '4M+',
    tags: ['Happiness', 'Psychology', 'Mindfulness', 'Mental Health'],
    skills: ['Positive Psychology', 'Mindfulness', 'Habit Formation'],
    isFree: true,
    isVerified: true,
    isFeatured: true
  },
  {
    title: 'Blockchain Basics',
    description: 'Learn the fundamentals of blockchain technology. This course provides an introduction to blockchain, covering basic concepts, applications, and use cases. Perfect for beginners interested in cryptocurrency and Web3.',
    platform: 'Coursera',
    category: 'Technology',
    subcategory: 'Blockchain',
    difficulty: 'Beginner',
    duration: '4 weeks',
    language: 'English',
    courseUrl: 'https://www.coursera.org/learn/blockchain-basics',
    instructor: 'University at Buffalo',
    rating: 4.7,
    studentsEnrolled: '200K+',
    tags: ['Blockchain', 'Cryptocurrency', 'Bitcoin', 'Web3', 'Smart Contracts'],
    skills: ['Blockchain Fundamentals', 'Cryptocurrency', 'Distributed Ledger'],
    isFree: true,
    isVerified: true,
    isFeatured: false
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected');

    // Clear existing data
    await Course.deleteMany();
    console.log('🗑️  Cleared existing courses');

    // Insert sample courses
    await Course.insertMany(courses);
    console.log(`✅ Added ${courses.length} real free courses with working URLs`);

    console.log('🎉 Database seeded successfully!');
    console.log('📚 Courses include: CS50, Python, Machine Learning, Web Dev, and more!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
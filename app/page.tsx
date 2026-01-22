import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DLX.EDU - Learn with us',
  description: 'DLX.EDU educational platform - Upgrade your knowledge with our courses',
};

export default function HomePage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="icon" type="image/png" href="/images/DLX.EDU.png" />
      </head>
      <body className="m-0 p-0 bg-white">
        {/* Header Section */}
        <header className="w-full bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src="/images/DLX.EDU.png" alt="DLX.EDU Logo" className="h-8 w-8" />
                <span className="text-xl font-bold text-gray-900">DLX.EDU</span>
              </div>
              
              <div className="hidden md:flex space-x-6">
                <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
                <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
                <a href="/courses" className="text-gray-700 hover:text-blue-600">Courses</a>
                <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
              </div>
              
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="w-full min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Upgrade Your <span className="text-blue-600">Knowledge</span> With DLX.EDU
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Join thousands of students learning cutting-edge skills with our expert-led courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                Start Learning Free
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition">
                Explore Courses
              </button>
            </div>
          </div>
        </section>

        <div className="w-full h-8 bg-black"></div>

        {/* About Section */}
        <section className="w-full py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose DLX.EDU?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We provide top-quality education with industry experts and cutting-edge curriculum.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-blue-600 text-3xl mb-4">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Instructors</h3>
                <p className="text-gray-600">
                  Learn from industry professionals with years of real-world experience.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-blue-600 text-3xl mb-4">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hands-On Projects</h3>
                <p className="text-gray-600">
                  Apply your knowledge with practical projects and build your portfolio.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-blue-600 text-3xl mb-4">
                  <i className="fas fa-certificate"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Career Certificates</h3>
                <p className="text-gray-600">
                  Get recognized with industry-approved certificates upon completion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-12 bg-black"></div>

        {/* Courses Section */}
        <section className="w-full py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Browse our most popular courses and start your learning journey today.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Web Development Bootcamp</h3>
                  <p className="text-gray-600 mb-4">
                    Master HTML, CSS, JavaScript, React, and Node.js in one comprehensive course.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-bold">$299</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Data Science Fundamentals</h3>
                  <p className="text-gray-600 mb-4">
                    Learn Python, statistics, machine learning, and data visualization techniques.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-bold">$349</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-red-500 to-orange-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">UI/UX Design Masterclass</h3>
                  <p className="text-gray-600 mb-4">
                    Create stunning user interfaces and enhance user experience with modern design principles.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-bold">$279</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-32 bg-black"></div>

        {/* Coming Soon Section */}
        <section className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">More Coming Soon</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're constantly adding new courses and features to enhance your learning experience.
            </p>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="w-full bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">DLX.EDU</h3>
                <p className="text-gray-400">
                  Educational platform to upgrade your knowledge with our courses.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                  <li><a href="/courses" className="text-gray-400 hover:text-white">Courses</a></li>
                  <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} DLX.EDU. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

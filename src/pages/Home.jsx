import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel feature data
  const features = [
    {
      title: 'AI-Powered Feedback',
      description:
        'Our advanced AI system evaluates your answers and body language to give you real-time feedback on your performance.',
      bgColor: 'from-purple-400 to-indigo-600',
    },
    {
      title: 'Realistic Simulation',
      description:
        'Simulate real interview scenarios to practice and improve your interview skills in a pressure-free environment.',
      bgColor: 'from-green-400 to-blue-600',
    },
    {
      title: 'Detailed Analytics',
      description:
        'Get detailed reports on your interview performance, including voice tone, confidence level, and response accuracy.',
      bgColor: 'from-pink-400 to-red-600',
    },
  ];

  // Carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? features.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to InterviewX</h1>
        <p className="text-xl mb-8">
          Prepare for your next interview with our cutting-edge AI-powered interview simulator.
          Get real-time feedback on your verbal and non-verbal responses.
        </p>
        <div className="space-x-4">
          <Link to="/interview" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Start Interview
          </Link>
          <Link to="/dashboard" className="bg-transparent border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
            Go to Dashboard
          </Link>
        </div>
      </div>

      {/* Key Features Section - Carousel */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose InterviewX?</h2>

        <div className="relative w-full max-w-2xl mx-auto">
          {/* Carousel */}
          <div className={`bg-gradient-to-r ${features[currentSlide].bgColor} text-white p-8 rounded-lg shadow-lg`}>
            <h3 className="text-2xl font-bold mb-4">{features[currentSlide].title}</h3>
            <p className="text-lg">{features[currentSlide].description}</p>
          </div>

          {/* Carousel Controls */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-blue-600 p-3 rounded-full shadow-lg"
            onClick={prevSlide}
          >
            &#8249;
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-blue-600 p-3 rounded-full shadow-lg"
            onClick={nextSlide}
          >
            &#8250;
          </button>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Ace Your Next Interview?</h2>
          <p className="text-lg mb-8">
            Join InterviewX today and get instant feedback on your performance. Practice as many times as you need!
          </p>
          <Link to="/interview" className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition">
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

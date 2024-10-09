import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel feature data with background image URLs
  const features = [
    {
      title: 'AI-Powered Feedback',
      description:
        'Our advanced AI system evaluates your answers and body language to give you real-time feedback on your performance.',
      bgImage: 'https://img.freepik.com/free-photo/cartoon-ai-robot-scene_23-2151675019.jpg', // Background image URL
    },
    {
      title: 'Realistic Simulation',
      description:
        'Simulate real interview scenarios to practice and improve your interview skills in a pressure-free environment.',
      bgImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f', // Background image URL
    },
    {
      title: 'Detailed Analytics',
      description:
        'Get detailed reports on your interview performance, including voice tone, confidence level, and response accuracy.',
      bgImage: 'https://assets.techrepublic.com/uploads/2020/12/zoom-vanit-janthra.jpg', // Background image URL
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

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
    <section className="bg-gray-100 min-h-screen">
      {/* Full-Width Carousel Section */}
      <div className="relative w-full h-screen text-white">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${features[currentSlide].bgImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative container mx-auto px-6 py-24 h-full flex flex-col justify-center items-center text-center">
            <h2 className="text-6xl font-bold mb-4">{features[currentSlide].title}</h2>
            <p className="text-2xl max-w-xl">{features[currentSlide].description}</p>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-blue-600 p-3 rounded-full shadow-lg"
          onClick={prevSlide}
        >
          &#8249;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-blue-600 p-3 rounded-full shadow-lg"
          onClick={nextSlide}
        >
          &#8250;
        </button>
      </div>

      {/* Why Choose InterviewX Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold mb-12">Discover the Benefits of InterviewX</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <img
              src="https://images.unsplash.com/photo-1556761175-129418cb2dfe"
              alt="Custom Simulations"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">Custom Interview Simulations</h3>
            <p className="text-gray-700">
              Tailor your interview practice to specific industries and roles, helping you get the precise experience you need.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Career Guidance"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">Expert Career Guidance</h3>
            <p className="text-gray-700">
              Get personalized career advice from professionals to help you navigate the job market and achieve your goals.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <img
              src="https://www.shutterstock.com/image-photo/men-interview-ai-robot-machine-260nw-2280071965.jpg"
              alt="Detailed Reports"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">In-Depth Performance Reports</h3>
            <p className="text-gray-700">
              Receive comprehensive reports on your performance, with actionable insights to improve your skills and boost confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Ace Your Next Interview?</h2>
          <p className="text-lg mb-8">
            Join InterviewX today and get instant feedback on your performance. Practice as many times as you need!
          </p>
          <Link to="/interview" className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition transform hover:scale-105">
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

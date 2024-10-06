import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';  // Importing icons from Heroicons

const Navbar = () => {
  const { currentUser, logout } = useAuth(); // Using the auth context to get current user and logout function
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">
          InterviewX
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          {currentUser && <Link to="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>}
          <Link to="/interview" className="text-gray-300 hover:text-white">Interview</Link>
          {currentUser ? (
            <button 
              onClick={handleLogout}
              className="text-gray-300 hover:text-white"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-center p-4">
          <Link to="/" className="block py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Home</Link>
          {currentUser && <Link to="/dashboard" className="block py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Dashboard</Link>}
          <Link to="/interview" className="block py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Interview</Link>
          {currentUser ? (
            <button 
              onClick={() => {
                handleLogout();  // Logs out the user
                setIsOpen(false);  // Closes the mobile menu
              }} 
              className="block py-2 text-gray-300 hover:text-white w-full text-left">
              Logout
            </button>

          ) : (
            <Link to="/login" className="block py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

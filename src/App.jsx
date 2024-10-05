import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component
import Home from './pages/Home'; // Example home page
import Dashboard from './pages/Dashboard'; // Dashboard page
import Interview from './pages/Interview'; // Interview component
import Login from './pages/Login'; // Login component
import Result from './pages/Result'; // Result page component
import Register from './pages/Register';
import { AuthProvider } from './hooks/useAuth'; // Firebase Auth Provider
import PrivateRoute from './components/PrivateRoute'; // Optional: A private route component to guard certain pages


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar /> {/* Navbar included on all pages */}
        <div className="pt-12"> {/* Padding to prevent overlap with the fixed Navbar */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page */}
            <Route path="/login" element={<Login />} /> {/* Login page */}
            <Route path="/register" element={<Register />} />
            {/* Protect routes that require authentication using a PrivateRoute */}
            <Route 
              path="/dashboard" 
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/interview" 
              element={
                <PrivateRoute>
                  <Interview />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/result" 
              element={
                <PrivateRoute>
                  <Result />
                </PrivateRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

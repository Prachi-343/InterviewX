import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { firestore } from '../services/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user's interviews from Firestore
  useEffect(() => {
    const fetchInterviews = async () => {
      if (currentUser) {
        const interviewsCollection = collection(firestore, 'interviews');
        const q = query(interviewsCollection, where('userId', '==', currentUser.uid));
        const querySnapshot = await getDocs(q);

        const fetchedInterviews = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setInterviews(fetchedInterviews);
        setLoading(false);
      }
    };

    fetchInterviews();
  }, [currentUser]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-semibold text-gray-800">Dashboard</h1>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        <p className="text-gray-600 mb-8">
          Welcome back, {currentUser?.email}! Here a summary of your recent interviews and activities.
        </p>

        {/* Show loading while fetching interviews */}
        {loading ? (
          <p>Loading your interviews...</p>
        ) : interviews.length === 0 ? (
          <p>You have no interviews yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interviews.map((interview) => (
              <div key={interview.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Interview on {interview.date}</h2>
                <p className="text-gray-600 mb-4">{interview.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                  View Results
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

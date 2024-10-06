/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { sendInterviewData } from '../services/aiApi';
import { useAuth } from '../hooks/useAuth';

const InterviewPage = () => {
  const { currentUser } = useAuth();
  const [isInterviewActive, setIsInterviewActive] = useState(false);
  const [interviewResult, setInterviewResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const startInterview = async () => {
    setIsInterviewActive(true);
    setLoading(true);

    try {
      const audioData = 'dummy-audio'; // Replace with actual audio data
      const videoData = 'dummy-video'; // Replace with actual video data

      // Send interview data to backend for processing
      const result = await sendInterviewData(audioData, videoData, currentUser.uid);
      setInterviewResult(result);
    } catch (error) {
      console.error('Error during interview processing:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full max-w-3xl">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">AI-Powered Interview</h1>
        <p className="text-gray-600 mb-8">Prepare to be evaluated by AI on your verbal and non-verbal responses.</p>

        {isInterviewActive ? (
          <div>
            {loading ? (
              <p>Processing interview...</p>
            ) : (
              interviewResult && (
                <div className="mt-4">
                  <h3 className="text-xl font-bold">Interview Result</h3>
                  <p>{interviewResult.decision}</p>
                </div>
              )
            )}
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition">
              End Interview
            </button>
          </div>
        ) : (
          <button
            onClick={startInterview}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Start Interview
          </button>
        )}
      </div>
    </div>
  );
};

export default InterviewPage;

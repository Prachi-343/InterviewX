/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { sendInterviewData } from '../services/aiApi';
import { useAuth } from '../hooks/useAuth';
import { emitInterviewData, subscribeToResults } from '../services/socketService';

const Interview = () => {
  const { currentUser } = useAuth();
  const [isInterviewActive, setIsInterviewActive] = useState(false);
  const [interviewResult, setInterviewResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Subscribe to the real-time interview result
    subscribeToResults((result) => {
      setInterviewResult(result);
    });
  }, []);

  const startInterview = async () => {
    setIsInterviewActive(true);
    setLoading(true);

    // Dummy audio and video data; replace with actual capture
    const audioData = 'dummy-audio-data';
    const videoData = 'dummy-video-data';

    // Emit real-time data using Socket.IO
    emitInterviewData({ audio: audioData, video: videoData, userId: currentUser.uid });

    try {
      const result = await sendInterviewData(audioData, videoData, currentUser.uid);
      setInterviewResult(result);
    } catch (error) {
      console.error('Error processing interview:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-lg rounded-lg text-center max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4">Start Your AI-Powered Interview</h1>
        <p className="text-gray-600 mb-8">Be evaluated on your verbal and non-verbal responses.</p>

        {isInterviewActive ? (
          <div>
            {loading ? (
              <p>Processing interview...</p>
            ) : interviewResult ? (
              <div className="mt-4">
                <h2 className="text-xl font-bold">Interview Result</h2>
                <p>{interviewResult.decision}</p>
              </div>
            ) : (
              <p>The interview is in progress...</p>
            )}

            <button className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4">
              End Interview
            </button>
          </div>
        ) : (
          <button
            onClick={startInterview}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Start Interview
          </button>
        )}
      </div>
    </div>
  );
};

export default Interview;

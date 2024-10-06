import React from 'react';

const Result = ({ result }) => {
  if (!result) {
    return <p>No result available.</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Interview Result</h1>
        <div className="text-left">
          <p className="text-gray-700 mb-2">Decision: <strong>{result.decision}</strong></p>
          <p className="text-gray-700 mb-2">Accuracy: <strong>{result.accuracy}%</strong></p>
          <p className="text-gray-700 mb-2">Confidence: <strong>{result.confidence}%</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Result;

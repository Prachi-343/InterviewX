/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuth } from '../hooks/useAuth';
import { firestore } from '../services/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const ResumeUpload = () => {
  const { currentUser } = useAuth();
  const [resume, setResume] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const storage = getStorage();

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!resume) {
      setErrorMessage('Please select a file first.');
      return;
    }

    setUploading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const storageRef = ref(storage, `resumes/${currentUser.uid}/${resume.name}`);
      await uploadBytes(storageRef, resume);

      const downloadURL = await getDownloadURL(storageRef);
      
      // Save resume information to Firestore
      await addDoc(collection(firestore, 'resumes'), {
        userId: currentUser.uid,
        fileName: resume.name,
        downloadURL,
        timestamp: new Date(),
      });

      setSuccessMessage('Resume uploaded successfully!');
      setResume(null); // Reset the file input
    } catch (error) {
      setErrorMessage('Error uploading file. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload Your Resume</h2>
      
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

      <input 
        type="file" 
        onChange={handleFileChange} 
        className="mb-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />

      <button
        onClick={handleUpload}
        className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition ${
          uploading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Upload Resume'}
      </button>
    </div>
  );
};

export default ResumeUpload;

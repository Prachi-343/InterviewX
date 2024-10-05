import axios from 'axios';

// Function to send audio data for NLP processing
export const sendAudioForProcessing = async (audioData) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/process-audio`, {
      audio: audioData,
    });
    return response.data;
  } catch (error) {
    console.error('Error sending audio for processing:', error);
    throw error;
  }
};

// Function to send video data for CNN-based face analysis
export const sendVideoForProcessing = async (videoData) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/process-video`, {
      video: videoData,
    });
    return response.data;
  } catch (error) {
    console.error('Error sending video for processing:', error);
    throw error;
  }
};

// Function to send both audio and video data for full interview processing
export const sendInterviewData = async (audioData, videoData, userId) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/process-interview`, {
      audio: audioData,
      video: videoData,
      userId,
    });
    return response.data;
  } catch (error) {
    console.error('Error processing interview data:', error);
    throw error;
  }
};

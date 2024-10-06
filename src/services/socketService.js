import { io } from 'socket.io-client';

// Create a socket instance, connecting to the backend server
let socket;

export const initiateSocketConnection = (serverUrl) => {
  socket = io(serverUrl, {
    transports: ['websocket'],
    reconnectionAttempts: 5,
    timeout: 10000,
  });

  socket.on('connect', () => {
    console.log('Connected to the server');
  });

  socket.on('connect_error', (error) => {
    console.log('Connection Error:', error.message);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from the server');
  });
};

// Function to emit interview data to the server (audio/video)
export const emitInterviewData = (data) => {
  if (socket) {
    socket.emit('interview-data', data);
  }
};

// Function to listen for real-time results
export const subscribeToResults = (callback) => {
  if (socket) {
    socket.on('interview-result', (result) => {
      callback(result);
    });
  }
};

// Function to close socket connection when it's no longer needed
export const closeSocketConnection = () => {
  if (socket) {
    socket.disconnect();
    console.log('Socket disconnected');
  }
};

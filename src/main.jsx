import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import App from './App';
import './index.css';

// Create a root
const root = createRoot(document.getElementById('root'));

// Render the app using the new createRoot API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

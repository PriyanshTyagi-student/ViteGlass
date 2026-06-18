import React, { useState } from 'react';
import { ResumeProvider } from './context/ResumeContext';
import Workspace from './components/layout/Workspace';
import './index.css';
import './App.css'; // Will be mostly empty but good to keep

function App() {
  return (
    <ResumeProvider>
      <div className="app-container">
        <Workspace />
      </div>
    </ResumeProvider>
  );
}

export default App;

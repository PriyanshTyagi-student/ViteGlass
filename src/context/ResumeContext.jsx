import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ResumeContext = createContext();

const defaultState = {
  personalDetails: {
    name: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    portfolio: '',
    summary: ''
  },
  experience: [],
  education: [],
  projects: [],
  skills: [],
  certifications: [],
  achievements: [],
  languages: [],
  interests: [],
  settings: {
    template: 'modern', // 'ats', 'liquid-glass', 'modern'
    color: '#0A84FF',
    font: 'Inter',
    density: 'standard'
  }
};

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useLocalStorage('vitaglass_resume_v2', defaultState);

  // Helper functions to update specific sections
  const updatePersonalDetails = (details) => {
    setResumeData(prev => ({ ...prev, personalDetails: { ...prev.personalDetails, ...details } }));
  };

  const updateSection = (section, data) => {
    setResumeData(prev => ({ ...prev, [section]: data }));
  };

  const updateSettings = (settings) => {
    setResumeData(prev => ({ ...prev, settings: { ...prev.settings, ...settings } }));
  };

  // Generic item array operations (add, update, delete)
  const addItem = (section, item) => {
    setResumeData(prev => ({
      ...prev,
      [section]: [...prev[section], { id: Date.now(), ...item }]
    }));
  };

  const updateItem = (section, id, updatedItem) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].map(item => item.id === id ? { ...item, ...updatedItem } : item)
    }));
  };

  const deleteItem = (section, id) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== id)
    }));
  };

  const value = {
    resumeData,
    updatePersonalDetails,
    updateSection,
    updateSettings,
    addItem,
    updateItem,
    deleteItem,
    setResumeData
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
}

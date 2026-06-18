import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ResumeContext = createContext();

const defaultState = {
  personalDetails: {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/janedoe',
    github: 'github.com/janedoe',
    portfolio: 'janedoe.com',
    summary: 'A highly motivated and results-driven professional with 5+ years of experience in building modern web applications. Passionate about beautiful UI and great user experiences.'
  },
  experience: [
    {
      id: 1,
      company: 'Tech Innovators Inc.',
      role: 'Senior Frontend Developer',
      startDate: 'Jan 2021',
      endDate: 'Present',
      description: 'Led the development of the core SaaS platform. Improved performance by 40% and implemented a new design system using React and modern CSS.'
    }
  ],
  education: [
    {
      id: 1,
      institution: 'University of California, Berkeley',
      degree: 'B.S. Computer Science',
      startDate: 'Aug 2016',
      endDate: 'May 2020',
      description: 'Graduated with Honors. Specialized in Human-Computer Interaction.'
    }
  ],
  projects: [
    {
      id: 1,
      title: 'VitaGlass',
      link: 'vitaglass.app',
      description: 'A beautiful, client-side resume builder created with React and Vite.'
    }
  ],
  skills: ['JavaScript', 'React', 'CSS', 'UI/UX Design', 'Vite', 'Node.js'],
  certifications: [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      link: ''
    }
  ],
  achievements: [
    {
      id: 1,
      title: 'Employee of the Year',
      date: '2022',
      description: 'Awarded for outstanding contribution to the core platform redesign.'
    }
  ],
  languages: [
    { id: 1, language: 'English', proficiency: 'Native' },
    { id: 2, language: 'Spanish', proficiency: 'Conversational' }
  ],
  interests: ['UI/UX Design', 'Open Source', 'Photography'],
  settings: {
    template: 'modern', // 'ats', 'developer', 'modern', 'executive'
    color: '#0A84FF',
    font: 'Inter'
  }
};

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useLocalStorage('vitaglass_resume', defaultState);

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

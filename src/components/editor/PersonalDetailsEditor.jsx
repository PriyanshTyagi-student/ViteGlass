import React from 'react';
import { useResume } from '../../context/ResumeContext';

const PersonalDetailsEditor = () => {
  const { resumeData, updatePersonalDetails } = useResume();
  const { personalDetails } = resumeData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updatePersonalDetails({ [name]: value });
  };

  return (
    <div className="glass-panel" style={{ padding: '32px' }}>
      <h2 style={{ marginBottom: '24px', fontSize: '24px' }}>Personal Details</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input 
            type="text" 
            className="form-input" 
            name="name" 
            value={personalDetails.name} 
            onChange={handleChange} 
            placeholder="Jane Doe"
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            className="form-input" 
            name="email" 
            value={personalDetails.email} 
            onChange={handleChange} 
            placeholder="jane@example.com"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Phone</label>
          <input 
            type="text" 
            className="form-input" 
            name="phone" 
            value={personalDetails.phone} 
            onChange={handleChange} 
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Location</label>
          <input 
            type="text" 
            className="form-input" 
            name="location" 
            value={personalDetails.location} 
            onChange={handleChange} 
            placeholder="San Francisco, CA"
          />
        </div>

        <div className="form-group">
          <label className="form-label">LinkedIn (Optional)</label>
          <input 
            type="text" 
            className="form-input" 
            name="linkedin" 
            value={personalDetails.linkedin} 
            onChange={handleChange} 
            placeholder="linkedin.com/in/username"
          />
        </div>

        <div className="form-group">
          <label className="form-label">GitHub (Optional)</label>
          <input 
            type="text" 
            className="form-input" 
            name="github" 
            value={personalDetails.github} 
            onChange={handleChange} 
            placeholder="github.com/username"
          />
        </div>
      </div>
      
      <div className="form-group" style={{ marginTop: '16px' }}>
        <label className="form-label">Portfolio Website (Optional)</label>
        <input 
          type="text" 
          className="form-input" 
          name="portfolio" 
          value={personalDetails.portfolio} 
          onChange={handleChange} 
          placeholder="yourwebsite.com"
        />
      </div>

      <div className="form-group" style={{ marginTop: '16px' }}>
        <label className="form-label">Professional Summary</label>
        <textarea 
          className="form-textarea" 
          name="summary" 
          value={personalDetails.summary} 
          onChange={handleChange} 
          placeholder="Write a brief summary of your professional background..."
        />
      </div>
    </div>
  );
};

export default PersonalDetailsEditor;

import React, { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import { Plus, X } from 'lucide-react';

const InterestsEditor = () => {
  const { resumeData, updateSection } = useResume();
  const { interests = [] } = resumeData;
  const [newInterest, setNewInterest] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      updateSection('interests', [...interests, newInterest.trim()]);
      setNewInterest('');
    }
  };

  const handleRemove = (interestToRemove) => {
    updateSection('interests', interests.filter(i => i !== interestToRemove));
  };

  return (
    <div className="glass-panel" style={{ padding: '32px' }}>
      <h2 style={{ marginBottom: '24px', fontSize: '24px' }}>Hobbies & Interests</h2>
      
      <form onSubmit={handleAdd} style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
        <input 
          type="text" 
          className="form-input" 
          value={newInterest} 
          onChange={(e) => setNewInterest(e.target.value)} 
          placeholder="Add a hobby/interest (e.g. Photography)"
        />
        <button type="submit" className="btn-primary" style={{ padding: '10px 24px' }}>
          <Plus size={16} /> Add
        </button>
      </form>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {interests.map((interest, index) => (
          <div 
            key={index} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              background: 'rgba(139, 92, 246, 0.1)', 
              color: '#8B5CF6', 
              padding: '6px 12px', 
              borderRadius: '999px',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              fontSize: '14px',
              fontWeight: 500
            }}
          >
            {interest}
            <button 
              onClick={() => handleRemove(interest)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8B5CF6', opacity: 0.6 }}
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
      
      {interests.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
          No interests added yet. Type an interest and press Enter.
        </div>
      )}
    </div>
  );
};

export default InterestsEditor;

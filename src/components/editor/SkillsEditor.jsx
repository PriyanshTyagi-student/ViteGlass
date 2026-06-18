import React, { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import { Plus, X } from 'lucide-react';

const SkillsEditor = () => {
  const { resumeData, updateSection } = useResume();
  const { skills } = resumeData;
  const [newSkill, setNewSkill] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      updateSection('skills', [...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemove = (skillToRemove) => {
    updateSection('skills', skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="glass-panel" style={{ padding: '32px' }}>
      <h2 style={{ marginBottom: '24px', fontSize: '24px' }}>Skills</h2>
      
      <form onSubmit={handleAdd} style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
        <input 
          type="text" 
          className="form-input" 
          value={newSkill} 
          onChange={(e) => setNewSkill(e.target.value)} 
          placeholder="Add a skill (e.g. React.js)"
        />
        <button type="submit" className="btn-primary" style={{ padding: '10px 24px' }}>
          <Plus size={16} /> Add
        </button>
      </form>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {skills.map((skill, index) => (
          <div 
            key={index} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              background: 'rgba(10, 132, 255, 0.1)', 
              color: 'var(--primary)', 
              padding: '6px 12px', 
              borderRadius: '999px',
              border: '1px solid rgba(10, 132, 255, 0.2)',
              fontSize: '14px',
              fontWeight: 500
            }}
          >
            {skill}
            <button 
              onClick={() => handleRemove(skill)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', opacity: 0.6 }}
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
      
      {skills.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
          No skills added yet. Type a skill and press Enter.
        </div>
      )}
    </div>
  );
};

export default SkillsEditor;

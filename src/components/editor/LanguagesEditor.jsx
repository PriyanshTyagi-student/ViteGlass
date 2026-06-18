import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';

const LanguagesEditor = () => {
  const { resumeData, updateItem, addItem, deleteItem } = useResume();
  const { languages = [] } = resumeData;

  const handleAdd = () => {
    addItem('languages', {
      language: '',
      proficiency: 'Conversational'
    });
  };

  const proficiencyLevels = ['Basic', 'Conversational', 'Fluent', 'Native', 'Bilingual'];

  return (
    <div className="glass-panel" style={{ padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px' }}>Languages</h2>
        <button className="btn-primary" onClick={handleAdd}>
          <Plus size={16} /> Add Language
        </button>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
        {languages.map((item, index) => (
          <div key={item.id} style={{ padding: '16px', background: 'rgba(255,255,255,0.3)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', position: 'relative' }}>
            <button 
              onClick={() => deleteItem('languages', item.id)}
              style={{ position: 'absolute', top: '16px', right: '16px', color: '#ef4444' }}
            >
              <Trash2 size={16} />
            </button>

            <div className="form-group" style={{ paddingRight: '24px' }}>
              <label className="form-label">Language</label>
              <input 
                type="text" 
                className="form-input" 
                value={item.language} 
                onChange={(e) => updateItem('languages', item.id, { language: e.target.value })} 
                placeholder="e.g. Spanish"
                style={{ marginBottom: '12px' }}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Proficiency</label>
              <select 
                className="form-input" 
                value={item.proficiency} 
                onChange={(e) => updateItem('languages', item.id, { proficiency: e.target.value })}
              >
                {proficiencyLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>

      {languages.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
          No languages added yet. Click "Add Language" to start.
        </div>
      )}
    </div>
  );
};

export default LanguagesEditor;

import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';

const EducationEditor = () => {
  const { resumeData, updateItem, addItem, deleteItem } = useResume();
  const { education } = resumeData;

  const handleAdd = () => {
    addItem('education', {
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
      description: ''
    });
  };

  return (
    <div className="glass-panel" style={{ padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px' }}>Education</h2>
        <button className="btn-primary" onClick={handleAdd}>
          <Plus size={16} /> Add Education
        </button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {education.map((item, index) => (
          <div key={item.id} style={{ padding: '24px', background: 'rgba(255,255,255,0.3)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600 }}>Education #{index + 1}</h3>
              <button 
                onClick={() => deleteItem('education', item.id)}
                style={{ color: '#ef4444', padding: '4px' }}
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">Institution</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={item.institution} 
                  onChange={(e) => updateItem('education', item.id, { institution: e.target.value })} 
                  placeholder="University or School"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Degree</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={item.degree} 
                  onChange={(e) => updateItem('education', item.id, { degree: e.target.value })} 
                  placeholder="Degree and Major"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Start Date</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={item.startDate} 
                  onChange={(e) => updateItem('education', item.id, { startDate: e.target.value })} 
                  placeholder="MM/YYYY"
                />
              </div>
              <div className="form-group">
                <label className="form-label">End Date</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={item.endDate} 
                  onChange={(e) => updateItem('education', item.id, { endDate: e.target.value })} 
                  placeholder="MM/YYYY or Expected"
                />
              </div>
            </div>

            <div className="form-group" style={{ marginTop: '16px' }}>
              <label className="form-label">Description / Honors (Optional)</label>
              <textarea 
                className="form-textarea" 
                value={item.description} 
                onChange={(e) => updateItem('education', item.id, { description: e.target.value })} 
                placeholder="GPA, coursework, honors..."
                style={{ minHeight: '60px' }}
              />
            </div>
          </div>
        ))}

        {education.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
            No education added yet. Click "Add Education" to start.
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationEditor;

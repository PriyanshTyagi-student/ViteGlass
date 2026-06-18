import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';

const ExperienceEditor = () => {
  const { resumeData, updateItem, addItem, deleteItem } = useResume();
  const { experience } = resumeData;

  const handleAdd = () => {
    addItem('experience', {
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      description: ''
    });
  };

  return (
    <div className="glass-panel" style={{ padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px' }}>Experience</h2>
        <button className="btn-primary" onClick={handleAdd}>
          <Plus size={16} /> Add Experience
        </button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {experience.map((item, index) => (
          <div key={item.id} style={{ padding: '24px', background: 'rgba(255,255,255,0.3)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600 }}>Experience #{index + 1}</h3>
              <button 
                onClick={() => deleteItem('experience', item.id)}
                style={{ color: '#ef4444', padding: '4px' }}
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">Company</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={item.company} 
                  onChange={(e) => updateItem('experience', item.id, { company: e.target.value })} 
                  placeholder="Company Name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Role</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={item.role} 
                  onChange={(e) => updateItem('experience', item.id, { role: e.target.value })} 
                  placeholder="Job Title"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Start Date</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={item.startDate} 
                  onChange={(e) => updateItem('experience', item.id, { startDate: e.target.value })} 
                  placeholder="MM/YYYY"
                />
              </div>
              <div className="form-group">
                <label className="form-label">End Date</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={item.endDate} 
                  onChange={(e) => updateItem('experience', item.id, { endDate: e.target.value })} 
                  placeholder="MM/YYYY or Present"
                />
              </div>
            </div>

            <div className="form-group" style={{ marginTop: '16px' }}>
              <label className="form-label">Description</label>
              <textarea 
                className="form-textarea" 
                value={item.description} 
                onChange={(e) => updateItem('experience', item.id, { description: e.target.value })} 
                placeholder="Describe your achievements and responsibilities..."
                style={{ minHeight: '80px' }}
              />
            </div>
          </div>
        ))}

        {experience.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
            No experience added yet. Click "Add Experience" to start.
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceEditor;

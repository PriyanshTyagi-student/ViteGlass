import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';

const AchievementsEditor = () => {
  const { resumeData, updateItem, addItem, deleteItem } = useResume();
  const { achievements = [] } = resumeData;

  const handleAdd = () => {
    addItem('achievements', {
      title: '',
      date: '',
      description: ''
    });
  };

  return (
    <div className="glass-panel" style={{ padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px' }}>Awards & Achievements</h2>
        <button className="btn-primary" onClick={handleAdd}>
          <Plus size={16} /> Add Achievement
        </button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {achievements.map((item, index) => (
          <div key={item.id} style={{ padding: '24px', background: 'rgba(255,255,255,0.3)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600 }}>Achievement #{index + 1}</h3>
              <button 
                onClick={() => deleteItem('achievements', item.id)}
                style={{ color: '#ef4444', padding: '4px' }}
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div className="form-group">
                <label className="form-label">Title</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={item.title} 
                  onChange={(e) => updateItem('achievements', item.id, { title: e.target.value })} 
                  placeholder="e.g. Employee of the Year"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Date</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={item.date} 
                  onChange={(e) => updateItem('achievements', item.id, { date: e.target.value })} 
                  placeholder="MM/YYYY or YYYY"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea 
                className="form-textarea" 
                value={item.description} 
                onChange={(e) => updateItem('achievements', item.id, { description: e.target.value })} 
                placeholder="Briefly describe the achievement..."
                style={{ minHeight: '60px' }}
              />
            </div>
          </div>
        ))}

        {achievements.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
            No achievements added yet. Click "Add Achievement" to start.
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementsEditor;

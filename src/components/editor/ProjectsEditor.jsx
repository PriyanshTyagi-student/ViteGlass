import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';

const ProjectsEditor = () => {
  const { resumeData, updateItem, addItem, deleteItem } = useResume();
  const { projects } = resumeData;

  const handleAdd = () => {
    addItem('projects', {
      title: '',
      link: '',
      description: ''
    });
  };

  return (
    <div className="glass-panel" style={{ padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px' }}>Projects</h2>
        <button className="btn-primary" onClick={handleAdd}>
          <Plus size={16} /> Add Project
        </button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {projects.map((item, index) => (
          <div key={item.id} style={{ padding: '24px', background: 'rgba(255,255,255,0.3)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600 }}>Project #{index + 1}</h3>
              <button 
                onClick={() => deleteItem('projects', item.id)}
                style={{ color: '#ef4444', padding: '4px' }}
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">Project Title</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={item.title} 
                  onChange={(e) => updateItem('projects', item.id, { title: e.target.value })} 
                  placeholder="App Name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Link</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={item.link} 
                  onChange={(e) => updateItem('projects', item.id, { link: e.target.value })} 
                  placeholder="github.com/... or app.com"
                />
              </div>
            </div>

            <div className="form-group" style={{ marginTop: '16px' }}>
              <label className="form-label">Description</label>
              <textarea 
                className="form-textarea" 
                value={item.description} 
                onChange={(e) => updateItem('projects', item.id, { description: e.target.value })} 
                placeholder="Technologies used, features..."
                style={{ minHeight: '60px' }}
              />
            </div>
          </div>
        ))}

        {projects.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
            No projects added yet. Click "Add Project" to start.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsEditor;

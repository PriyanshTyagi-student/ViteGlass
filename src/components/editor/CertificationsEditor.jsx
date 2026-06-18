import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';

const CertificationsEditor = () => {
  const { resumeData, updateItem, addItem, deleteItem } = useResume();
  const { certifications = [] } = resumeData;

  const handleAdd = () => {
    addItem('certifications', {
      name: '',
      issuer: '',
      date: '',
      link: ''
    });
  };

  return (
    <div className="glass-panel" style={{ padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px' }}>Certifications</h2>
        <button className="btn-primary" onClick={handleAdd}>
          <Plus size={16} /> Add Certification
        </button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {certifications.map((item, index) => (
          <div key={item.id} style={{ padding: '24px', background: 'rgba(255,255,255,0.3)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600 }}>Certification #{index + 1}</h3>
              <button 
                onClick={() => deleteItem('certifications', item.id)}
                style={{ color: '#ef4444', padding: '4px' }}
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={item.name} 
                  onChange={(e) => updateItem('certifications', item.id, { name: e.target.value })} 
                  placeholder="e.g. AWS Certified Solutions Architect"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Issuer</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={item.issuer} 
                  onChange={(e) => updateItem('certifications', item.id, { issuer: e.target.value })} 
                  placeholder="e.g. Amazon Web Services"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Date</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={item.date} 
                  onChange={(e) => updateItem('certifications', item.id, { date: e.target.value })} 
                  placeholder="MM/YYYY or YYYY"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Credential Link (Optional)</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={item.link} 
                  onChange={(e) => updateItem('certifications', item.id, { link: e.target.value })} 
                  placeholder="URL to verify credential"
                />
              </div>
            </div>
          </div>
        ))}

        {certifications.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
            No certifications added yet. Click "Add Certification" to start.
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationsEditor;

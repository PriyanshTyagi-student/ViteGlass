import React from 'react';
import { useResume } from '../../context/ResumeContext';

const TemplateEditor = () => {
  const { resumeData, updateSettings } = useResume();
  const { settings } = resumeData;

  const templates = [
    { id: 'modern', name: 'Modern' },
    { id: 'ats', name: 'ATS Professional' },
    { id: 'liquid', name: 'Liquid Glass' }
  ];

  const colors = ['#0A84FF', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#1F2937'];
  const fonts = ['Inter', 'Outfit', 'Roboto', 'Lora'];

  return (
    <div className="glass-panel" style={{ padding: '32px' }}>
      <h2 style={{ marginBottom: '24px', fontSize: '24px' }}>Templates & Styling</h2>
      
      <div className="form-group" style={{ marginBottom: '32px' }}>
        <label className="form-label" style={{ marginBottom: '16px' }}>Select Template</label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {templates.map(tpl => (
            <div 
              key={tpl.id}
              onClick={() => updateSettings({ template: tpl.id })}
              style={{
                border: `2px solid ${settings.template === tpl.id ? 'var(--primary)' : 'rgba(0,0,0,0.1)'}`,
                padding: '24px',
                borderRadius: '12px',
                cursor: 'pointer',
                background: settings.template === tpl.id ? 'rgba(10, 132, 255, 0.05)' : 'rgba(255,255,255,0.5)',
                textAlign: 'center',
                fontWeight: 600
              }}
            >
              {tpl.name}
            </div>
          ))}
        </div>
      </div>

      <div className="form-group" style={{ marginBottom: '32px' }}>
        <label className="form-label" style={{ marginBottom: '16px' }}>Accent Color</label>
        <div style={{ display: 'flex', gap: '12px' }}>
          {colors.map(color => (
            <div 
              key={color}
              onClick={() => updateSettings({ color })}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: color,
                cursor: 'pointer',
                border: settings.color === color ? '3px solid white' : 'none',
                boxShadow: settings.color === color ? `0 0 0 2px ${color}` : '0 2px 4px rgba(0,0,0,0.1)'
              }}
            />
          ))}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" style={{ marginBottom: '16px' }}>Font Family</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {fonts.map(font => (
            <button 
              key={font}
              onClick={() => updateSettings({ font: `${font}, sans-serif` })}
              className={settings.font.includes(font) ? 'btn-primary' : 'btn-secondary'}
              style={{ fontFamily: `${font}, sans-serif` }}
            >
              {font}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateEditor;

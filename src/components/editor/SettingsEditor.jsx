import React from 'react';
import { useResume } from '../../context/ResumeContext';

const SettingsEditor = () => {
  const { resumeData, updateSettings } = useResume();
  const { settings } = resumeData;

  const densities = [
    { id: 'compact', name: 'Compact (Fits more content)' },
    { id: 'standard', name: 'Standard (Balanced spacing)' },
    { id: 'spacious', name: 'Spacious (Elegant and airy)' }
  ];

  return (
    <div className="glass-panel" style={{ padding: '32px' }}>
      <h2 style={{ marginBottom: '24px', fontSize: '24px' }}>Document Settings</h2>
      
      <div className="form-group" style={{ marginBottom: '32px' }}>
        <label className="form-label" style={{ marginBottom: '16px' }}>Layout Density</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {densities.map(density => (
            <label 
              key={density.id} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                padding: '16px',
                background: settings.density === density.id ? 'rgba(10, 132, 255, 0.05)' : 'rgba(255,255,255,0.5)',
                border: `2px solid ${settings.density === density.id ? 'var(--primary)' : 'rgba(0,0,0,0.1)'}`,
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 500
              }}
            >
              <input 
                type="radio" 
                name="density" 
                value={density.id}
                checked={settings.density === density.id}
                onChange={() => updateSettings({ density: density.id })}
                style={{ cursor: 'pointer', width: '18px', height: '18px' }}
              />
              {density.name}
            </label>
          ))}
        </div>
        <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--text-secondary)' }}>
          Note: This setting will adjust the margins and line heights of your resume templates.
        </p>
      </div>
    </div>
  );
};

export default SettingsEditor;

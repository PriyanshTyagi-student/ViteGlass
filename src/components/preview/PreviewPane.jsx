import React from 'react';
import { useResume } from '../../context/ResumeContext';
import ModernTemplate from '../../templates/ModernTemplate';
import ATSTemplate from '../../templates/ATSTemplate';
import LiquidGlassTemplate from '../../templates/LiquidGlassTemplate';

const PreviewPane = () => {
  const { resumeData } = useResume();
  const { settings } = resumeData;
  
  const renderTemplate = () => {
    switch (settings.template) {
      case 'ats':
        return <ATSTemplate />;
      case 'liquid':
        return <LiquidGlassTemplate />;
      case 'modern':
      default:
        return <ModernTemplate />;
    }
  };

  return (
    <div style={{ flex: 1, padding: '32px', overflowY: 'auto', display: 'flex', justifyContent: 'center' }}>
      <div 
        id="resume-preview-container"
        style={{ 
          width: '210mm', 
          minHeight: '297mm', 
          background: 'white', 
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          padding: '40px',
          color: '#000',
          position: 'relative'
        }}
      >
        {renderTemplate()}
      </div>
    </div>
  );
};

export default PreviewPane;

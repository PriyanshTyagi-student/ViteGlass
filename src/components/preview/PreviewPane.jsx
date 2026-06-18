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
    <div style={{ flex: 1, padding: '32px 16px', overflowY: 'auto', display: 'flex', justifyContent: 'center' }}>
      <style dangerouslySetInnerHTML={{__html: `
        .preview-scale-wrapper {
          transform-origin: top center;
          transition: transform 0.3s ease;
        }
        @media (max-width: 1024px) {
          .preview-scale-wrapper {
            transform: scale(0.8);
            margin-bottom: -20%;
          }
        }
        @media (max-width: 768px) {
          .preview-scale-wrapper {
            transform: scale(0.55);
            margin-bottom: -50%;
          }
        }
        @media (max-width: 480px) {
          .preview-scale-wrapper {
            transform: scale(0.42);
            margin-bottom: -70%;
          }
        }
      `}} />
      <div className="preview-scale-wrapper">
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
    </div>
  );
};

export default PreviewPane;

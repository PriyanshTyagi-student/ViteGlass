import React from 'react';
import { Layers, Download } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import html2pdf from 'html2pdf.js';

const Header = () => {
  const { resumeData } = useResume();
  const { personalDetails, experience, education, skills, projects } = resumeData;
  
  const handleExport = () => {
    const element = document.getElementById('resume-preview-container');
    const opt = {
      margin:       0,
      filename:     `${personalDetails.name ? personalDetails.name.replace(/\s+/g, '_') : 'Resume'}_CV.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  const getCompletionStats = () => {
    const required = [
      { name: 'Summary', check: () => !!personalDetails.summary },
      { name: 'Experience', check: () => experience.length > 0 },
      { name: 'Education', check: () => education.length > 0 },
      { name: 'Skills', check: () => skills.length > 0 },
      { name: 'Projects', check: () => projects.length > 0 },
      { name: 'Contact Info', check: () => !!personalDetails.email && !!personalDetails.phone }
    ];

    const completed = required.filter(req => req.check());
    const missing = required.filter(req => !req.check()).map(req => req.name);
    const percentage = Math.round((completed.length / required.length) * 100);

    return { percentage, missing };
  };

  const { percentage, missing } = getCompletionStats();

  return (
    <header className="app-header">
      <div className="app-logo">
        <Layers className="text-primary" size={24} color="var(--primary)" />
        VitaGlass
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: '13px' }}>
          <div style={{ fontWeight: 600, color: percentage === 100 ? 'var(--primary)' : 'var(--text-primary)' }}>
            {percentage}% Complete
          </div>
          {missing.length > 0 && (
            <div style={{ color: 'var(--text-secondary)', fontSize: '11px', maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Missing: {missing.join(', ')}
            </div>
          )}
        </div>
        
        <button className="btn-primary" onClick={handleExport}>
          <Download size={18} />
          Export PDF
        </button>
      </div>
    </header>
  );
};

export default Header;

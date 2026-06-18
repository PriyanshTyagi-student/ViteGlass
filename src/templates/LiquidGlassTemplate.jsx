import React from 'react';
import { useResume } from '../context/ResumeContext';

const LiquidGlassTemplate = () => {
  const { resumeData } = useResume();
  const { personalDetails = {}, experience = [], education = [], projects = [], skills = [], certifications = [], achievements = [], languages = [], interests = [], settings = {} } = resumeData;

  const densityMap = {
    compact: { gap: '12px', padding: '20px', mb: '16px' },
    standard: { gap: '24px', padding: '32px', mb: '24px' },
    spacious: { gap: '32px', padding: '40px', mb: '32px' }
  };
  const dVars = densityMap[settings.density || 'standard'];

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: '24px',
    padding: dVars.padding,
    marginBottom: dVars.mb,
    position: 'relative',
    zIndex: 2,
    color: '#1f2937'
  };

  const blobStyle1 = {
    position: 'absolute',
    top: '-10%',
    left: '-10%',
    width: '300px',
    height: '300px',
    background: settings.color || '#0A84FF',
    borderRadius: '50%',
    filter: 'blur(60px)',
    opacity: 0.6,
    zIndex: 1,
  };

  const blobStyle2 = {
    position: 'absolute',
    bottom: '10%',
    right: '-5%',
    width: '400px',
    height: '400px',
    background: '#8B5CF6', // Purple complementary
    borderRadius: '50%',
    filter: 'blur(80px)',
    opacity: 0.4,
    zIndex: 1,
  };

  return (
    <div style={{ 
      fontFamily: settings.font || 'Inter, sans-serif', 
      color: '#1f2937', 
      minHeight: '100%',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
      padding: '40px'
    }}>
      {/* Background Blobs for Liquid Glass Effect */}
      <div style={blobStyle1}></div>
      <div style={blobStyle2}></div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ ...glassStyle, textAlign: 'center', padding: dVars.padding }}>
          <h1 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-1px', color: '#111827' }}>
            {personalDetails.name || 'Your Name'}
          </h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '14px', fontWeight: 500 }}>
            {personalDetails.email && <span>{personalDetails.email}</span>}
            {personalDetails.phone && <span>{personalDetails.phone}</span>}
            {personalDetails.location && <span>{personalDetails.location}</span>}
            {personalDetails.linkedin && <span>{personalDetails.linkedin}</span>}
            {personalDetails.portfolio && <span>{personalDetails.portfolio}</span>}
          </div>
        </div>

        {/* Summary */}
        {personalDetails.summary && (
          <div style={glassStyle}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', borderBottom: `2px solid ${settings.color || '#0A84FF'}33`, paddingBottom: '8px', display: 'inline-block' }}>Profile</h2>
            <p style={{ lineHeight: 1.6, fontSize: '15px' }}>{personalDetails.summary}</p>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Experience */}
            {experience.length > 0 && (
              <div style={glassStyle}>
                <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: dVars.mb, borderBottom: `2px solid ${settings.color || '#0A84FF'}33`, paddingBottom: '8px', display: 'inline-block' }}>Experience</h2>
                {experience.map(exp => (
                  <div key={exp.id} style={{ marginBottom: dVars.mb, position: 'relative' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <div>
                        <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111827' }}>{exp.role}</h3>
                        <div style={{ fontSize: '15px', color: settings.color || '#0A84FF', fontWeight: 500 }}>{exp.company}</div>
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: 500, background: 'rgba(255,255,255,0.5)', padding: '4px 12px', borderRadius: '20px' }}>
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </div>
                    </div>
                    <p style={{ fontSize: '14px', lineHeight: 1.6 }}>{exp.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Projects */}
            {projects.length > 0 && (
              <div style={glassStyle}>
                <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: dVars.mb, borderBottom: `2px solid ${settings.color || '#0A84FF'}33`, paddingBottom: '8px', display: 'inline-block' }}>Projects</h2>
                {projects.map(proj => (
                  <div key={proj.id} style={{ marginBottom: dVars.mb }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111827' }}>{proj.title}</h3>
                      {proj.link && <a href={proj.link.startsWith('http') ? proj.link : `https://${proj.link}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', color: settings.color || '#0A84FF', textDecoration: 'none', fontWeight: 500 }}>View Project ↗</a>}
                    </div>
                    <p style={{ fontSize: '14px', lineHeight: 1.6 }}>{proj.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Achievements */}
            {achievements && achievements.length > 0 && (
              <div style={glassStyle}>
                <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: dVars.mb, borderBottom: `2px solid ${settings.color || '#0A84FF'}33`, paddingBottom: '8px', display: 'inline-block' }}>Achievements</h2>
                {achievements.map(ach => (
                  <div key={ach.id} style={{ marginBottom: dVars.mb }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <div>
                        <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111827' }}>{ach.title}</h3>
                        <div style={{ fontSize: '14px', color: settings.color || '#0A84FF', fontWeight: 500 }}>{ach.date}</div>
                      </div>
                    </div>
                    <p style={{ fontSize: '14px', lineHeight: 1.6 }}>{ach.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Education */}
            {education.length > 0 && (
              <div style={glassStyle}>
                <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: dVars.mb, borderBottom: `2px solid ${settings.color || '#0A84FF'}33`, paddingBottom: '8px', display: 'inline-block' }}>Education</h2>
                {education.map(edu => (
                  <div key={edu.id} style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>{edu.degree}</h3>
                    <div style={{ fontSize: '14px', color: settings.color || '#0A84FF', fontWeight: 500, marginBottom: '4px' }}>{edu.institution}</div>
                    <div style={{ fontSize: '13px', fontWeight: 500 }}>{edu.startDate} - {edu.endDate}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications */}
            {certifications && certifications.length > 0 && (
              <div style={glassStyle}>
                <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: dVars.mb, borderBottom: `2px solid ${settings.color || '#0A84FF'}33`, paddingBottom: '8px', display: 'inline-block' }}>Certifications</h2>
                {certifications.map(cert => (
                  <div key={cert.id} style={{ marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>{cert.name}</h3>
                    <div style={{ fontSize: '14px', color: settings.color || '#0A84FF', fontWeight: 500 }}>{cert.issuer}</div>
                    <div style={{ fontSize: '13px', fontWeight: 500 }}>{cert.date}</div>
                    {cert.link && <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', color: settings.color || '#0A84FF', textDecoration: 'none', fontWeight: 500 }}>View Credential ↗</a>}
                  </div>
                ))}
              </div>
            )}

            {/* Skills */}
            {skills.length > 0 && (
              <div style={glassStyle}>
                <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: dVars.mb, borderBottom: `2px solid ${settings.color || '#0A84FF'}33`, paddingBottom: '8px', display: 'inline-block' }}>Skills</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {skills.map((skill, index) => (
                    <span 
                      key={index} 
                      style={{ 
                        background: 'rgba(255,255,255,0.6)', 
                        padding: '6px 14px', 
                        borderRadius: '12px', 
                        fontSize: '13px',
                        fontWeight: 500,
                        border: '1px solid rgba(255,255,255,0.8)',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
                      }}
                    >
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Languages */}
            {languages && languages.length > 0 && (
              <div style={glassStyle}>
                <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: dVars.mb, borderBottom: `2px solid ${settings.color || '#0A84FF'}33`, paddingBottom: '8px', display: 'inline-block' }}>Languages</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {languages.map((lang, index) => (
                    <div key={lang.id || index} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                      <span style={{ fontWeight: 600 }}>{lang.language || lang}</span>
                      <span style={{ color: 'var(--text-secondary)' }}>{lang.proficiency || ''}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Interests */}
            {interests && interests.length > 0 && (
              <div style={glassStyle}>
                <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: dVars.mb, borderBottom: `2px solid ${settings.color || '#0A84FF'}33`, paddingBottom: '8px', display: 'inline-block' }}>Interests</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {interests.map((interest, index) => (
                    <span 
                      key={index} 
                      style={{ 
                        background: 'rgba(255,255,255,0.4)', 
                        padding: '4px 12px', 
                        borderRadius: '12px', 
                        fontSize: '13px',
                        border: '1px solid rgba(255,255,255,0.5)'
                      }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidGlassTemplate;

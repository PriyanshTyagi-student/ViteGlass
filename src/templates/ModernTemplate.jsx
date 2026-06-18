import React from 'react';
import { useResume } from '../context/ResumeContext';

const ModernTemplate = () => {
  const { resumeData } = useResume();
  const { personalDetails = {}, experience = [], education = [], skills = [], projects = [], certifications = [], achievements = [], languages = [], interests = [], settings = {} } = resumeData;

  const accentColor = settings.color || '#0A84FF';
  const densityMap = {
    compact: { mbSection: '16px', mbItem: '12px', lineHeight: 1.4 },
    standard: { mbSection: '24px', mbItem: '16px', lineHeight: 1.6 },
    spacious: { mbSection: '32px', mbItem: '24px', lineHeight: 1.8 }
  };
  const dVars = densityMap[settings.density || 'standard'];

  return (
    <div style={{ fontFamily: settings.font || 'Inter, sans-serif', color: '#333', lineHeight: dVars.lineHeight }}>
      {/* Header */}
      <header style={{ borderBottom: `4px solid ${accentColor}`, paddingBottom: dVars.mbSection, marginBottom: dVars.mbSection }}>
        <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#111', margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
          {personalDetails.name || 'Your Name'}
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '13px', color: '#555' }}>
          {personalDetails.email && <span>{personalDetails.email}</span>}
          {personalDetails.phone && <span>{personalDetails.phone}</span>}
          {personalDetails.location && <span>{personalDetails.location}</span>}
          {personalDetails.linkedin && <span>{personalDetails.linkedin}</span>}
          {personalDetails.portfolio && <span>{personalDetails.portfolio}</span>}
        </div>
      </header>

      {/* Summary */}
      {personalDetails.summary && (
        <section style={{ marginBottom: dVars.mbSection }}>
          <p style={{ fontSize: '14px', color: '#444' }}>{personalDetails.summary}</p>
        </section>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
        {/* Main Column */}
        <div>
          {/* Experience */}
          {experience.length > 0 && (
            <section style={{ marginBottom: dVars.mbSection }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: accentColor, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
                Experience
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: dVars.mbItem }}>
                {experience.map(item => (
                  <div key={item.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111', margin: 0 }}>{item.role}</h3>
                      <span style={{ fontSize: '13px', color: '#666' }}>{item.startDate} - {item.endDate}</span>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: '#444', marginBottom: '8px' }}>{item.company}</div>
                    <p style={{ fontSize: '13px', color: '#555', margin: 0 }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <section style={{ marginBottom: dVars.mbSection }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: accentColor, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
                Projects
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: dVars.mbItem }}>
                {projects.map(item => (
                  <div key={item.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111', margin: 0 }}>{item.title}</h3>
                      <a href={item.link.startsWith('http') ? item.link : `https://${item.link}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', color: accentColor, textDecoration: 'none' }}>
                        {item.link}
                      </a>
                    </div>
                    <p style={{ fontSize: '13px', color: '#555', margin: '4px 0 0 0' }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Achievements */}
          {achievements && achievements.length > 0 && (
            <section style={{ marginBottom: dVars.mbSection }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: accentColor, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
                Achievements
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: dVars.mbItem }}>
                {achievements.map(item => (
                  <div key={item.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111', margin: 0 }}>{item.title}</h3>
                      <span style={{ fontSize: '13px', color: '#666' }}>{item.date}</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#555', margin: '4px 0 0 0' }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Achievements */}
          {achievements && achievements.length > 0 && (
            <section style={{ marginBottom: dVars.mbSection }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: accentColor, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
                Achievements
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: dVars.mbItem }}>
                {achievements.map(item => (
                  <div key={item.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111', margin: 0 }}>{item.title}</h3>
                      <span style={{ fontSize: '13px', color: '#666' }}>{item.date}</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#555', margin: '4px 0 0 0' }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar Column */}
        <div>
          {/* Skills */}
          {skills.length > 0 && (
            <section style={{ marginBottom: '24px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: accentColor, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
                Skills
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skills.map((skill, index) => (
                  <span key={index} style={{ background: '#f0f0f0', color: '#333', padding: '4px 10px', borderRadius: '4px', fontSize: '13px', fontWeight: 500 }}>
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section style={{ marginBottom: dVars.mbSection }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: accentColor, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
                Education
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: dVars.mbItem }}>
                {education.map(item => (
                  <div key={item.id}>
                    <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#111', margin: 0 }}>{item.degree}</h3>
                    <div style={{ fontSize: '14px', color: '#444', marginBottom: '4px' }}>{item.institution}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>{item.startDate} - {item.endDate}</div>
                    {item.description && <p style={{ fontSize: '12px', color: '#555', margin: '4px 0 0 0' }}>{item.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <section style={{ marginBottom: dVars.mbSection }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: accentColor, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
                Certifications
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: dVars.mbItem }}>
                {certifications.map(item => (
                  <div key={item.id}>
                    <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#111', margin: 0 }}>{item.name}</h3>
                    <div style={{ fontSize: '14px', color: '#444', marginBottom: '4px' }}>{item.issuer}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>{item.date}</div>
                    {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: accentColor, textDecoration: 'none' }}>View Credential ↗</a>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {languages && languages.length > 0 && (
            <section style={{ marginBottom: dVars.mbSection }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: accentColor, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
                Languages
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {languages.map((item, index) => (
                  <div key={item.id || index} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <strong style={{ color: '#333' }}>{item.language || item}</strong>
                    <span style={{ color: '#666' }}>{item.proficiency || ''}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Interests */}
          {interests && interests.length > 0 && (
            <section style={{ marginBottom: dVars.mbSection }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: accentColor, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
                Interests
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {interests.map((interest, index) => (
                  <span key={index} style={{ border: '1px solid #e0e0e0', color: '#555', padding: '4px 10px', borderRadius: '4px', fontSize: '13px' }}>
                    {interest}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;

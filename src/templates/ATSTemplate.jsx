import React from 'react';
import { useResume } from '../context/ResumeContext';

const ATSTemplate = () => {
  const { resumeData } = useResume();
  const { personalDetails = {}, experience = [], education = [], skills = [], projects = [], certifications = [], achievements = [], languages = [], interests = [], settings = {} } = resumeData;

  const densityMap = {
    compact: { padding: '10px', mbSection: '12px', mbItem: '8px', lineHeight: 1.3 },
    standard: { padding: '20px', mbSection: '16px', mbItem: '12px', lineHeight: 1.5 },
    spacious: { padding: '30px', mbSection: '24px', mbItem: '16px', lineHeight: 1.7 }
  };
  const dVars = densityMap[settings.density || 'standard'];

  return (
    <div style={{ fontFamily: 'Times New Roman, serif', color: '#000', lineHeight: dVars.lineHeight, padding: dVars.padding }}>
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: dVars.mbSection }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 4px 0', textTransform: 'uppercase' }}>
          {personalDetails.name || 'YOUR NAME'}
        </h1>
        <div style={{ fontSize: '14px' }}>
          {personalDetails.location && <span>{personalDetails.location} | </span>}
          {personalDetails.phone && <span>{personalDetails.phone} | </span>}
          {personalDetails.email && <span>{personalDetails.email}</span>}
          <br/>
          {personalDetails.linkedin && <span>{personalDetails.linkedin} | </span>}
          {personalDetails.github && <span>{personalDetails.github} | </span>}
          {personalDetails.portfolio && <span>{personalDetails.portfolio}</span>}
        </div>
      </header>

      {/* Summary */}
      {personalDetails.summary && (
        <section style={{ marginBottom: dVars.mbSection }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', marginBottom: '8px' }}>
            Professional Summary
          </h2>
          <p style={{ fontSize: '14px', margin: 0 }}>{personalDetails.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section style={{ marginBottom: dVars.mbSection }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', marginBottom: '8px' }}>
            Professional Experience
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: dVars.mbItem }}>
            {experience.map(item => (
              <div key={item.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '15px' }}>{item.role}</div>
                  <div style={{ fontSize: '14px' }}>{item.startDate} – {item.endDate}</div>
                </div>
                <div style={{ fontStyle: 'italic', fontSize: '14px', marginBottom: '4px' }}>{item.company}</div>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
                  {item.description.split('\n').filter(line => line.trim() !== '').map((line, i) => (
                    <li key={i}>{line.replace(/^[-\*]\s*/, '')}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section style={{ marginBottom: dVars.mbSection }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', marginBottom: '8px' }}>
            Projects
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: dVars.mbItem }}>
            {projects.map(item => (
              <div key={item.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '15px' }}>{item.title}</div>
                </div>
                {item.link && <div style={{ fontSize: '14px', fontStyle: 'italic', marginBottom: '4px' }}>{item.link}</div>}
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
                  {item.description.split('\n').filter(line => line.trim() !== '').map((line, i) => (
                    <li key={i}>{line.replace(/^[-\*]\s*/, '')}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Achievements */}
      {achievements && achievements.length > 0 && (
        <section style={{ marginBottom: dVars.mbSection }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', marginBottom: '8px' }}>
            Achievements
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: dVars.mbItem }}>
            {achievements.map(item => (
              <div key={item.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '15px' }}>{item.title}</div>
                  <div style={{ fontSize: '14px' }}>{item.date}</div>
                </div>
                <div style={{ fontSize: '14px' }}>{item.description}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section style={{ marginBottom: dVars.mbSection }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', marginBottom: '8px' }}>
            Education
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {education.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '15px' }}>{item.institution}</div>
                  <div style={{ fontSize: '14px' }}>{item.degree} {item.description ? `- ${item.description}` : ''}</div>
                </div>
                <div style={{ fontSize: '14px' }}>{item.startDate} – {item.endDate}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <section style={{ marginBottom: dVars.mbSection }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', marginBottom: '8px' }}>
            Certifications
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {certifications.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '15px' }}>{item.name}</div>
                  <div style={{ fontSize: '14px' }}>{item.issuer} {item.link ? `(${item.link})` : ''}</div>
                </div>
                <div style={{ fontSize: '14px' }}>{item.date}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section style={{ marginBottom: dVars.mbSection }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', marginBottom: '8px' }}>
            Skills
          </h2>
          <div style={{ fontSize: '14px' }}>
            {skills.join(', ')}
          </div>
        </section>
      )}

      {/* Languages */}
      {languages && languages.length > 0 && (
        <section style={{ marginBottom: dVars.mbSection }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', marginBottom: '8px' }}>
            Languages
          </h2>
          <div style={{ fontSize: '14px' }}>
            {languages.map(l => typeof l === 'string' ? l : `${l.language} (${l.proficiency})`).join(' • ')}
          </div>
        </section>
      )}

      {/* Interests */}
      {interests && interests.length > 0 && (
        <section style={{ marginBottom: dVars.mbSection }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', marginBottom: '8px' }}>
            Interests
          </h2>
          <div style={{ fontSize: '14px' }}>
            {interests.join(', ')}
          </div>
        </section>
      )}
    </div>
  );
};

export default ATSTemplate;

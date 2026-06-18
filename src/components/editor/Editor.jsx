import React from 'react';
// We'll import individual editors here later
import PersonalDetailsEditor from './PersonalDetailsEditor';

import ExperienceEditor from './ExperienceEditor';
import EducationEditor from './EducationEditor';
import ProjectsEditor from './ProjectsEditor';
import SkillsEditor from './SkillsEditor';
import TemplateEditor from './TemplateEditor';
import CertificationsEditor from './CertificationsEditor';
import AchievementsEditor from './AchievementsEditor';
import LanguagesEditor from './LanguagesEditor';
import InterestsEditor from './InterestsEditor';
import SettingsEditor from './SettingsEditor';

const Editor = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'personal':
        return <PersonalDetailsEditor />;
      case 'experience':
        return <ExperienceEditor />;
      case 'education':
        return <EducationEditor />;
      case 'projects':
        return <ProjectsEditor />;
      case 'skills':
        return <SkillsEditor />;
      case 'templates':
        return <TemplateEditor />;
      case 'certifications':
        return <CertificationsEditor />;
      case 'achievements':
        return <AchievementsEditor />;
      case 'languages':
        return <LanguagesEditor />;
      case 'interests':
        return <InterestsEditor />;
      case 'settings':
        return <SettingsEditor />;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="editor-container" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
      {renderContent()}
    </div>
  );
};

export default Editor;

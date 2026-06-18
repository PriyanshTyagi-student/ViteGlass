import React from 'react';
import { User, Briefcase, GraduationCap, Code, Target, Award, Globe, LayoutTemplate, Palette, Star, Heart } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'personal', label: 'Personal Details', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Target },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'achievements', label: 'Achievements', icon: Star },
    { id: 'languages', label: 'Languages', icon: Globe },
    { id: 'interests', label: 'Interests', icon: Heart },
    { id: 'templates', label: 'Templates', icon: LayoutTemplate },
    { id: 'settings', label: 'Settings', icon: Palette },
  ];

  return (
    <div className="workspace-sidebar">
      <div className="sidebar-scroll-container" style={{ padding: '24px', flex: 1, overflowY: 'auto', overflowX: 'auto' }}>
        <h3 className="sidebar-title" style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Resume Sections
        </h3>
        <nav className="sidebar-nav" style={{ display: 'flex', gap: '4px' }}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="sidebar-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  color: isActive ? 'white' : 'var(--text-primary)',
                  backgroundColor: isActive ? 'var(--primary)' : 'transparent',
                  fontWeight: isActive ? 500 : 400,
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                <Icon size={18} color={isActive ? 'white' : 'var(--text-secondary)'} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .sidebar-nav { flex-direction: column; }
        @media (max-width: 1024px) {
          .workspace-sidebar { flex-direction: row; align-items: center; }
          .sidebar-scroll-container { padding: 12px 16px !important; display: flex; align-items: center; }
          .sidebar-title { display: none; }
          .sidebar-nav { flex-direction: row; gap: 8px !important; }
          .sidebar-btn { padding: 8px 16px !important; font-size: 14px; }
          .sidebar-scroll-container::-webkit-scrollbar { display: none; }
        }
      `}} />
    </div>
  );
};

export default Sidebar;

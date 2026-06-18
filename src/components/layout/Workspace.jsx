import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Editor from '../editor/Editor';
import PreviewPane from '../preview/PreviewPane';

const Workspace = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [mobileMode, setMobileMode] = useState('edit'); // 'edit' or 'preview'

  return (
    <>
      <Header />
      <div className={`workspace mobile-${mobileMode}`}>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="workspace-editor">
          <Editor activeTab={activeTab} />
        </div>
        <div className="workspace-preview">
          <PreviewPane />
        </div>
        
        {/* Mobile Toggle FAB */}
        <button 
          className="mobile-fab"
          onClick={() => setMobileMode(prev => prev === 'edit' ? 'preview' : 'edit')}
        >
          {mobileMode === 'edit' ? '👁️ View Preview' : '✏️ Edit Resume'}
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Workspace;

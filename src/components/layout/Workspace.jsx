import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Editor from '../editor/Editor';
import PreviewPane from '../preview/PreviewPane';

const Workspace = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <>
      <Header />
      <div className="workspace">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="workspace-editor">
          <Editor activeTab={activeTab} />
        </div>
        <div className="workspace-preview">
          <PreviewPane />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Workspace;

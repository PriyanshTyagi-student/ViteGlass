import React from 'react';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div>
        Built by: <strong>Priyansh Tyagi</strong> | Email: <a href="mailto:tpriyansh973@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>tpriyansh973@gmail.com</a>
      </div>
      <div>
        <a href="https://digitalheroesco.com" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ textDecoration: 'none', fontSize: '13px', padding: '6px 12px' }}>
          Built for Digital Heroes
        </a>
      </div>
    </footer>
  );
};

export default Footer;

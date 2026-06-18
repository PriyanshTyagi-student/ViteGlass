import React from 'react';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-text">
        Built by: <strong>Priyansh Tyagi</strong> <span className="footer-divider">|</span> <span className="footer-email">Email: <a href="mailto:tpriyansh973@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>tpriyansh973@gmail.com</a></span>
      </div>
      <div>
        <a href="https://digitalheroesco.com" target="_blank" rel="noopener noreferrer" className="btn-secondary footer-btn" style={{ textDecoration: 'none', fontSize: '13px', padding: '6px 12px' }}>
          Built for Digital Heroes
        </a>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 600px) {
          .app-footer { flex-direction: column; gap: 8px; text-align: center; padding-bottom: 90px; }
          .footer-text { font-size: 11px; display: flex; flex-direction: column; gap: 4px; }
          .footer-divider { display: none; }
          .footer-btn { font-size: 11px !important; padding: 4px 8px !important; }
        }
      `}} />
    </footer>
  );
};

export default Footer;

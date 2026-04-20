import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--cream)',
      padding: '80px var(--margin-x)',
      marginTop: '80px',
      borderTop: 'none',
      color: 'var(--midnight)'
    }}>
      <div className="footer-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: '40px'
      }}>
        <div style={{ gridColumn: 'span 1' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '24px' }}>RentMyFit</h2>
          <p style={{ fontSize: '14px', color: 'var(--slate)', lineHeight: '1.6' }}>
            The modern circular atelier. Curating the world's most coveted wardrobes for a sustainable future.
          </p>
        </div>
        
        <div>
          <h4 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '24px', textTransform: 'uppercase' }}>Navigation</h4>
          <ul style={{ listStyle: 'none', fontSize: '14px', lineHeight: '2.5' }}>
            <li>Browse Collection</li>
            <li>How It Works</li>
            <li>Sustainability</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '24px', textTransform: 'uppercase' }}>Legal</h4>
          <ul style={{ listStyle: 'none', fontSize: '14px', lineHeight: '2.5' }}>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Rental Agreement</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '24px', textTransform: 'uppercase' }}>Join the Atelier</h4>
          <p style={{ fontSize: '14px', marginBottom: '16px' }}>Sign up for exclusive access to new drops.</p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input type="email" placeholder="EMAIL ADDRESS" style={{
              flex: 1,
              padding: '8px 0',
              borderBottom: '1px solid var(--midnight)'
            }} />
            <button className="coral-btn" style={{ padding: '8px 16px', fontSize: '12px' }}>JOIN</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom" style={{
        marginTop: '80px',
        paddingTop: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '12px',
        color: 'var(--slate)',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        <p>© 2024 RentMyFit Atelier. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '24px' }}>
          <span>Instagram</span>
          <span>Pinterest</span>
          <span>LinkedIn</span>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: center !important;
            gap: 16px !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

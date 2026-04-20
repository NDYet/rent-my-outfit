import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, MessageCircle, BarChart3, User, PlusCircle, Menu } from 'lucide-react';

const SellerLayout = ({ children }) => {
  // On desktop default to open, on mobile default to closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 992);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      // Auto-collapse on resize to small, auto-expand on resize to large
      if (window.innerWidth <= 992 && isSidebarOpen) {
        setIsSidebarOpen(false);
      } else if (window.innerWidth > 992 && !isSidebarOpen) {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen]);

  // Close mobile menu when route changes on small screens
  useEffect(() => {
    if (window.innerWidth <= 992) {
      setIsSidebarOpen(false);
    }
  }, [location]);

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/seller/dashboard' },
    { icon: <ShoppingBag size={20} />, label: 'My Listings', path: '/seller/listings' },
    { icon: <MessageCircle size={20} />, label: 'Requests', path: '/seller/requests' },
    { icon: <BarChart3 size={20} />, label: 'Earnings', path: '/seller/earnings' },
    { icon: <User size={20} />, label: 'Profile', path: '/seller/profile' },
  ];

  return (
    <div className="seller-layout-wrapper">
      
      {/* Permanent Top Navigation Bar */}
      <header className="seller-top-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center' }}
          >
            <Menu size={24} color="var(--midnight)" />
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link to="/" style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 'bold', color: 'var(--midnight)' }}>RentMyFit</Link>
            <div style={{ 
              backgroundColor: 'var(--champagne)', 
              color: 'white', 
              fontSize: '10px', 
              fontWeight: '700', 
              padding: '2px 8px', 
              borderRadius: '10px', 
              letterSpacing: '1px',
              marginTop: '2px'
            }}>SELLER</div>
          </div>
        </div>
      </header>

      <div className="seller-body">
        {/* Sidebar */}
        <aside className="seller-sidebar" style={{ width: isSidebarOpen ? '260px' : '0px', borderRightWidth: isSidebarOpen ? '1px' : '0px' }}>
          <div className="seller-sidebar-inner">
            <nav style={{ flex: 1 }}>
              {menuItems.map(item => (
                <NavLink 
                  key={item.label}
                  to={item.path}
                  style={({ isActive }) => ({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px 32px',
                    color: isActive ? 'var(--coral)' : 'var(--midnight)',
                    fontSize: '14px',
                    fontWeight: isActive ? '700' : '500',
                    backgroundColor: isActive ? 'white' : 'transparent',
                    borderLeft: isActive ? '4px solid var(--coral)' : '4px solid transparent',
                    whiteSpace: 'nowrap'
                  })}
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div style={{ padding: '0 32px 40px' }}>
              <Link 
                to="/seller/list/step1" 
                className="coral-btn" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '12px',
                  padding: '16px',
                  width: '100%',
                  fontSize: '14px',
                  whiteSpace: 'nowrap'
                }}
              >
                <PlusCircle size={18} /> List New Item
              </Link>
              
              <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '12px', whiteSpace: 'nowrap' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#e2e8f0', flexShrink: 0 }} />
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: '14px', fontWeight: '700', textOverflow: 'ellipsis', overflow: 'hidden' }}>Priya Sharma</div>
                  <div style={{ fontSize: '12px', color: 'var(--slate)' }}>Seller Elite</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="seller-main" style={{ opacity: (!isSidebarOpen && window.innerWidth <= 768) ? 1 : (window.innerWidth <= 768 && isSidebarOpen ? 0.3 : 1), pointerEvents: (window.innerWidth <= 768 && isSidebarOpen) ? 'none' : 'auto' }}>
          {children}
        </main>
      </div>

      <style>{`
        .seller-layout-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: #f4f4f4;
          overflow-x: hidden;
        }
        .seller-top-bar {
          display: flex;
          align-items: center;
          height: 64px;
          padding: 0 24px;
          background-color: var(--cream);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .seller-body {
          display: flex;
          flex: 1;
          position: relative;
        }
        .seller-sidebar {
          flex-shrink: 0;
          background-color: var(--cream);
          overflow: hidden;
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-right-width 0.4s;
          border-right-style: solid;
          border-right-color: rgba(0,0,0,0.05);
        }
        .seller-sidebar-inner {
          width: 260px;
          min-height: calc(100vh - 64px);
          display: flex;
          flex-direction: column;
          padding-top: 32px;
          position: sticky;
          top: 64px;
        }
        .seller-main {
          flex: 1;
          min-width: 0;
          transition: min-width 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, padding 0.3s ease;
          padding: 40px 60px;
        }
        
        @media (max-width: 992px) {
          .seller-main {
            padding: 32px 32px;
          }
        }

        @media (max-width: 768px) {
          .seller-main {
            padding: 24px 20px;
            flex-shrink: 0;
            min-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default SellerLayout;

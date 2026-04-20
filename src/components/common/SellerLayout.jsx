import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, MessageCircle, BarChart3, User, PlusCircle } from 'lucide-react';

const SellerLayout = ({ children }) => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/seller/dashboard' },
    { icon: <ShoppingBag size={20} />, label: 'My Listings', path: '/seller/listings' },
    { icon: <MessageCircle size={20} />, label: 'Requests', path: '/seller/requests' },
    { icon: <BarChart3 size={20} />, label: 'Earnings', path: '/seller/earnings' },
    { icon: <User size={20} />, label: 'Profile', path: '/seller/profile' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f4f4' }}>
      {/* Sidebar */}
      <aside style={{ 
        width: '260px', 
        backgroundColor: 'var(--cream)', 
        padding: '40px 0', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'fixed',
        height: '100vh',
        zIndex: 10
      }}>
        <div style={{ padding: '0 32px', marginBottom: '48px' }}>
          <Link to="/" style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 'bold' }}>RentMyFit</Link>
          <div style={{ 
            marginTop: '8px',
            backgroundColor: 'var(--champagne)', 
            color: 'white', 
            fontSize: '10px', 
            fontWeight: '700', 
            padding: '2px 8px', 
            borderRadius: '10px', 
            display: 'inline-block',
            letterSpacing: '1px'
          }}>SELLER</div>
        </div>

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
                borderLeft: isActive ? '4px solid var(--coral)' : '4px solid transparent'
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
              fontSize: '14px'
            }}
          >
            <PlusCircle size={18} /> List New Item
          </Link>
          
          <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#eee' }} />
            <div>
              <div style={{ fontSize: '14px', fontWeight: '700' }}>Priya Sharma</div>
              <div style={{ fontSize: '12px', color: 'var(--slate)' }}>Seller Elite</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '40px 60px', marginLeft: '260px' }}>
        {children}
      </main>
    </div>
  );
};

export default SellerLayout;

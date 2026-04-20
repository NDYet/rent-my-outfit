import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  BarChart3, 
  Scale, 
  UserCheck, 
  ClipboardCheck, 
  Wallet, 
  ShieldAlert, 
  TicketPercent,
  Settings,
  LogOut
} from 'lucide-react';

const AdminLayout = ({ children }) => {
  const menuItems = [
    { icon: <BarChart3 size={20} />, label: 'Analytics', path: '/admin/analytics' },
    { icon: <Scale size={20} />, label: 'Dispute Center', path: '/admin/disputes' },
    { icon: <UserCheck size={20} />, label: 'Seller KYC', path: '/admin/kyc' },
    { icon: <ClipboardCheck size={20} />, label: 'Catalog QC', path: '/admin/catalog-qc' },
    { icon: <Wallet size={20} />, label: 'Payouts', path: '/admin/payouts' },
    { icon: <ShieldAlert size={20} />, label: 'Trust & Safety', path: '/admin/safety' },
    { icon: <TicketPercent size={20} />, label: 'Promos', path: '/admin/promos' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Admin Sidebar */}
      <aside style={{ 
        width: '280px', 
        backgroundColor: 'var(--midnight)', 
        color: 'white',
        display: 'flex', 
        flexDirection: 'column',
        position: 'fixed',
        height: '100vh',
        zIndex: 100
      }}>
        <div style={{ padding: '40px 32px', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: '700' }}>RentMyFit</h1>
            <div style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--champagne)', marginTop: '4px', fontWeight: '700' }}>ADMIN PORTAL</div>
          </Link>
        </div>

        <nav style={{ flex: 1, padding: '0 16px' }}>
          {menuItems.map(item => (
            <NavLink 
              key={item.label}
              to={item.path}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '14px 16px',
                color: isActive ? 'var(--midnight)' : 'rgba(255,255,255,0.7)',
                backgroundColor: isActive ? 'var(--champagne)' : 'transparent',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: isActive ? '700' : '500',
                marginBottom: '4px'
              })}
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div style={{ padding: '24px 16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', cursor: 'pointer' }}>
            <Settings size={20} color="rgba(255,255,255,0.5)" />
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>Platform Settings</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', cursor: 'pointer' }}>
            <LogOut size={20} color="rgba(255,255,255,0.5)" />
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>Sign Out</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, marginLeft: '280px', padding: '48px 64px' }}>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;

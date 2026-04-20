import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import './styles/theme.css';
import './index.css';

// Importing Screens
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import BrowsePage from './pages/BrowsePage';
import HowItWorks from './pages/HowItWorks';
import ProductDetail from './pages/ProductDetail';
import CheckoutPage from './pages/CheckoutPage';
import BookingConfirmation from './pages/BookingConfirmation';
import SellerDashboard from './pages/SellerDashboard';
import AddListingStep1 from './pages/AddListingStep1';
import AddListingStep2 from './pages/AddListingStep2';
import RentalRequests from './pages/RentalRequests';
import EarningsPage from './pages/EarningsPage';

// Admin Portal Screens
import AdminLogin from './pages/AdminLogin';
import AdminAnalytics from './pages/AdminAnalytics';
import AdminDisputes from './pages/AdminDisputes';
import AdminKYC from './pages/AdminKYC';
import AdminCatalogQC from './pages/AdminCatalogQC';
import AdminPayouts from './pages/AdminPayouts';
import AdminSafety from './pages/AdminSafety';
import AdminPromo from './pages/AdminPromo';

// Modals
import WelcomeModal from './components/modals/WelcomeModal';

function App() {
  return (
    <AuthProvider>
      <Router>
        <WelcomeModal />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          
          {/* Dedicated Admin Authenticator */}
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Secure Buyer Routes (Normally would require buyer role) */}
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmation" element={<BookingConfirmation />} />

          {/* Secure Seller Routes (Normally would require seller role) */}
          <Route path="/seller/dashboard" element={<SellerDashboard />} />
          <Route path="/seller/list/step1" element={<AddListingStep1 />} />
          <Route path="/seller/list/step2" element={<AddListingStep2 />} />
          <Route path="/seller/requests" element={<RentalRequests />} />
          <Route path="/seller/earnings" element={<EarningsPage />} />
          <Route path="/seller/listings" element={<SellerDashboard />} />
          <Route path="/seller/profile" element={<SellerDashboard />} />

          {/* Protected Admin Routes (Strict Firewall) */}
          <Route path="/admin" element={<ProtectedRoute requiredRole="admin"><AdminAnalytics /></ProtectedRoute>} />
          <Route path="/admin/analytics" element={<ProtectedRoute requiredRole="admin"><AdminAnalytics /></ProtectedRoute>} />
          <Route path="/admin/disputes" element={<ProtectedRoute requiredRole="admin"><AdminDisputes /></ProtectedRoute>} />
          <Route path="/admin/kyc" element={<ProtectedRoute requiredRole="admin"><AdminKYC /></ProtectedRoute>} />
          <Route path="/admin/catalog-qc" element={<ProtectedRoute requiredRole="admin"><AdminCatalogQC /></ProtectedRoute>} />
          <Route path="/admin/payouts" element={<ProtectedRoute requiredRole="admin"><AdminPayouts /></ProtectedRoute>} />
          <Route path="/admin/safety" element={<ProtectedRoute requiredRole="admin"><AdminSafety /></ProtectedRoute>} />
          <Route path="/admin/promos" element={<ProtectedRoute requiredRole="admin"><AdminPromo /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EnterprisePage from './pages/EnterprisePage';
import IndividualPage from './pages/IndividualPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import ProcessPage from './pages/ProcessPage';

// Protected Route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('kungfubuy_admin') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

// Mock Dashboard component (since we're redirecting to external URL)
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary mx-auto mb-4 rounded-full flex items-center justify-center">
          <span className="text-2xl">✓</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome, Admin!</h1>
        <p className="text-gray-600 mb-4">You are logged in successfully.</p>
        <a 
          href="https://vip.kungfubuy.com/dashboard" 
          className="inline-block bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Go to Dashboard
        </a>
        <button 
          onClick={() => {
            localStorage.removeItem('kungfubuy_admin');
            window.location.href = '/';
          }}
          className="block mx-auto mt-4 text-gray-500 hover:text-gray-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page - No Header/Footer */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Protected Dashboard */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        
        {/* Main Site with Header/Footer */}
        <Route path="/*" element={
          <>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/enterprise" element={<EnterprisePage />} />
                <Route path="/individual" element={<IndividualPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/process" element={<ProcessPage />} />
              </Routes>
            </main>
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

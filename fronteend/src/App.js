import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import LoadingSpinner from './components/LoadingSpinner';
import Home from'./pages/Home/Home'
import Feed from './pages/Feed/Feed'
import CreatePost from './pages/CreatePost/CreatePost'
import Profile from './pages/Profile/Profile'
import LoginSignup from './pages/Login/Login'



// Protected Route Wrapper
const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/feed" replace />;
  }
  return element;
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Auth routes */}
            <Route path="/" element={<Suspense fallback={<LoadingSpinner />}><LoginSignup /></Suspense>} />
            <Route path="/" element={<Navigate to="/home" replace />} />

            {/* Protected Routes */}
            <Route path="/home" element={<ProtectedRoute element={<Suspense fallback={<LoadingSpinner />}><Home /></Suspense>} />} />
            <Route path="/profile" element={<ProtectedRoute element={<Suspense fallback={<LoadingSpinner />}><Profile /></Suspense>} />} />
            <Route path="/feed" element={<ProtectedRoute element={<Suspense fallback={<LoadingSpinner />}><Feed /></Suspense>} />} />
            <Route path="/create" element={<ProtectedRoute element={<Suspense fallback={<LoadingSpinner />}><CreatePost /></Suspense>} />} />

            {/* Default route */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

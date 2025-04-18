import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AppointmentProvider } from './contexts/AppointmentContext';
import { MessageProvider } from './contexts/MessageContext';
import MainLayout from './components/layout/MainLayout';
import AuthLayout from './components/layout/AuthLayout';
import DashboardLayout from './components/layout/DashboardLayout';
import UserProfile from './components/features/UserProfile';
import AgentDirectory from './components/features/AgentDirectory';
import AppointmentCalendar from './components/features/AppointmentCalendar';
import MessageCenter from './components/features/MessageCenter';

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppointmentProvider>
          <MessageProvider>
            <div className="min-h-screen bg-gray-50">
              <Routes>
                <Route element={<AuthLayout />}>
                  <Route path="/login" element={<div>Login Page</div>} />
                  <Route path="/register" element={<div>Register Page</div>} />
                </Route>
                
                <Route element={<MainLayout />}>
                  <Route path="/" element={<div>Home Page</div>} />
                  <Route path="/agents" element={<AgentDirectory />} />
                </Route>

                <Route element={<DashboardLayout />}>
                  <Route path="/profile" element={<UserProfile />} />
                  <Route path="/appointments" element={<AppointmentCalendar />} />
                  <Route path="/messages" element={<MessageCenter />} />
                </Route>

                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </MessageProvider>
        </AppointmentProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
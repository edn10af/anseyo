import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function DashboardLayout() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex">
              <Link to="/" className="text-xl font-bold text-blue-600">
                Anseyo
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/profile">Profile</Link>
              <Link to="/appointments">Appointments</Link>
              <Link to="/messages">Messages</Link>
              <button
                onClick={logout}
                className="text-red-600 hover:text-red-800"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}
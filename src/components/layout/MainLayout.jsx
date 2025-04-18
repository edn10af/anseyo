import React from 'react';
import { Outlet } from 'react-router-dom';
import LanguageSelector from '../features/LanguageSelector';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">Anseyo</h1>
            </div>
            <LanguageSelector />
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}
import React from 'react';

export default function Header() {
  return (
    <header className="app-header">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">menu</span>
        <div className="header-brand">EduFlow</div>
      </div>
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">notifications</span>
        <div className="flex items-center">
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">search</span>
        </div>
      </div>
    </header>
  );
}
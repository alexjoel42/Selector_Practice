import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path); // Programmatic navigation
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="logo" onClick={() => handleNavigation('/')}>
          Home
        </button>
        <button className="logo" onClick={() => handleNavigation('/playground')}>
          Test_Playground
        </button>
      </div>
    </nav>
  );
}

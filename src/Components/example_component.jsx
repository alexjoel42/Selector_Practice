import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExampleComponent() {
  const navigate = useNavigate();

  const goToPlayground = () => {
    navigate('/playground'); // Navigates to the /playground route
  };

  return (
    <div>
      <button onClick={goToPlayground}>Go to Playground className = "logo"</button>
    </div>
  );
}

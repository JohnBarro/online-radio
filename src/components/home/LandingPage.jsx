import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleNavigate = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username');

    if (isLoggedIn && username) {
      navigate('/dashboard', { replace: true }); // Redirect if user is logged in
    } else {
      setLoading(false); // Stop loading and show landing page
    }
  }, [navigate]);

  if (loading) {
    return <div className="loading">Loading...</div>; // Display loading spinner
  }

  return (
    <div className="landing-page vibrant-theme">

      <section className="hero">
        <div className="p-10 pt-20 text-center text-white hero-content">
        <img 
            src="/src/assets/images/smr-logo.png" 
            alt="StarMate Radio Logo" 
            className="mx-auto mb-6 rounded-lg logo-image" 
            
          />
          <h1 className="mb-4 text-4xl font-extrabold">Welcome to StarMate Radio</h1>
          <p className="mb-6 text-lg">Tune in, turn up, and let the good vibes flow!</p>
          <button className="px-6 py-2 text-black bg-yellow-400 rounded-lg cta-button hover:bg-yellow-500" onClick={handleNavigate}>
          Tune in Now!</button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

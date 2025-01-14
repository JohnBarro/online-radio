import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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
    <div className="landing-page">
      <nav className="flex justify-between p-4 text-white bg-blue-500">
        <div className="text-xl font-bold">Poultry Detection</div>
        <div className="flex space-x-4">
          <NavLink to="/" className="hover:underline">Home</NavLink>
          <NavLink to="/signup" className="hover:underline">Signup</NavLink>
          <NavLink to="/login" className="hover:underline">Login</NavLink>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to BrandName</h1>
          <p>Your one-stop solution for amazing services.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Feature 1</h3>
            <p>Description of feature 1.</p>
          </div>
          <div className="feature-item">
            <h3>Feature 2</h3>
            <p>Description of feature 2.</p>
          </div>
          <div className="feature-item">
            <h3>Feature 3</h3>
            <p>Description of feature 3.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p>We are committed to providing the best services for our customers. Learn more about our journey and mission.</p>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2025 StarMate Radio Online. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

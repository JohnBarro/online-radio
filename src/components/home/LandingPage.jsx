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
    <div className="landing-page vibrant-theme">
      <nav className="flex justify-between p-4 text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <div className="text-2xl font-extrabold">StarMate Radio</div>
        <div className="flex space-x-6">
          <NavLink to="/" className="hover:underline">Home</NavLink>
          <NavLink to="/signup" className="hover:underline">Signup</NavLink>
          <NavLink to="/login" className="hover:underline">Login</NavLink>
        </div>
      </nav>

      <section className="hero">
        <div className="p-10 text-center text-white hero-content bg-gradient-to-b from-red-500 to-purple-700">
          <h1 className="mb-4 text-4xl font-extrabold">Welcome to StarMate Radio</h1>
          <p className="mb-6 text-lg">Tune in, turn up, and let the good vibes flow!</p>
          <button className="px-6 py-2 text-black bg-yellow-400 rounded-lg cta-button hover:bg-yellow-500">Get Started</button>
        </div>
      </section>

      <section id="services" className="py-12 services">
        <h2 className="mb-8 text-3xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 gap-8 px-8 service-list md:grid-cols-3">
          <div className="p-6 text-center bg-pink-100 rounded-lg shadow-lg service-item">
            <h3 className="mb-2 text-xl font-bold">Join Hiya App</h3>
            <p>Connect with our vibrant community and enjoy exclusive perks.</p>
          </div>
          <div className="p-6 text-center bg-pink-100 rounded-lg shadow-lg service-item">
            <h3 className="mb-2 text-xl font-bold">Play Games and Earn</h3>
            <p>Have fun while earning rewards. It's a win-win!</p>
          </div>
          <div className="p-6 text-center bg-pink-100 rounded-lg shadow-lg service-item">
            <h3 className="mb-2 text-xl font-bold">Music</h3>
            <p>Immerse yourself in the best beats and tunes from around the world.</p>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 bg-purple-100 about">
        <h2 className="mb-6 text-3xl font-bold text-center">About Us</h2>
        <p className="max-w-2xl px-4 mx-auto text-center">
          At StarMate Radio, we bring you the ultimate mix of music, entertainment, and community engagement. Our mission is to keep you entertained and connected, 24/7.
        </p>
      </section>

      <section id="contact" className="py-12 text-white contact bg-gradient-to-r from-red-500 to-pink-500">
        <h2 className="mb-6 text-3xl font-bold text-center">Contact Us</h2>
        <form className="max-w-lg p-6 mx-auto text-black bg-white rounded-lg contact-form">
          <input className="w-full p-2 mb-4 border rounded" type="text" placeholder="Name" required />
          <input className="w-full p-2 mb-4 border rounded" type="email" placeholder="Email" required />
          <textarea className="w-full p-2 mb-4 border rounded" placeholder="Message" required></textarea>
          <button className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600" type="submit">Send</button>
        </form>
      </section>

      <footer className="py-4 text-center text-white bg-purple-900 footer">
        <p>&copy; 2025 StarMate Radio Online. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

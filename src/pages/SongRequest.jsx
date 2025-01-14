import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SongRequest = () => {
  const navigate = useNavigate();
  const [songRequest, setSongRequest] = useState('');
  const [nowPlaying, setNowPlaying] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [error, setError] = useState('');

  const BASE_URL = 'https://azura.starmateradio.net'; // Replace with your AzuraCast API base URL
  const API_KEY = 'f4bc4936d9ff4174:dcd0ceb894b39ba7ea5b91a898950af3'; // Replace with your AzuraCast API key
  const STATION_ID = 384; // Replace with your station ID

  // Redirect if necessary user info is missing
  useEffect(() => {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    if (!username || !email) {
      console.error('Username or email is missing in local storage!');
      navigate('/login'); // Redirect to login page
    }
  }, [navigate]);

  // Fetch currently playing song
  const fetchNowPlaying = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/nowplaying/${STATION_ID}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      if (response.data && response.data.now_playing) {
        setNowPlaying(response.data.now_playing.song);
      } else {
        console.warn('Unexpected API response format:', response.data);
        setError('Unable to fetch now-playing data.');
      }
    } catch (err) {
      console.error('Error fetching now playing:', err);
      setError(`Failed to fetch now-playing data: ${err.message}`);
    }
  };
  

  // Handle song request submission
  const submitSongRequest = async () => {
    if (!songRequest) {
      setError('Please enter a song request.');
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/api/station/${STATION_ID}/requests`,
        { song: songRequest },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        setStatusMessage('Your song request was submitted successfully!');
        setSongRequest('');
        setError('');
      } else {
        throw new Error('Request submission failed.');
      }
    } catch (err) {
      console.error('Error submitting song request:', err);
      setError('Failed to submit your song request. Please try again.');
    }
  };

  useEffect(() => {
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000); // Refresh every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Request a Song</h2>

      {nowPlaying && (
        <div style={styles.nowPlaying}>
          <h3>Now Playing:</h3>
          <p>
            <strong>{nowPlaying.title}</strong> by <em>{nowPlaying.artist}</em>
          </p>
        </div>
      )}

      {statusMessage && <div style={styles.success}>{statusMessage}</div>}
      {error && <div style={styles.error}>{error}</div>}

      <div style={styles.formContainer}>
        <input
          type="text"
          value={songRequest}
          onChange={(e) => setSongRequest(e.target.value)}
          placeholder="Enter a song name or artist"
          style={styles.input}
        />
        <button onClick={submitSongRequest} style={styles.button}>
          Submit Request
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  header: {
    fontSize: '1.5em',
    marginBottom: '20px',
  },
  nowPlaying: {
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#e0f7fa',
    borderRadius: '5px',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '1em',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    fontSize: '1em',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  success: {
    color: 'green',
    marginBottom: '10px',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default SongRequest;

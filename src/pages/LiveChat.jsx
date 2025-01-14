import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Livechat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const messagesContainerRef = useRef(null);

  const BASE_URL = 'http://localhost:4200';
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');

  // Redirect if username or email is missing
  useEffect(() => {
    if (!username || !email) {
      console.error('Username or email is missing in local storage!');
      navigate('/login'); // Redirect to login page
    }
  }, [username, email, navigate]);

  // Fetch messages from the server
  const fetchMessages = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/livechat/messages`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      const sortedMessages = data.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
      setMessages(sortedMessages);
      setError('');
    } catch (err) {
      console.error('Error fetching messages:', err);
      setError('Failed to fetch messages. Please try again later.');
    }
  };

  // Send a message to the server
  const sendMessage = async () => {
    if (!username || !email || !message.trim()) {
      setError('All fields are required!');
      return;
    }
    try {
      const response = await fetch(`${BASE_URL}/api/livechat/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, message: message.trim() }),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      setMessage('');
      fetchMessages(); // Refresh messages after sending
      setError('');
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Failed to send the message. Please try again.');
    }
  };

  // Scroll to the bottom of the messages container
  const scrollToBottom = () => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    }
  };

  // Auto-refresh messages every 2 seconds
  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 2000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Scroll to the bottom when messages change
  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  return (
    <div style={styles.chatContainer}>
      <h2 style={styles.header}>SMR Live Chat</h2>
      {error && <div style={styles.error}>{error}</div>}
      <div style={styles.messages} ref={messagesContainerRef}>
        {messages.map((msg) => (
          <div
            key={msg._id}
            style={{
              ...styles.message,
              alignSelf: msg.username === username ? 'flex-end' : 'flex-start',
              background: msg.username === username 
                ? 'linear-gradient(180deg, white, blue)' 
                : '#f1f1f1',
              color: msg.username === username ? '#fff' : '#000',
            }}
          >
            <div style={styles.messageHeader}>
              {msg.username !== username && (
                <span style={styles.username}>{msg.username}</span>
              )}
              <span style={styles.timestamp}>
                {new Date(msg.timestamp).toLocaleTimeString()}
              </span>
            </div>
            <div style={styles.messageContent}>{msg.message}</div>
          </div>
        ))}
      </div>
      <div style={styles.formContainer}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          style={styles.messageInput}
        />
        <button onClick={sendMessage} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  chatContainer: {
    maxWidth: '500px',
    backgroundColor: '#f7f9fc',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    height: '80vh', // Changed to a percentage of the viewport height
    maxHeight: '700px', // Optional: Limits the max height for larger screens
  },
  header: {
    textAlign: 'center',
    padding: '10px 0',
    backgroundColor: '#007BFF',
    color: '#fff',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    margin: 0,
  },
  messages: {
    flex: 1,
    overflowY: 'auto',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    borderBottom: '1px solid #ddd',
  },
  message: {
    maxWidth: '70%',
    padding: '10px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    wordBreak: 'break-word',
  },
  messageHeader: {
    marginBottom: '5px',
    fontSize: '0.9em',
  },
  username: {
    fontWeight: 'bold',
    marginRight: '10px',
    color: '#007BFF',
  },
  timestamp: {
    fontSize: '0.8em',
    color: '#777',
  },
  messageContent: {
    fontSize: '1em',
    marginTop: '5px',
  },
  formContainer: {
    display: 'flex',
    gap: '10px',
    padding: '10px',
    borderTop: '1px solid #ddd',
  },
  messageInput: {
    flex: 1,
    padding: '10px',
    border: '1px solid #007BFF',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    margin: '10px',
    fontSize: '0.9em',
    textAlign: 'center',
  },
};

export default Livechat;

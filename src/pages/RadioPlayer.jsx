import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/smr-logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RadioPlayer = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const canvasRef = useRef(null);

  const [nowPlaying, setNowPlaying] = useState(null);
  const [playingNext, setPlayingNext] = useState(null);
  const [playlist, setPlaylist] = useState([]);

  const BASE_URL = "https://azura.starmateradio.net"; // Replace with your AzuraCast API base URL
  const API_KEY = "f4bc4936d9ff4174:dcd0ceb894b39ba7ea5b91a898950af3"; // Replace with your AzuraCast API key
  const STATION_ID = 384;

  useEffect(() => {
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");

    if (!username || !email) {
      console.error("Username or email is missing in local storage!");
      navigate("/login"); // Redirect to login page
    }
  }, [navigate]);

  const fetchNowPlaying = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/nowplaying/${STATION_ID}`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      if (response.data) {
        setNowPlaying(response.data.now_playing.song);
        setPlayingNext(response.data.playing_next.song);
        setPlaylist(response.data.playlist || []); // Assume playlist data is available in response
      } else {
        console.warn("Unexpected API response format:", response.data);
      }
    } catch (err) {
      console.error("Error fetching now playing:", err);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 1000); // Refresh every 10 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    const canvas = canvasRef.current;

    if (audio && canvas) {
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaElementSource(audio);

      source.connect(analyser);
      analyser.connect(audioContext.destination);

      analyser.fftSize = 256;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const ctx = canvas.getContext("2d");

      const draw = () => {
        requestAnimationFrame(draw);

        analyser.getByteFrequencyData(dataArray);

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 100;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw visualizer
        const bars = bufferLength;
        const step = (Math.PI * 2) / bars;

        for (let i = 0; i < bars; i++) {
          const barHeight = dataArray[i] / 2;
          const angle = step * i;

          const x1 = centerX + Math.cos(angle) * radius;
          const y1 = centerY + Math.sin(angle) * radius;
          const x2 = centerX + Math.cos(angle) * (radius + barHeight);
          const y2 = centerY + Math.sin(angle) * (radius + barHeight);

          ctx.strokeStyle = `rgb(${barHeight + 100}, 50, ${barHeight + 150})`;
          ctx.lineWidth = 2;

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      };

      draw();

      return () => {
        audioContext.close();
      };
    }
  }, []);

  return (
    <div
      style={{ minHeight: "80vh" }}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <div className="relative flex items-center justify-center w-80 h-80">
        {/* Canvas for Visualizer */}
        <canvas
          ref={canvasRef}
          width="300"
          height="300"
          className="absolute"
          style={{
            borderRadius: "50%",
            overflow: "hidden",
          }}
        ></canvas>

        {/* Logo in the Center */}
        <div
          className="absolute flex items-center justify-center w-40 h-40 rounded-full"
          style={{
            zIndex: 2,
            height: "13rem",
            width: "13rem",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            className="rounded-full"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      {/* Audio Controls */}
      <audio
        ref={audioRef}
        controls
        style={{
          marginTop: "100px",
          width: "100%",
        }}
        crossOrigin="anonymous"
      >
        <source
          src="https://a2.asurahosting.com:6860/radio.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      <p className="mt-2 text-sm text-center text-gray-400">
        Enjoy live streaming from SMR!
      </p>

      {nowPlaying && (
        <div style={styles.nowPlaying}>
          <h3>Now Playing:</h3>
          <div style={styles.column}>
            {nowPlaying.art && (
              <img
                src={nowPlaying.art}
                alt="Album Art"
                style={{ width: "80px", height: "80px", marginTop: "10px" }}
              />
            )}
            <p style={{ marginTop: "5px" }}>
              <strong>{nowPlaying.title || "Unknown Title"}</strong><br /> by{" "}
              <em>{nowPlaying.artist || "Unknown Artist"}</em>
            </p>
            {nowPlaying.album && <p>Album: {nowPlaying.album}</p>}
            {nowPlaying.lyrics && (
              <p>
                <strong>Lyrics:</strong> {nowPlaying.lyrics}
              </p>
            )}
          </div>

          {nowPlaying.isrc && <p>ISRC: {nowPlaying.isrc}</p>}
        </div>
      )}

      {playingNext && <div></div>}

      {/* Playlist */}
      <div className="mt-4 text-center text-white">
        <h3 className="text-lg font-semibold">Playlist</h3>
        <ul className="mt-2 space-y-2">
          {playlist.length > 0 ? (
            playlist.map((song, index) => (
              <li key={index} className="text-gray-300 text-md">
                <strong>{song.title}</strong> by <em>{song.artist}</em>
              </li>
            ))
          ) : (
            <p>No upcoming songs available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  nowPlaying: {
    marginBottom: "20px",
    padding: "10px",
    backgroundColor: "#22252F",
    borderRadius: "5px",
    color: "white",
    width: "360px",
    boxShadow: "0 0 4px #00000024,0 3px 4px #0000001f,0 1px 5px #0003",
  },

  column: {
    display: "flex",
    flexDirection: "row", // Aligns the child elements in a row
    justifyContent: "space-between", // Adds space between the columns
    gap: "20px",
  },
  
};

export default RadioPlayer;

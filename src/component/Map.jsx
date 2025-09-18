import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { trackLocationAccess } from "../analytics.js";

function Map({ setView }) {
  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
          setLoading(false);
          trackLocationAccess('Granted');
        },
        (err) => {
          console.error("Geolocation error:", err);
          setLoading(false);
          setPosition([26.8379544, 80.8765463]); // Default to Rajajipuram, Lucknow if geolocation fails
          trackLocationAccess('Denied');
        }
      );
    } else {
      setLoading(false);
    setPosition([26.8379544, 80.8765463]);
    }
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '20px'
    }}>
      <button
        onClick={() => setView("home")}
        style={{
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '8px 16px',
          cursor: 'pointer',
          fontSize: '16px',
          marginBottom: '20px'
        }}
      >
        ← Back to Home
      </button>
      <h2 style={{
        color: '#343a40',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
         Disaster Map
      </h2>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        padding: '20px',
        textAlign: 'center'
      }}>
        <p style={{
          color: '#6c757d',
          fontSize: '18px'
        }}>
          Interactive map showing disaster locations and real-time updates.
        </p>
        <div style={{
          height: '400px',
          backgroundColor: '#e9ecef',
          border: '2px dashed #dee2e6',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px'
        }}>
          {loading ? (
            <span style={{
              color: '#6c757d',
              fontSize: '24px'
            }}>
              Loading map...
            </span>
          ) : position ? (
            <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  You are here!
                </Popup>
              </Marker>
            </MapContainer>
          ) : (
            <span style={{
              color: '#6c757d',
              fontSize: '24px'
            }}>
              Unable to load map
            </span>
          )}
        </div>
        <p style={{
          marginTop: '20px',
          color: '#6c757d'
        }}>
          Map displays your current location. This will be expanded to show real-time disaster data, affected areas, and emergency response locations.
        </p>
      </div>
    </div>
  );
}

export default Map;

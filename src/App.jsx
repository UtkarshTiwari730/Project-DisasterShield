import React, { useState, useEffect } from "react";
import Home from "./component/Home.jsx";
import Checklist from "./component/Checklist.jsx";
import AlertForm from "./component/AlertForm.jsx";
import EmergencyContacts from "./component/EmergencyContacts.jsx";
import Map from "./component/Map.jsx";
import AIChat from "./component/AIChat.jsx";
import Weather from "./component/Weather.jsx";
import DrillAnalytics from "./component/DrillAnalytics.jsx";
import { trackPageView, trackButtonClick } from "./analytics.js";

function App() {
  const [view, setView] = useState("home");
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('disasterUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem('disasterUser', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('disasterUser');
    setView("home");
  };

  useEffect(() => {
    trackPageView(`/${view}`);
  }, [view]);

  const renderView = () => {
    if (view === "home") return <Home setView={setView} />;
    if (view === "checklist") return <Checklist setView={setView} />;
    if (view === "alert") return <AlertForm setView={setView} />;
    if (view === "contacts") return <EmergencyContacts setView={setView} />;
    if (view === "map") return <Map setView={setView} />;
    if (view === "ai") return <AIChat setView={setView} />;
    if (view === "weather") return <Weather setView={setView} />;
    if (view === "drill") return <DrillAnalytics setView={setView} />;
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa'
    }}>
      <nav style={{
        backgroundColor: '#343a40',
        padding: '15px 0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            color: 'white',
            margin: 0,
            fontSize: '24px'
          }}>
             Disaster Management System
          </h1>
          <div>
            <button
              onClick={() => { trackButtonClick('Home Navigation'); setView("home"); }}
              style={{
                backgroundColor: view === "home" ? '#dc3545' : 'transparent',
                color: 'white',
                border: '1px solid white',
                borderRadius: '5px',
                padding: '8px 16px',
                margin: '0 5px',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'background-color 0.3s'
              }}
            >
              Home
            </button>
            <button
              onClick={() => { trackButtonClick('Checklist Navigation'); setView("checklist"); }}
              style={{
                backgroundColor: view === "checklist" ? '#dc3545' : 'transparent',
                color: 'white',
                border: '1px solid white',
                borderRadius: '5px',
                padding: '8px 16px',
                margin: '0 5px',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'background-color 0.3s'
              }}
            >
              Checklist
            </button>
            <button
              onClick={() => { trackButtonClick('Alert Navigation'); setView("alert"); }}
              style={{
                backgroundColor: view === "alert" ? '#dc3545' : 'transparent',
                color: 'white',
                border: '1px solid white',
                borderRadius: '5px',
                padding: '8px 16px',
                margin: '0 5px',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'background-color 0.3s'
              }}
            >
              Alert
            </button>
            <button
              onClick={() => { trackButtonClick('Contacts Navigation'); setView("contacts"); }}
              style={{
                backgroundColor: view === "contacts" ? '#dc3545' : 'transparent',
                color: 'white',
                border: '1px solid white',
                borderRadius: '5px',
                padding: '8px 16px',
                margin: '0 5px',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'background-color 0.3s'
              }}
            >
              Contacts
            </button>
            <button
              onClick={() => { trackButtonClick('Map Navigation'); setView("map"); }}
              style={{
                backgroundColor: view === "map" ? '#dc3545' : 'transparent',
                color: 'white',
                border: '1px solid white',
                borderRadius: '5px',
                padding: '8px 16px',
                margin: '0 5px',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'background-color 0.3s'
              }}
            >
              Map
            </button>
            <button
              onClick={() => { trackButtonClick('AI Navigation'); setView("ai"); }}
              style={{
                backgroundColor: view === "ai" ? '#dc3545' : 'transparent',
                color: 'white',
                border: '1px solid white',
                borderRadius: '5px',
                padding: '8px 16px',
                margin: '0 5px',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'background-color 0.3s'
              }}
            >
              AI
            </button>
            <button
              onClick={() => { trackButtonClick('Weather Navigation'); setView("weather"); }}
              style={{
                backgroundColor: view === "weather" ? '#dc3545' : 'transparent',
                color: 'white',
                border: '1px solid white',
                borderRadius: '5px',
                padding: '8px 16px',
                margin: '0 5px',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'background-color 0.3s'
              }}
            >
              Weather
            </button>
            <button
              onClick={() => { trackButtonClick('Drill Analytics Navigation'); setView("drill"); }}
              style={{
                backgroundColor: view === "drill" ? '#dc3545' : 'transparent',
                color: 'white',
                border: '1px solid white',
                borderRadius: '5px',
                padding: '8px 16px',
                margin: '0 5px',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'background-color 0.3s'
              }}
            >
              Drill Analytics
            </button>
          </div>
        </div>
      </nav>
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
      }}>
        {renderView()}
      </main>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Home from "./component/Home.jsx";
import AlertForm from "./component/AlertForm.jsx";
import EmergencyContacts from "./component/EmergencyContacts.jsx";
import Map from "./component/Map.jsx";
import AIChat from "./component/AIChat.jsx";
import Weather from "./component/Weather.jsx";
import MockDrill from "./component/MockDrill.jsx";
import { trackPageView, trackButtonClick } from "./analytics.js";
import { ThemeProvider, useTheme } from "./ThemeContext.jsx";

function AppContent() {
  const { isDarkMode, toggleTheme, colors } = useTheme();
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
    if (view === "alert") return <AlertForm setView={setView} />;
    if (view === "contacts") return <EmergencyContacts setView={setView} />;
    if (view === "map") return <Map setView={setView} />;
    if (view === "ai" && isLoggedIn) return <AIChat setView={setView} />;
    if (view === "weather" && isLoggedIn) return <Weather setView={setView} />;
    if (view === "drill") return <MockDrill setView={setView} />;
    // if not logged in and trying to access ai or weather, fallback to home
    if ((view === "ai" || view === "weather") && !isLoggedIn) return <Home setView={setView} />;
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      backgroundColor: colors.background,
      color: colors.text,
      transition: 'background-color 0.3s, color 0.3s'
    }}>
      <nav style={{
        backgroundColor: colors.navBackground,
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
            color: colors.navText,
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
                color: colors.navText,
                border: '1px solid ' + colors.navText,
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
              onClick={() => { trackButtonClick('Alert Navigation'); setView("alert"); }}
              style={{
                backgroundColor: view === "alert" ? '#dc3545' : 'transparent',
                color: colors.navText,
                border: '1px solid ' + colors.navText,
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
                color: colors.navText,
                border: '1px solid ' + colors.navText,
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
                color: colors.navText,
                border: '1px solid ' + colors.navText,
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
                color: colors.navText,
                border: '1px solid ' + colors.navText,
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
                color: colors.navText,
                border: '1px solid ' + colors.navText,
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
                color: colors.navText,
                border: '1px solid ' + colors.navText,
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
            <button
              onClick={toggleTheme}
              style={{
                backgroundColor: 'transparent',
                color: colors.navText,
                border: '1px solid ' + colors.navText,
                borderRadius: '5px',
                padding: '8px 16px',
                margin: '0 5px',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'background-color 0.3s'
              }}
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

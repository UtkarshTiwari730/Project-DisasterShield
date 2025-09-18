import React, { useState, useEffect } from "react";
import NewsResources from "./NewsResources";

function Home({ setView }) {
  const [user, setUser] = useState(null);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('disasterUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.username && loginForm.password) {
      const userData = { username: loginForm.username, role: 'Emergency Responder' };
      setUser(userData);
      setIsLoggedIn(true);
      localStorage.setItem('disasterUser', JSON.stringify(userData));
    }
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('disasterUser');
    setView("home");
  };

  if (!isLoggedIn) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(1rem, 5vw, 2rem)'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          padding: 'clamp(2rem, 8vw, 2.5rem)',
          maxWidth: 'min(90vw, 400px)',
          width: '100%',
          textAlign: 'center'
        }}>
          <h1 style={{
            color: '#1a237e',
            marginBottom: 'clamp(1.5rem, 5vw, 2rem)',
            fontSize: 'clamp(1.5rem, 6vw, 1.75rem)',
            fontWeight: '700',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
          }}>
             Disaster Management
          </h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={loginForm.username}
              onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
              style={{
                width: '100%',
                padding: 'clamp(0.75rem, 3vw, 0.75rem)',
                marginBottom: 'clamp(0.75rem, 3vw, 1rem)',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: 'clamp(0.9rem, 4vw, 1rem)',
                boxSizing: 'border-box'
              }}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
              style={{
                width: '100%',
                padding: 'clamp(0.75rem, 3vw, 0.75rem)',
                marginBottom: 'clamp(1rem, 4vw, 1.25rem)',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: 'clamp(0.9rem, 4vw, 1rem)',
                boxSizing: 'border-box'
              }}
              required
            />
            <button
              type="submit"
              style={{
                width: '100%',
                backgroundColor: '#1976D2',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: 'clamp(0.75rem, 3vw, 0.75rem)',
                fontSize: 'clamp(1rem, 4.5vw, 1.125rem)',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(25, 118, 210, 0.4)',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1565C0'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1976D2'}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: 'clamp(2rem, 8vw, 2.5rem) clamp(1rem, 4vw, 1.25rem)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <div style={{
          backgroundColor: '#001f3f',
          padding: 'clamp(1rem, 4vw, 1.25rem)',
          borderRadius: '8px',
          marginBottom: 'clamp(2rem, 6vw, 2.5rem)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
          gap: window.innerWidth <= 768 ? '1rem' : '0'
        }}>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(1.5rem, 6vw, 2.25rem)',
            margin: 0,
            fontWeight: '700',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
          }}>
            Welcome, {user?.username}!
          </h1>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#E63946',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: 'clamp(0.5rem, 2vw, 0.5rem) clamp(0.75rem, 3vw, 1rem)',
              cursor: 'pointer',
              fontSize: 'clamp(0.8rem, 3.5vw, 0.875rem)',
              fontWeight: '600',
              boxShadow: '0 4px 8px rgba(230, 57, 70, 0.4)',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#d32f2f'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#E63946'}
          >
            Logout
          </button>
        </div>
        <p style={{
          fontSize: 'clamp(1rem, 4.5vw, 1.125rem)',
          color: '#1a237e',
          marginBottom: 'clamp(2rem, 6vw, 2.5rem)',
          maxWidth: '600px',
          margin: '0 auto clamp(2rem, 6vw, 2.5rem)',
          fontWeight: '500',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          padding: '0 clamp(0.5rem, 2vw, 1rem)'
        }}>
          <b>Stay prepared and informed with our comprehensive disaster management tools.
          Send alerts and coordinate responses effectively.</b>
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
          gap: 'clamp(1.5rem, 5vw, 1.875rem)',
          justifyItems: 'center'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            padding: 'clamp(2rem, 6vw, 2.5rem)',
            maxWidth: '350px',
            width: '100%',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onClick={() => setView("alert")}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-10px) scale(1.05)';
            e.target.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
          }}
          >
            <h3 style={{
              color: '#1976D2',
              marginBottom: 'clamp(0.75rem, 3vw, 1rem)',
              fontSize: 'clamp(1.5rem, 5vw, 1.75rem)',
              position: 'relative',
              zIndex: 1,
              fontWeight: '700'
            }}>
               Send Alert
            </h3>
            <p style={{
              color: '#212529',
              fontSize: 'clamp(0.9rem, 4vw, 1rem)',
              position: 'relative',
              zIndex: 1,
              lineHeight: '1.5'
            }}>
              Quickly send emergency alerts to coordinate responses and inform relevant parties.
            </p>
          </div>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            padding: 'clamp(2rem, 6vw, 2.5rem)',
            maxWidth: '350px',
            width: '100%',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onClick={() => setView("contacts")}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-10px) scale(1.05)';
            e.target.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
          }}
          >
            <h3 style={{
              color: '#1976D2',
              marginBottom: 'clamp(0.75rem, 3vw, 1rem)',
              fontSize: 'clamp(1.5rem, 5vw, 1.75rem)',
              position: 'relative',
              zIndex: 1,
              fontWeight: '700'
            }}>
               Emergency Contacts
            </h3>
            <p style={{
              color: '#212529',
              fontSize: 'clamp(0.9rem, 4vw, 1rem)',
              position: 'relative',
              zIndex: 1,
              lineHeight: '1.5'
            }}>
              Quick access to essential emergency contact numbers for police, fire, medical, and more.
            </p>
          </div>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            padding: 'clamp(2rem, 6vw, 2.5rem)',
            maxWidth: '350px',
            width: '100%',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onClick={() => alert('Resources page coming soon!')}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-10px) scale(1.05)';
            e.target.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
          }}
          >
            <h3 style={{
              color: '#1976D2',
              marginBottom: 'clamp(0.75rem, 3vw, 1rem)',
              fontSize: 'clamp(1.5rem, 5vw, 1.75rem)',
              position: 'relative',
              zIndex: 1,
              fontWeight: '700'
            }}>
               Resources
            </h3>
            <p style={{
              color: '#212529',
              fontSize: 'clamp(0.9rem, 4vw, 1rem)',
              position: 'relative',
              zIndex: 1,
              lineHeight: '1.5'
            }}>
              Access guides, manuals, and helpful resources for disaster preparedness and response.
            </p>
          </div>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            padding: 'clamp(2rem, 6vw, 2.5rem)',
            maxWidth: '350px',
            width: '100%',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onClick={() => alert('News Feed coming soon!')}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-10px) scale(1.05)';
            e.target.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
          }}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, #6f42c1, #5a32a3)',
              opacity: 0.1,
              transform: 'rotate(45deg)',
              transition: 'all 0.3s'
            }}></div>
            <h3 style={{
              color: '#6f42c1',
              marginBottom: 'clamp(0.75rem, 3vw, 1rem)',
              fontSize: 'clamp(1.5rem, 5vw, 1.75rem)',
              position: 'relative',
              zIndex: 1
            }}>
               News Feed
            </h3>
            <p style={{
              color: '#666',
              fontSize: 'clamp(0.9rem, 4vw, 1rem)',
              position: 'relative',
              zIndex: 1,
              lineHeight: '1.5'
            }}>
              Stay updated with the latest news and alerts related to disasters and emergencies.
            </p>
          </div>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            padding: 'clamp(2rem, 6vw, 2.5rem)',
            maxWidth: '350px',
            width: '100%',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onClick={() => setView("map")}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-10px) scale(1.05)';
            e.target.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
          }}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, #fd7e14, #e8680d)',
              opacity: 0.1,
              transform: 'rotate(45deg)',
              transition: 'all 0.3s'
            }}></div>
            <h3 style={{
              color: '#fd7e14',
              marginBottom: 'clamp(0.75rem, 3vw, 1rem)',
              fontSize: 'clamp(1.5rem, 5vw, 1.75rem)',
              position: 'relative',
              zIndex: 1
            }}>
               Disaster Map
            </h3>
            <p style={{
              color: '#666',
              fontSize: 'clamp(0.9rem, 4vw, 1rem)',
              position: 'relative',
              zIndex: 1,
              lineHeight: '1.5'
            }}>
              View real-time disaster locations, affected areas, and emergency response information.
            </p>
          </div>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            padding: 'clamp(2rem, 6vw, 2.5rem)',
            maxWidth: '350px',
            width: '100%',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onClick={() => setView("drill")}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-10px) scale(1.05)';
            e.target.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
          }}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, #e83e8c, #dc3545)',
              opacity: 0.1,
              transform: 'rotate(45deg)',
              transition: 'all 0.3s'
            }}></div>
            <h3 style={{
              color: '#e83e8c',
              marginBottom: 'clamp(0.75rem, 3vw, 1rem)',
              fontSize: 'clamp(1.5rem, 5vw, 1.75rem)',
              position: 'relative',
              zIndex: 1
            }}>
               Mock Analytics
            </h3>
            <p style={{
              color: '#666',
              fontSize: 'clamp(0.9rem, 4vw, 1rem)',
              position: 'relative',
              zIndex: 1,
              lineHeight: '1.5'
            }}>
              Access mock drill scenarios, videos, and analytics for disaster preparedness training.
            </p>
          </div>
        </div>

        <NewsResources />
      </div>
    </div>
  );
}

export default Home;

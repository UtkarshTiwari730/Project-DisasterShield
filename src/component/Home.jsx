import React, { useState, useEffect } from "react";
import NewsResources from "./NewsResources";

function Home({ setView }) {
  const [user, setUser] = useState(null);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('disasterUser');
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
      sessionStorage.setItem('disasterUser', JSON.stringify(userData));
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
        padding: '20px'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          padding: '40px',
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center'
        }}>
          <h1 style={{
            color: '#333',
            marginBottom: '30px',
            fontSize: '28px'
          }}>
             Disaster Management Login
          </h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={loginForm.username}
              onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
              style={{
                width: '100%',
                padding: '12px',
                marginBottom: '15px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '16px',
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
                padding: '12px',
                marginBottom: '20px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
              required
            />
            <button
              type="submit"
              style={{
                width: '100%',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '12px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
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
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{
            color: '#343a40',
            fontSize: '36px',
            margin: 0
          }}>
            Welcome, {user?.username}!
          </h1>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#ff4757',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 16px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Logout
          </button>
        </div>
        <p style={{
          fontSize: '18px',
          color: '#343a40',
          marginBottom: '40px',
          maxWidth: '600px',
          margin: '0 auto 40px'
        }}>
          <b>Stay prepared and informed with our comprehensive disaster management tools.
          Access checklists, send alerts, and coordinate responses effectively.</b>
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            padding: '40px',
            maxWidth: '350px',
            width: '100%',
            cursor: 'pointer'
          }}
          onClick={() => setView("checklist")}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              opacity: 0.1,
              transform: 'rotate(45deg)',
              transition: 'all 0.3s'
            }}></div>
            <h3 style={{
              color: '#667eea',
              marginBottom: '15px',
              fontSize: '28px',
              position: 'relative',
              zIndex: 1
            }}>
               Emergency Checklist
            </h3>
            <p style={{
              color: '#666',
              fontSize: '16px',
              position: 'relative',
              zIndex: 1
            }}>
              Access step-by-step emergency preparedness checklists to ensure you're ready for any situation.
            </p>
          </div>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            padding: '40px',
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
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
              opacity: 0.1,
              transform: 'rotate(45deg)',
              transition: 'all 0.3s'
            }}></div>
            <h3 style={{
              color: '#ff6b6b',
              marginBottom: '15px',
              fontSize: '28px',
              position: 'relative',
              zIndex: 1
            }}>
               Send Alert
            </h3>
            <p style={{
              color: '#666',
              fontSize: '16px',
              position: 'relative',
              zIndex: 1
            }}>
              Quickly send emergency alerts to coordinate responses and inform relevant parties.
            </p>
          </div>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            padding: '40px',
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
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, #28a745, #20c997)',
              opacity: 0.1,
              transform: 'rotate(45deg)',
              transition: 'all 0.3s'
            }}></div>
            <h3 style={{
              color: '#28a745',
              marginBottom: '15px',
              fontSize: '28px',
              position: 'relative',
              zIndex: 1
            }}>
               Emergency Contacts
            </h3>
            <p style={{
              color: '#666',
              fontSize: '16px',
              position: 'relative',
              zIndex: 1
            }}>
              Quick access to essential emergency contact numbers for police, fire, medical, and more.
            </p>
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap',
          marginTop: '40px'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            padding: '40px',
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
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, #17a2b8, #138496)',
              opacity: 0.1,
              transform: 'rotate(45deg)',
              transition: 'all 0.3s'
            }}></div>
            <h3 style={{
              color: '#17a2b8',
              marginBottom: '15px',
              fontSize: '28px',
              position: 'relative',
              zIndex: 1
            }}>
               Resources
            </h3>
            <p style={{
              color: '#666',
              fontSize: '16px',
              position: 'relative',
              zIndex: 1
            }}>
              Access guides, manuals, and helpful resources for disaster preparedness and response.
            </p>
          </div>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            padding: '40px',
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
              marginBottom: '15px',
              fontSize: '28px',
              position: 'relative',
              zIndex: 1
            }}>
               News Feed
            </h3>
            <p style={{
              color: '#666',
              fontSize: '16px',
              position: 'relative',
              zIndex: 1
            }}>
              Stay updated with the latest news and alerts related to disasters and emergencies.
            </p>
          </div>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            padding: '40px',
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
              marginBottom: '15px',
              fontSize: '28px',
              position: 'relative',
              zIndex: 1
            }}>
               Disaster Map
            </h3>
            <p style={{
              color: '#666',
              fontSize: '16px',
              position: 'relative',
              zIndex: 1
            }}>
              View real-time disaster locations, affected areas, and emergency response information.
            </p>
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap',
          marginTop: '40px'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            padding: '40px',
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
              background: 'linear-gradient(45deg, #6f42c1, #5a32a3)',
              opacity: 0.1,
              transform: 'rotate(45deg)',
              transition: 'all 0.3s'
            }}></div>
            <h3 style={{
              color: '#6f42c1',
              marginBottom: '15px',
              fontSize: '28px',
              position: 'relative',
              zIndex: 1
            }}>
               Drill Analytics
            </h3>
            <p style={{
              color: '#666',
              fontSize: '16px',
              position: 'relative',
              zIndex: 1
            }}>
              Access drill analytics videos and learn survival options for various disasters.
            </p>
          </div>
        </div>
        <NewsResources />
      </div>
    </div>
  );
}

export default Home;

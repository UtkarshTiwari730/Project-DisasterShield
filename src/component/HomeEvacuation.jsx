import React from "react";

function HomeEvacuation({ setView }) {
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

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          color: '#28a745',
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2.5rem',
          fontWeight: '700'
        }}>
          🏠 Home Evacuation System
        </h1>

        <p style={{
          textAlign: 'center',
          fontSize: '1.2rem',
          color: '#666',
          marginBottom: '40px',
          maxWidth: '800px',
          margin: '0 auto 40px'
        }}>
          Comprehensive evacuation protocols for homes with safety checklists, emergency contacts, and personalized evacuation routes.
        </p>

        {/* Key Features Grid */}
        <h2 style={{
          color: '#343a40',
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2rem'
        }}>
          🚀 Key Features
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            padding: '20px',
            borderLeft: '4px solid #28a745'
          }}>
            <h3 style={{
              color: '#28a745',
              marginBottom: '10px',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>
              Real-time Hazard Alerts
            </h3>
            <p style={{
              color: '#495057',
              fontSize: '1rem',
              marginBottom: '10px',
              fontWeight: '500'
            }}>
              Receive instant notifications about nearby hazards and emergencies.
            </p>
          </div>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            padding: '20px',
            borderLeft: '4px solid #28a745'
          }}>
            <h3 style={{
              color: '#28a745',
              marginBottom: '10px',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>
              Personalized Evacuation Routes
            </h3>
            <p style={{
              color: '#495057',
              fontSize: '1rem',
              marginBottom: '10px',
              fontWeight: '500'
            }}>
              Customized evacuation plans based on your home's layout and location.
            </p>
          </div>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            padding: '20px',
            borderLeft: '4px solid #28a745'
          }}>
            <h3 style={{
              color: '#28a745',
              marginBottom: '10px',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>
              Emergency Contact Integration
            </h3>
            <p style={{
              color: '#495057',
              fontSize: '1rem',
              marginBottom: '10px',
              fontWeight: '500'
            }}>
              Quick access to local emergency services and family contacts.
            </p>
          </div>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            padding: '20px',
            borderLeft: '4px solid #28a745'
          }}>
            <h3 style={{
              color: '#28a745',
              marginBottom: '10px',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>
              Home Safety Checklist
            </h3>
            <p style={{
              color: '#495057',
              fontSize: '1rem',
              marginBottom: '10px',
              fontWeight: '500'
            }}>
              Step-by-step safety preparations and reminders for your household.
            </p>
          </div>
        </div>

        {/* Emergency Contacts */}
        <h2 style={{
          color: '#343a40',
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2rem'
        }}>
          📞 Emergency Contacts
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '15px',
          marginBottom: '40px'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                fontSize: '24px',
                marginRight: '15px'
              }}>
                🏥
              </span>
              <div>
                <h3 style={{
                  margin: '0 0 5px 0',
                  color: '#343a40',
                  fontSize: '1.1rem'
                }}>
                  Local Hospital
                </h3>
                <p style={{
                  margin: 0,
                  color: '#28a745',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>
                  911
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={() => window.location.href = 'tel:911'}
                style={{
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  marginRight: '8px'
                }}
              >
                Call
              </button>
              <button
                onClick={() => window.location.href = 'sms:911'}
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                SMS
              </button>
            </div>
          </div>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                fontSize: '24px',
                marginRight: '15px'
              }}>
                🚒
              </span>
              <div>
                <h3 style={{
                  margin: '0 0 5px 0',
                  color: '#343a40',
                  fontSize: '1.1rem'
                }}>
                  Fire Department
                </h3>
                <p style={{
                  margin: 0,
                  color: '#28a745',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>
                  911
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={() => window.location.href = 'tel:911'}
                style={{
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  marginRight: '8px'
                }}
              >
                Call
              </button>
              <button
                onClick={() => window.location.href = 'sms:911'}
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                SMS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeEvacuation;

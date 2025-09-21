import React from "react";

function CampusEvacuation({ setView }) {
  const evacuationFeatures = [
    {
      title: " Smart Student Tracking",
      description: "AI-powered system to track student locations during evacuation",
      details: "Real-time GPS tracking with automated roll-call verification"
    },
    {
      title: " Intelligent Alert System",
      description: "Automated emergency notifications via multiple channels",
      details: "SMS, app notifications, and campus-wide speaker systems"
    },
    {
      title: " Dynamic Assembly Points",
      description: "AI-optimized evacuation routes based on real-time conditions",
      details: "Routes adjust based on fire location, wind direction, and crowd density"
    },
    {
      title: " Zone-Based Evacuation",
      description: "Segmented evacuation zones for different building areas",
      details: "Classroom zones, laboratory zones, and administrative zones"
    },
    {
      title: " Real-Time Analytics",
      description: "Live monitoring of evacuation progress and bottlenecks",
      details: "Heat maps, timing analysis, and bottleneck identification"
    },
    {
      title: " Automated Protocols",
      description: "Pre-programmed response sequences for different emergency types",
      details: "Fire, earthquake, chemical spill, and active threat protocols"
    }
  ];

  const emergencyContacts = [
    { name: "Campus Security", number: "1001", icon: "" },
    { name: "Medical Emergency", number: "1002", icon: "" },
    { name: "Fire Emergency", number: "1003", icon: "" },
    { name: "Evacuation Coordinator", number: "1004", icon: "" },
    { name: "Student Counseling", number: "1005", icon: "" },
    { name: "Parent Notification", number: "1006", icon: "" }
  ];

  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  const handleMessage = (number) => {
    window.location.href = `sms:${number}`;
  };

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
          color: '#17a2b8',
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2.5rem',
          fontWeight: '700'
        }}>
           Smart Campus Evacuation System
        </h1>

        <p style={{
          textAlign: 'center',
          fontSize: '1.2rem',
          color: '#666',
          marginBottom: '40px',
          maxWidth: '800px',
          margin: '0 auto 40px'
        }}>
           AI-powered evacuation system for educational institutions with smart routing, 
           real-time student tracking, and automated emergency protocols.
        </p>

        {/* Key Features Grid */}
        <h2 style={{
          color: '#343a40',
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2rem'
        }}>
           Key Features
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {evacuationFeatures.map((feature, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                padding: '20px',
                borderLeft: '4px solid #17a2b8'
              }}
            >
              <h3 style={{
                color: '#17a2b8',
                marginBottom: '10px',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: '#495057',
                fontSize: '1rem',
                marginBottom: '10px',
                fontWeight: '500'
              }}>
                {feature.description}
              </p>
              <p style={{
                color: '#6c757d',
                fontSize: '0.9rem',
                lineHeight: '1.4'
              }}>
                {feature.details}
              </p>
            </div>
          ))}
        </div>

        {/* Emergency Contacts */}
        <h2 style={{
          color: '#343a40',
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2rem'
        }}>
           Emergency Contacts
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '15px',
          marginBottom: '40px'
        }}>
          {emergencyContacts.map((contact, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '24px',
                  marginRight: '15px'
                }}>
                  {contact.icon}
                </span>
                <div>
                  <h3 style={{
                    margin: '0 0 5px 0',
                    color: '#343a40',
                    fontSize: '1.1rem'
                  }}>
                    {contact.name}
                  </h3>
                  <p style={{
                    margin: 0,
                    color: '#17a2b8',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}>
                    {contact.number}
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleCall(contact.number)}
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
                  onClick={() => handleMessage(contact.number)}
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
          ))}
        </div>

        {/* Evacuation Procedures */}
        <h2 style={{
          color: '#343a40',
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2rem'
        }}>
           Standard Evacuation Procedures
        </h2>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          padding: '30px',
          marginBottom: '40px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <h3 style={{
                color: '#dc3545',
                marginBottom: '15px',
                fontSize: '1.3rem'
              }}>
                 Immediate Actions
              </h3>
              <ul style={{
                color: '#495057',
                lineHeight: '1.6'
              }}>
                <li>Stop all activities immediately</li>
                <li>Follow teacher/staff instructions</li>
                <li>Leave belongings behind</li>
                <li>Close doors behind you</li>
                <li>Walk quickly but calmly</li>
              </ul>
            </div>

            <div>
              <h3 style={{
                color: '#fd7e14',
                marginBottom: '15px',
                fontSize: '1.3rem'
              }}>
                 Assembly Points
              </h3>
              <ul style={{
                color: '#495057',
                lineHeight: '1.6'
              }}>
                <li>Main Campus Field (Primary)</li>
                <li>North Parking Lot (Secondary)</li>
                <li>South Sports Ground (Tertiary)</li>
                <li>Library Courtyard (Weather)</li>
                <li>Stay with your class group</li>
              </ul>
            </div>

            <div>
              <h3 style={{
                color: '#28a745',
                marginBottom: '15px',
                fontSize: '1.3rem'
              }}>
                 Accountability
              </h3>
              <ul style={{
                color: '#495057',
                lineHeight: '1.6'
              }}>
                <li>Teachers take attendance</li>
                <li>Report missing students</li>
                <li>Wait for all-clear signal</li>
                <li>Do not re-enter buildings</li>
                <li>Follow re-entry procedures</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Access Tools */}
        <h2 style={{
          color: '#343a40',
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2rem'
        }}>
           Quick Access Tools
        </h2>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <button
            style={{
              backgroundColor: '#17a2b8',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '15px 30px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(23, 162, 184, 0.3)'
            }}
          >
             Download Campus App
          </button>

          <button
            style={{
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '15px 30px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(40, 167, 69, 0.3)'
            }}
          >
             View Floor Plans
          </button>

          <button
            style={{
              backgroundColor: '#fd7e14',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '15px 30px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(253, 126, 20, 0.3)'
            }}
          >
             Watch Training Videos
          </button>
        </div>
      </div>
    </div>
  );
}

export default CampusEvacuation;

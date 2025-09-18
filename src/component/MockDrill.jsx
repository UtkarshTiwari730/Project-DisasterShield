import React, { useState } from "react";

function MockDrill({ setView }) {
  const [earthquakeAnimation, setEarthquakeAnimation] = useState(false);
  const [floodAnimation, setFloodAnimation] = useState(false);
  const [hurricaneAnimation, setHurricaneAnimation] = useState(false);
  const [wildfireAnimation, setWildfireAnimation] = useState(false);

  const survivalOptions = [
    {
      disaster: "Earthquake",
      tips: [
        "Drop, Cover, and Hold On: Get under a sturdy table or desk and hold on until shaking stops.",
        "Stay away from windows, outside doors, and walls.",
        "If outdoors, move to an open area away from buildings, trees, and power lines."
      ]
    },
    {
      disaster: "Flood",
      tips: [
        "Move to higher ground immediately if flooding is imminent.",
        "Avoid walking or driving through floodwaters.",
        "Listen to local authorities for evacuation instructions."
      ]
    },
    {
      disaster: "Hurricane",
      tips: [
        "Secure your home by boarding up windows and doors.",
        "Stock up on emergency supplies including water, food, and medications.",
        "Follow evacuation orders from local officials."
      ]
    },
    {
      disaster: "Wildfire",
      tips: [
        "Create a defensible space around your home by clearing flammable vegetation.",
        "Have an emergency kit ready with important documents and essentials.",
        "Follow local fire department instructions for evacuation."
      ]
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
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
            MockDrill
          </h1>
          <button
            onClick={() => setView("home")}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '10px 20px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Back to Home
          </button>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '15px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          padding: '40px',
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: '#667eea',
            marginBottom: '20px',
            fontSize: '28px'
          }}>
            MockDrill Video
          </h2>
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}>
            <iframe
              title="Drill Analytics Video"
              src="https://www.youtube.com/embed/w78JrJrio-U"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
            ></iframe>
          </div>
          <p style={{
            color: '#666',
            marginTop: '10px',
            textAlign: 'center'
          }}>
            <a
              href="https://www.youtube.com/watch?v=w78JrJrio-U"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#007bff',
                textDecoration: 'none'
              }}
            >
              Watch Full Video on YouTube
            </a>
          </p>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '15px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          padding: '40px'
        }}>
          <h2 style={{
            color: '#28a745',
            marginBottom: '30px',
            fontSize: '28px',
            textAlign: 'center'
          }}>
            MockDrill Scenarios
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {survivalOptions.map((option, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#f8f9fa',
                  borderRadius: '10px',
                  padding: '20px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${index * 0.2}s`,
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                <h3 style={{
                  color: '#ff6b6b',
                  marginBottom: '15px',
                  fontSize: '22px'
                }}>
                  {option.disaster}
                </h3>
                <ul style={{
                  listStyleType: 'none',
                  padding: 0
                }}>
                  {option.tips.map((tip, tipIndex) => (
                    <li
                      key={tipIndex}
                      style={{
                        marginBottom: '10px',
                        color: '#666',
                        lineHeight: '1.5',
                        animation: 'slideInLeft 0.5s ease-out forwards',
                        animationDelay: `${index * 0.2 + tipIndex * 0.1}s`,
                        opacity: 0,
                        transform: 'translateX(-20px)'
                      }}
                    >
                      • {tip}
                    </li>
                  ))}
                </ul>
                {option.disaster === "Flood" && (
                  <p style={{ marginTop: '10px', fontSize: '14px' }}>
                    <a
                      href="https://www.ready.gov/floods"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#007bff', textDecoration: 'underline' }}
                    >
                      More flood preparedness info
                    </a>
                  </p>
                )}
                <button
                  onClick={() => {
                    if (option.disaster === "Earthquake") {
                      setEarthquakeAnimation(true);
                    } else if (option.disaster === "Flood") {
                      setFloodAnimation(true);
                    } else if (option.disaster === "Hurricane") {
                      setHurricaneAnimation(true);
                    } else if (option.disaster === "Wildfire") {
                      setWildfireAnimation(true);
                    } else {
                      alert(`Starting ${option.disaster} Mock Drill`);
                    }
                  }}
                  style={{
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 15px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    marginTop: '15px'
                  }}
                >
                  Start Mock Drill
                </button>
              </div>
            ))}
          </div>
        </div>

        {earthquakeAnimation && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '20px',
              maxWidth: '80%',
              maxHeight: '80%',
              overflow: 'auto',
              position: 'relative'
            }}>
              <button
                onClick={() => setEarthquakeAnimation(false)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  backgroundColor: '#ff4757',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  zIndex: 1001
                }}
              >
                ×
              </button>
              <div style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}>
                <iframe
                  title="Earthquake Drill Video"
                  src="https://www.youtube.com/embed/avvBpyh1kdE"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                  }}
                ></iframe>
              </div>
              <p style={{
                color: '#666',
                marginTop: '10px',
                textAlign: 'center'
              }}>
                <a
                  href="https://youtu.be/avvBpyh1kdE?si=szDMSl6sgFCecOAT"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#007bff',
                    textDecoration: 'none'
                  }}
                >
                  Watch Full Video on YouTube
                </a>
              </p>
            </div>
          </div>
        )}

        {floodAnimation && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '20px',
              maxWidth: '80%',
              maxHeight: '80%',
              overflow: 'auto',
              position: 'relative'
            }}>
              <button
                onClick={() => setFloodAnimation(false)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  backgroundColor: '#ff4757',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                ×
              </button>
              <div style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}>
                <iframe
                  title="Flood Drill Video"
                  src="https://www.youtube.com/embed/Dq1ipSaft6c"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                  }}
                ></iframe>
              </div>
              <p style={{
                color: '#666',
                marginTop: '10px',
                textAlign: 'center'
              }}>
                <a
                  href="https://youtu.be/Dq1ipSaft6c?si=rKrzReJUcgcEvtrQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#007bff',
                    textDecoration: 'none'
                  }}
                >
                  Watch Full Video on YouTube
                </a>
              </p>
            </div>
          </div>
        )}

        {hurricaneAnimation && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '20px',
              maxWidth: '80%',
              maxHeight: '80%',
              overflow: 'auto',
              position: 'relative'
            }}>
              <button
                onClick={() => setHurricaneAnimation(false)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  backgroundColor: '#ff4757',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                ×
              </button>
              <div style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}>
                <iframe
                  title="Hurricane Drill Video"
                  src="https://www.youtube.com/embed/s83bnlD_P4c"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                  }}
                ></iframe>
              </div>
              <p style={{
                color: '#666',
                marginTop: '10px',
                textAlign: 'center'
              }}>
                <a
                  href="https://youtu.be/s83bnlD_P4c?si=byetVZBmWWCqM3IF"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#007bff',
                    textDecoration: 'none'
                  }}
                >
                  Watch Full Video on YouTube
                </a>
              </p>
            </div>
          </div>
        )}

        {wildfireAnimation && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '20px',
              maxWidth: '80%',
              maxHeight: '80%',
              overflow: 'auto',
              position: 'relative'
            }}>
              <button
                onClick={() => setWildfireAnimation(false)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  backgroundColor: '#ff4757',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                ×
              </button>
              <div style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}>
                <iframe
                  title="Wildfire Drill Video"
                  src="https://www.youtube.com/embed/4uE3PxSqY7M"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                  }}
                ></iframe>
              </div>
              <p style={{
                color: '#666',
                marginTop: '10px',
                textAlign: 'center'
              }}>
                <a
                  href="https://youtu.be/4uE3PxSqY7M?si=OzfYvVaaTQ91PyRw"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#007bff',
                    textDecoration: 'none'
                  }}
                >
                  Watch Full Video on YouTube
                </a>
              </p>
            </div>
          </div>
        )}

        <style>
          {`
            @keyframes fadeInUp {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes slideInLeft {
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default MockDrill;

import React, { useState, useEffect } from "react";
import { trackFormSubmission } from "../analytics.js";

function AlertForm({ setView }) {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alerts, setAlerts] = useState([]);
  const [showSMSModal, setShowSMSModal] = useState(false);
  const [smsRecipients, setSmsRecipients] = useState("");

  const fetchAlerts = () => {
    fetch("/api/alerts")
      .then((res) => res.json())
      .then((data) => setAlerts(data))
      .catch(() => setStatus("Error fetching alerts."));
  };

  useEffect(() => {
    fetchAlerts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setStatus("Please enter an alert message.");
      return;
    }
    setIsLoading(true);
    setStatus("");
    fetch("/api/trigger-alert", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ message }),
    })
      .then((res) => res.text())
      .then((response) => {
        setStatus(response);
        setMessage("");
        fetchAlerts();
        trackFormSubmission('Emergency Alert');
      })
      .catch(() => setStatus("Error sending alert."))
      .finally(() => setIsLoading(false));
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px'
    }}>
      <button
        onClick={() => setView("home")}
        style={{
          alignSelf: 'flex-start',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '8px 16px',
          cursor: 'pointer',
          fontSize: '14px',
          marginBottom: '20px'
        }}
      >
        ← Back
      </button>
      <h2 style={{
        color: '#004085',
        marginBottom: '20px',
        fontFamily: 'Arial, sans-serif'
      }}>
        Emergency Alert System
      </h2>
      <form onSubmit={handleSubmit} style={{
        width: '100%',
        maxWidth: '600px',
        marginBottom: '30px',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <label htmlFor="message" style={{
          display: 'block',
          marginBottom: '8px',
          fontWeight: 'bold',
          color: '#004085',
          fontSize: '16px'
        }}>
          Alert Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your emergency alert message here..."
          style={{
            width: '100%',
            height: '100px',
            padding: '12px',
            border: '2px solid #004085',
            borderRadius: '5px',
            fontSize: '16px',
            resize: 'vertical',
            fontFamily: 'Arial, sans-serif',
            boxSizing: 'border-box',
            marginBottom: '15px'
          }}
          required
        />
        <div style={{
          display: 'flex',
          gap: '10px'
        }}>
          <button
            type="submit"
            disabled={isLoading}
            style={{
              flex: 1,
              backgroundColor: isLoading ? '#004085' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              padding: '12px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
          >
            {isLoading ? 'Sending Alert...' : ' Send Alert'}
          </button>
          <button
            type="button"
            onClick={() => setShowSMSModal(true)}
            style={{
              flex: 1,
              backgroundColor: '#17a2b8',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              padding: '12px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Send SMS
          </button>
        </div>
      </form>
      <div style={{
        width: '100%',
        maxWidth: '600px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        padding: '20px',
        overflowY: 'auto',
        maxHeight: '300px'
      }}>
        <h3 style={{
          marginTop: 0,
          marginBottom: '15px',
          color: '#007bff'
        }}>
          Recent Alerts
        </h3>
        {alerts.length === 0 ? (
          <p style={{ color: '#004085' }}>No alerts to display.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {alerts.map((alert, index) => (
              <li key={index} style={{
                padding: '10px',
                borderBottom: '1px solid #b2d7ff',
                color: '#004085',
                fontWeight: 'bold'
              }}>
                {alert.message}
              </li>
            ))}
          </ul>
        )}
      </div>
      {status && (
        <div style={{
          marginTop: '20px',
          padding: '10px',
          borderRadius: '5px',
          backgroundColor: status.includes('Error') ? '#f8d7da' : '#d1ecf1',
          color: status.includes('Error') ? '#721c24' : '#0c5460',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          {status}
        </div>
      )}
      {showSMSModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '20px',
            maxWidth: '400px',
            width: '100%',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}>
            <h3 style={{
              marginTop: 0,
              color: '#004085'
            }}>
              📱 Send SMS Alert
            </h3>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: '#004085'
            }}>
              Recipients (comma-separated numbers):
            </label>
            <input
              type="text"
              value={smsRecipients}
              onChange={(e) => setSmsRecipients(e.target.value)}
              placeholder="e.g., +1234567890, +0987654321"
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #004085',
                borderRadius: '5px',
                fontSize: '16px',
                boxSizing: 'border-box',
                marginBottom: '15px'
              }}
            />
            <div style={{
              display: 'flex',
              gap: '10px'
            }}>
              <button
                onClick={() => {
                  if (smsRecipients.trim()) {
                    alert(`SMS sent to: ${smsRecipients}`);
                    setSmsRecipients("");
                    setShowSMSModal(false);
                    trackFormSubmission('SMS Alert');
                  } else {
                    alert("Please enter recipients.");
                  }
                }}
                style={{
                  flex: 1,
                  backgroundColor: '#17a2b8',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '10px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Send SMS
              </button>
              <button
                onClick={() => setShowSMSModal(false)}
                style={{
                  flex: 1,
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '10px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AlertForm;

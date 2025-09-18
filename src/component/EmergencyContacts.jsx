import React from "react";

function EmergencyContacts({ setView }) {
  const contacts = [
    { name: "Police", number: "100", icon: "" },
    { name: "Fire Department", number: "101", icon: "" },
    { name: "Ambulance", number: "102", icon: "" },
    { name: "Disaster Management", number: "108", icon: "" },
    { name: "National Emergency", number: "112", icon: "" },
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
      <h2 style={{
        color: '#343a40',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
         Emergency Contacts
      </h2>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        {contacts.map((contact, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              padding: '20px',
              marginBottom: '15px',
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
                fontSize: '30px',
                marginRight: '15px'
              }}>
                {contact.icon}
              </span>
              <div>
                <h3 style={{
                  margin: '0 0 5px 0',
                  color: '#343a40'
                }}>
                  {contact.name}
                </h3>
                <p style={{
                  margin: 0,
                  color: '#6c757d',
                  fontSize: '18px',
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
                  marginRight: '10px'
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
                 Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmergencyContacts;

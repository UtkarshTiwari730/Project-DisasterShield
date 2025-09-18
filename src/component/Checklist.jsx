import React, { useEffect, useState } from "react";

function Checklist({ setView }) {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/checklist")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch checklist');
        }
        return res.json();
      })
      .then((data) => {
        setSteps(data.map(step => ({ ...step, completed: false })));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const toggleStep = (index) => {
    setSteps(steps.map((step, i) =>
      i === index ? { ...step, completed: !step.completed } : step
    ));
  };

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px'
      }}>
        <div style={{ fontSize: '18px', color: '#6c757d' }}>Loading checklist...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '40px 20px'
      }}>
        <h2 style={{ color: '#dc3545', marginBottom: '20px' }}>Error Loading Checklist</h2>
        <p style={{ color: '#6c757d', marginBottom: '20px' }}>{error}</p>
        <button
          onClick={() => setView("home")}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
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
         Emergency Preparedness Checklist
      </h2>
      {steps.length === 0 ? (
        <p style={{
          textAlign: 'center',
          color: '#6c757d',
          fontSize: '18px'
        }}>
          No checklist items available.
        </p>
      ) : (
        <div>
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onClick={() => toggleStep(index)}
            >
              <input
                type="checkbox"
                checked={step.completed}
                onChange={() => toggleStep(index)}
                style={{
                  marginRight: '15px',
                  transform: 'scale(1.2)',
                  cursor: 'pointer'
                }}
              />
              <div style={{
                flex: 1,
                textDecoration: step.completed ? 'line-through' : 'none',
                color: step.completed ? '#6c757d' : '#333',
                fontSize: '16px'
              }}>
                {step.text || step}
              </div>
              {step.completed && (
                <span style={{
                  color: '#28a745',
                  fontSize: '20px',
                  marginLeft: '10px'
                }}>
                  ✓
                </span>
              )}
            </div>
          ))}
          <div style={{
            textAlign: 'center',
            marginTop: '30px',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px'
          }}>
            <p style={{
              fontSize: '18px',
              color: '#343a40',
              margin: 0
            }}>
              Completed: {steps.filter(step => step.completed).length} / {steps.length}
            </p>
            {steps.filter(step => step.completed).length === steps.length && (
              <p style={{
                color: '#28a745',
                fontWeight: 'bold',
                marginTop: '10px'
              }}>
                🎉 All checklist items completed!
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Checklist;

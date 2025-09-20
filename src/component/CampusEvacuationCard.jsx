import React from "react";

function CampusEvacuationCard({ setView }) {
  return (
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
    onClick={() => setView("campus-evacuation")}
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
        marginBottom: 'clamp(0.75rem, 3vw, 1rem)',
        fontSize: 'clamp(1.5rem, 5vw, 1.75rem)',
        position: 'relative',
        zIndex: 1,
        fontWeight: '700'
      }}>
        🏫 Campus Evacuation System
      </h3>
      <p style={{
        color: '#666',
        fontSize: 'clamp(0.9rem, 4vw, 1rem)',
        position: 'relative',
        zIndex: 1,
        lineHeight: '1.5'
      }}>
        Advanced evacuation system with AI-powered routing, real-time student tracking, and automated emergency protocols for educational institutions.
      </p>
    </div>
  );
}

export default CampusEvacuationCard;

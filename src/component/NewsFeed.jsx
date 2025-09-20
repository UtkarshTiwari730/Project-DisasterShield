import React, { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext.jsx";

function NewsFeed() {
  const { colors } = useTheme();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock news data - replace with real API fetch if available
    const mockNews = [
      {
        id: 1,
        title: "Emergency Preparedness Drill Scheduled",
        summary: "City officials announce mandatory emergency preparedness drill for next month.",
        source: "Local News",
        time: "2 hours ago"
      },
      {
        id: 2,
        title: "Weather Alert: Heavy Rainfall Expected",
        summary: "Meteorological department issues warning for heavy rainfall in the region.",
        source: "Weather Channel",
        time: "4 hours ago"
      },
      {
        id: 3,
        title: "New Disaster Response Center Opens",
        summary: "State-of-the-art disaster response center inaugurated to improve emergency coordination.",
        source: "Government Bulletin",
        time: "1 day ago"
      }
    ];

    // Simulate API delay
    setTimeout(() => {
      setNews(mockNews);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div style={{
      backgroundColor: colors.cardBackground || 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
      padding: 'clamp(2rem, 6vw, 2.5rem)',
      maxWidth: '400px',
      width: '100%',
      border: `1px solid ${colors.border || '#e0e0e0'}`
    }}>
      <h3 style={{
        color: '#6f42c1',
        marginBottom: 'clamp(0.75rem, 3vw, 1rem)',
        fontSize: 'clamp(1.5rem, 5vw, 1.75rem)',
        fontWeight: '700'
      }}>
        Latest News
      </h3>

      {loading ? (
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          color: colors.text
        }}>
          <p>Loading news...</p>
        </div>
      ) : (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {news.map((item) => (
            <div
              key={item.id}
              style={{
                padding: '1rem',
                backgroundColor: colors.inputBackground || '#f8f9fa',
                borderRadius: '8px',
                border: `1px solid ${colors.border || '#dee2e6'}`
              }}
            >
              <h4 style={{
                color: colors.text,
                margin: '0 0 0.5rem 0',
                fontSize: '1rem',
                fontWeight: '600'
              }}>
                {item.title}
              </h4>
              <p style={{
                color: colors.text,
                margin: '0 0 0.5rem 0',
                fontSize: '0.9rem',
                lineHeight: '1.4',
                opacity: 0.8
              }}>
                {item.summary}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.8rem',
                color: colors.text,
                opacity: 0.6
              }}>
                <span>{item.source}</span>
                <span>{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NewsFeed;

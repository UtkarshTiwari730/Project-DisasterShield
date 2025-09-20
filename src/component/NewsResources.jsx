import React, { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext.jsx";

const mockResources = [
  { id: 1, title: "Disaster Preparedness Guide", url: "https://www.ready.gov/" },
  { id: 2, title: "Emergency Management Manual", url: "https://www.fema.gov/" },
  { id: 3, title: "First Aid Resources", url: "https://www.redcross.org/" },
  { id: 4, title: "Wildfire Safety Tips", url: "https://www.nfpa.org/" },
  { id: 5, title: "Earthquake Preparedness", url: "https://www.earthquakeauthority.com/" },
  { id: 6, title: "Flood Insurance Information", url: "https://www.floodsmart.gov/" },
];

function NewsResources() {
  const { colors } = useTheme();
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [isNewsOpen, setIsNewsOpen] = useState(true);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    // For demo, using mock news data. Replace with real API fetch if available.
    const fetchNews = async () => {
      try {
        // Example: fetch from a news API
        // const response = await fetch('https://newsapi.org/v2/everything?q=disaster&apiKey=YOUR_API_KEY');
        // const data = await response.json();
        // setNews(data.articles);

        // Mock news data
        const mockNews = [
          { id: 1, title: "Severe storms expected this weekend", url: "#", source: "Weather Channel" },
          { id: 2, title: "Flood warnings issued in several areas", url: "#", source: "Local News" },
          { id: 3, title: "Emergency drills scheduled for next month", url: "#", source: "City Council" },
          { id: 4, title: "Heatwave advisory for the region", url: "#", source: "National Weather Service" },
          { id: 5, title: "Volcano eruption monitoring active", url: "#", source: "Geological Survey" },
          { id: 6, title: "Pandemic preparedness updates", url: "#", source: "Health Department" },
        ];
        setNews(mockNews);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoadingNews(false);
      }
    };

    fetchNews();
  }, []);

  const toggleNews = () => setIsNewsOpen(!isNewsOpen);
  const toggleResources = () => setIsResourcesOpen(!isResourcesOpen);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
      gap: 'clamp(1.5rem, 5vw, 1.875rem)',
      justifyItems: 'center',
      marginTop: 'clamp(2rem, 6vw, 2.5rem)'
    }}>
      {/* News Feed Box */}
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
      onClick={toggleNews}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
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
          zIndex: 1,
          fontWeight: '700'
        }}>
          Real-Time News
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

        <div style={{
          marginTop: 'clamp(1rem, 3vw, 1.25rem)',
          position: 'relative',
          zIndex: 1
        }}>
          {loadingNews ? (
            <p style={{ color: '#666', fontSize: 'clamp(0.9rem, 4vw, 1rem)' }}>Loading news...</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, color: '#666' }}>
              {news.map((item) => (
                <li key={item.id} style={{ marginBottom: "10px" }}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700", textDecoration: 'none' }}>
                    {item.title}
                  </a>{" "}
                  <span style={{ fontSize: "12px", opacity: 0.7 }}>({item.source})</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Resources Box */}
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
      onClick={toggleResources}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
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

        <div style={{
          marginTop: 'clamp(1rem, 3vw, 1.25rem)',
          position: 'relative',
          zIndex: 1
        }}>
          <ul style={{ listStyle: "none", padding: 0, color: '#212529' }}>
            {mockResources.map((res) => (
              <li key={res.id} style={{ marginBottom: "10px" }}>
                <a href={res.url} target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700", textDecoration: 'none' }}>
                  {res.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NewsResources;

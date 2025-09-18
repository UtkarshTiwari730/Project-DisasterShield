import React, { useState, useEffect } from "react";

const mockResources = [
  { id: 1, title: "Disaster Preparedness Guide", url: "https://www.ready.gov/" },
  { id: 2, title: "Emergency Management Manual", url: "https://www.fema.gov/" },
  { id: 3, title: "First Aid Resources", url: "https://www.redcross.org/" },
];

function NewsResources() {
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);

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

  return (
    <div style={{ marginTop: "40px", textAlign: "left" }}>
      <h2 style={{ color: "gray", marginBottom: "20px" }}> Real-Time News</h2>
      {loadingNews ? (
        <p style={{ color: "Black" }}>Loading news...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, color: "white" }}>
          {news.map((item) => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700" }}>
                {item.title}
              </a>{" "}
              <span style={{ fontSize: "12px", color: "#723131ff" }}>({item.source})</span>
            </li>
          ))}
        </ul>
      )}

      <h2 style={{ color: "gray", marginTop: "40px", marginBottom: "20px" }}> Resources</h2>
      <ul style={{ listStyle: "none", padding: 0, color: "Black" }}>
        {mockResources.map((res) => (
          <li key={res.id} style={{ marginBottom: "10px" }}>
            <a href={res.url} target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700" }}>
              {res.title}
            </a>
          </li>
        ))}
      </ul>

      <h2 style={{ color: "gray", marginTop: "40px", marginBottom: "20px" }}> Drill Analytics</h2>
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "10px" }}>
        <iframe
          title="Drill Analytics Video"
          src="https://www.youtube.com/embed/w78JrJrio-U"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        ></iframe>
      </div>
      <p style={{ color: "white", marginTop: "10px" }}>
        <a href="https://www.youtube.com/watch?v=w78JrJrio-U" target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700" }}>
          Watch Full Video
        </a>
      </p>
    </div>
  );
}

export default NewsResources;

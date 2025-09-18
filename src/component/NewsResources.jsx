import React, { useState, useEffect } from "react";

const mockResources = [
  { id: 1, title: "Disaster Preparedness Guide", url: "https://www.ready.gov/" },
  { id: 2, title: "Emergency Management Manual", url: "https://www.fema.gov/" },
  { id: 3, title: "First Aid Resources", url: "https://www.redcross.org/" },
  { id: 4, title: "Wildfire Safety Tips", url: "https://www.nfpa.org/" },
  { id: 5, title: "Earthquake Preparedness", url: "https://www.earthquakeauthority.com/" },
  { id: 6, title: "Flood Insurance Information", url: "https://www.floodsmart.gov/" },
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

    </div>
  );
}

export default NewsResources;

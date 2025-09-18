import React, { useState } from "react";
import { trackButtonClick } from "../analytics.js";

function AIChat({ setView }) {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your disaster preparedness assistant. How can I help you today?", sender: "ai" }
  ]);
  const [input, setInput] = useState("");

  const disasterOptions = ["earthquake", "flood", "fire", "hurricane", "tornado", "tsunami", "wildfire", "blizzard", "preparedness", "protection"];

  const mockResponses = {
    "earthquake": "During an earthquake: DROP, COVER, and HOLD ON. Stay indoors until the shaking stops, then evacuate if necessary. Avoid elevators and damaged structures. Secure heavy furniture, prepare an emergency kit, and know your safe spots like under a sturdy table. Aftershocks can occur, so stay alert.",
    "flood": "For floods: Move to higher ground immediately. Avoid walking or driving through flood waters, as they can be deeper than they appear and carry debris. Listen to local authorities for evacuation instructions. Turn off utilities if instructed, and avoid contact with floodwater which may be contaminated.",
    "fire": "In case of fire: Get out quickly and stay out. Call emergency services immediately. If trapped, seal doors and windows with wet cloths and signal for help from a window. Crawl low under smoke, and never go back inside for anything. Have working smoke alarms and fire extinguishers ready.",
    "hurricane": "Prepare for hurricanes by securing your home with shutters or plywood, having emergency supplies for at least 72 hours, and following evacuation orders promptly. Stay tuned to weather updates via radio or battery-powered devices. Avoid windows during high winds, and be prepared for power outages and flooding.",
    "tornado": "Tornado safety: Go to an interior room on the lowest floor, away from windows. Avoid auditoriums or large open spaces. Use blankets or helmets for protection if no shelter is available. Listen for tornado warnings and sirens. If in a vehicle, abandon it for a sturdy building or lie flat in a ditch.",
    "tsunami": "For tsunamis: If you're near the coast and feel an earthquake or receive a warning, move inland or to higher ground immediately. Tsunamis can arrive minutes after the initial quake. Never go to the shore to watch; tsunamis are often a series of waves. Follow evacuation routes and heed local authorities.",
    "wildfire": "Wildfire safety: Create a defensible space around your home by clearing brush and flammable materials. Have an evacuation plan and emergency kit ready. Follow local fire department instructions. If trapped, find a body of water or cover yourself with wet clothing. Stay informed via emergency alerts.",
    "blizzard": "During blizzards: Stay indoors and dress in layers to conserve heat. Avoid travel unless absolutely necessary. Prepare for power outages by having alternative heat sources and food supplies. Keep your vehicle stocked with emergency items if you must drive. Listen to weather reports and avoid overexertion outdoors.",
    "preparedness": "General disaster preparedness: Assemble an emergency kit with water, non-perishable food, medications, first aid supplies, and important documents. Develop a family communication plan and designate meeting points. Stay informed through reliable sources like local authorities. Practice evacuation routes and have backup power options.",
    "protection": "Disaster protection tips: Identify potential hazards in your area and create a family emergency plan. Secure your home against specific threats like earthquakes or floods. Keep emergency supplies stocked and rotated. Learn basic first aid and CPR. Stay connected with community warning systems.",
    "default": "I'm here to help with disaster preparedness questions. Please ask about specific disasters like earthquakes, floods, fires, hurricanes, tornadoes, tsunamis, wildfires, or blizzards, or general protection and preparedness tips."
  };

  const handleSend = (messageText) => {
    const textToSend = messageText !== undefined ? messageText : input;
    if (!textToSend.trim()) return;

    const userMessage = { text: textToSend, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    trackButtonClick('AI Chat Send Message');

    // Generate mock response
    const lowerInput = textToSend.toLowerCase();
    let response = mockResponses.default;
    for (const key in mockResponses) {
      if (lowerInput.includes(key)) {
        response = mockResponses[key];
        break;
      }
    }

    const aiMessage = { text: response, sender: "ai" };
    setTimeout(() => {
      setMessages(prev => [...prev, aiMessage]);
    }, 1000); // Simulate delay

    if (messageText === undefined) {
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div style={{
      minHeight: '80vh',
      backgroundColor: '#f5f5f5',
      padding: '40px 20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        padding: '30px',
        maxWidth: '600px',
        width: '100%',
        maxHeight: '70vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h2 style={{
          color: '#333',
          textAlign: 'center',
          marginBottom: '20px',
          fontSize: '28px'
        }}>
          Disaster AI Assistant
        </h2>
        <div style={{
          flex: 1,
          overflowY: 'auto',
          marginBottom: '20px',
          padding: '10px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9'
        }}>
          {messages.map((msg, index) => (
            <div key={index} style={{
              marginBottom: '10px',
              textAlign: msg.sender === 'user' ? 'right' : 'left'
            }}>
              <div style={{
                display: 'inline-block',
                padding: '10px 15px',
                borderRadius: '15px',
                backgroundColor: msg.sender === 'user' ? '#667eea' : '#e9ecef',
                color: msg.sender === 'user' ? 'white' : '#333',
                maxWidth: '70%'
              }}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              justifyContent: 'center',
              marginBottom: '10px'
            }}>
              {disasterOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSend(option)}
                  style={{
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    textTransform: 'capitalize'
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about disaster preparedness..."
                style={{
                  flex: 1,
                  padding: '12px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
              />
              <button
                onClick={() => handleSend()}
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 20px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Send
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default AIChat;

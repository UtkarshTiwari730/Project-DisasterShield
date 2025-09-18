import React, { useState } from "react";
import { trackButtonClick } from "../analytics.js";

function AIChat({ setView }) {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your disaster preparedness assistant. How can I help you today?", sender: "ai" }
  ]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [language, setLanguage] = useState("en");

  const disasterOptions = ["earthquake", "flood", "fire", "hurricane", "tornado", "tsunami", "wildfire", "blizzard", "preparedness", "protection", "volcanic eruption", "landslide", "pandemic", "chemical spill", "drought", "heatwave"];

  const mockResponses = {
    "earthquake": {
      en: " During an earthquake: DROP, COVER, and HOLD ON under a sturdy table or desk until shaking stops. Stay away from windows, outside doors, and walls. If outdoors, move to an open area away from buildings, trees, and power lines. Secure heavy furniture, prepare an emergency kit, and know your safe spots. Aftershocks can occur, so stay alert and follow local authorities for evacuation if needed. Stay safe! 🛡️",
      hi: " भूकंप के दौरान: एक मजबूत टेबल या डेस्क के नीचे गिरें, कवर करें और पकड़ें जब तक हिलना बंद न हो। खिड़कियों, बाहर के दरवाजों और दीवारों से दूर रहें। यदि बाहर हैं, तो इमारतों, पेड़ों और बिजली लाइनों से दूर खुले क्षेत्र में जाएं। भारी फर्नीचर को सुरक्षित करें, आपातकालीन किट तैयार करें, और अपने सुरक्षित स्थानों को जानें। बाद के झटके हो सकते हैं, इसलिए सतर्क रहें और निकासी के लिए स्थानीय अधिकारियों का पालन करें। सुरक्षित रहें! 🛡️"
    },
    "flood": {
      en: " For floods: Move to higher ground immediately if flooding is imminent. Avoid walking or driving through floodwaters, as they can be deeper than they appear and carry debris. Listen to local authorities for evacuation instructions. Turn off utilities if instructed, and avoid contact with floodwater which may be contaminated. Have sandbags or barriers ready if possible. Don't underestimate the water's power! 💧",
      hi: " बाढ़ के लिए: यदि बाढ़ आ रही है तो तुरंत उच्च जमीन पर जाएं। बाढ़ के पानी में चलने या ड्राइव करने से बचें, क्योंकि यह दिखने से गहरा हो सकता है और मलबा ले जा सकता है। निकासी निर्देशों के लिए स्थानीय अधिकारियों को सुनें। यदि निर्देश दिया जाए तो उपयोगिताओं को बंद करें, और दूषित बाढ़ के पानी से संपर्क से बचें। यदि संभव हो तो रेत के बैग या बाधाएं तैयार रखें। पानी की शक्ति को कम मत समझें! 💧"
    },
    "fire": {
      en: " In case of fire: Get out quickly and stay out. Call emergency services immediately. If trapped, seal doors and windows with wet cloths and signal for help from a window. Crawl low under smoke, and never go back inside for anything. Have working smoke alarms, fire extinguishers, and a family escape plan ready. Practice fire drills regularly. Fire safety first! 🚒",
      hi: " आग की स्थिति में: जल्दी बाहर निकलें और बाहर रहें। तुरंत आपातकालीन सेवाओं को कॉल करें। यदि फंसे हुए हैं, तो दरवाजों और खिड़कियों को गीले कपड़ों से सील करें और खिड़की से मदद के लिए संकेत करें। धुएं के नीचे नीचे रेंगें, और कभी भी अंदर वापस न जाएं। काम करने वाले धुएं की अलार्म, अग्निशामक और परिवार की निकासी योजना तैयार रखें। आग की ड्रिल नियमित रूप से अभ्यास करें। आग की सुरक्षा पहले! 🚒"
    },
    "hurricane": {
      en: " Prepare for hurricanes by securing your home with shutters or plywood, having emergency supplies for at least 72 hours, and following evacuation orders promptly. Stay tuned to weather updates via radio or battery-powered devices. Avoid windows during high winds, and be prepared for power outages and flooding. Stock up on batteries, generators, and non-perishable food. Batten down the hatches! 🌪️",
      hi: " हरीकैन के लिए तैयार करें: शटर या प्लाईवुड से अपने घर को सुरक्षित करें, कम से कम 72 घंटों के लिए आपातकालीन आपूर्ति रखें, और निकासी आदेशों का तुरंत पालन करें। रेडियो या बैटरी से चलने वाले उपकरणों के माध्यम से मौसम अपडेट पर बने रहें। उच्च हवाओं के दौरान खिड़कियों से बचें, और बिजली की कटौती और बाढ़ के लिए तैयार रहें। बैटरी, जनरेटर और गैर-नष्ट होने वाले भोजन पर स्टॉक करें। हैच को बंद करें! 🌪️"
    },
    "tornado": {
      en: " Tornado safety: Go to an interior room on the lowest floor, away from windows. Avoid auditoriums or large open spaces. Use blankets or helmets for protection if no shelter is available. Listen for tornado warnings and sirens. If in a vehicle, abandon it for a sturdy building or lie flat in a ditch. Have a tornado shelter or safe room designated. Take cover immediately! 🏠",
      hi: " टॉर्नाडो सुरक्षा: खिड़कियों से दूर सबसे नीचे के फर्श पर एक आंतरिक कमरे में जाएं। ऑडिटोरियम या बड़े खुले स्थानों से बचें। यदि कोई आश्रय उपलब्ध न हो तो रक्षा के लिए कंबल या हेलमेट का उपयोग करें। टॉर्नाडो चेतावनियों और सायरन को सुनें। यदि वाहन में हैं, तो इसे मजबूत इमारत के लिए छोड़ दें या खाई में लेट जाएं। टॉर्नाडो आश्रय या सुरक्षित कमरा निर्धारित करें। तुरंत कवर लें! 🏠"
    },
    "tsunami": {
      en: " Tsunami warning: Move to higher ground immediately. Avoid the beach and low-lying coastal areas. Follow evacuation routes and listen to emergency broadcasts. Do not return until authorities declare it safe. Prepare an emergency kit and stay informed. Stay alert for multiple waves. Safety first! 🌊",
      hi: " सुनामी चेतावनी: तुरंत उच्च जमीन पर जाएं। समुद्र तट और निम्न-भूमि तटीय क्षेत्रों से बचें। निकासी मार्गों का पालन करें और आपातकालीन प्रसारण सुनें। जब तक अधिकारी सुरक्षित घोषित न करें, तब तक वापस न लौटें। एक आपातकालीन किट तैयार करें और सूचित रहें। कई लहरों के लिए सतर्क रहें। सुरक्षा पहले! 🌊"
    },
    "wildfire": {
      en: " Wildfire safety: Create defensible space around your home by clearing flammable vegetation. Have an evacuation plan and emergency kit ready. Stay informed about fire conditions and alerts. If advised to evacuate, do so immediately. Wear protective clothing and avoid breathing smoke. Follow local fire department instructions. Stay safe! 🔥",
      hi: " वनाग्नि सुरक्षा: अपने घर के आसपास ज्वलनशील वनस्पति को साफ करके रक्षा क्षेत्र बनाएं। एक निकासी योजना और आपातकालीन किट तैयार रखें। आग की स्थिति और अलर्ट के बारे में सूचित रहें। यदि निकासी की सलाह दी जाए, तो तुरंत करें। सुरक्षात्मक कपड़े पहनें और धुआं सांस लेने से बचें। स्थानीय अग्निशमन विभाग के निर्देशों का पालन करें। सुरक्षित रहें! 🔥"
    },
    "default": {
      en: "I'm here to help with disaster preparedness. Please ask me about any specific disaster or safety topic.",
      hi: "मैं आपदा तैयारी में मदद के लिए यहां हूं। कृपया मुझसे किसी विशिष्ट आपदा या सुरक्षा विषय के बारे में पूछें।"
    }
  };

  const handleSend = (messageText) => {
    if (!messageText?.trim()) return;

    const userMessage = { text: messageText, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    trackButtonClick('AI Chat Send Message');

    // Generate mock response
    const lowerInput = messageText.toLowerCase();
    let response = mockResponses.default[language];
    for (const key in mockResponses) {
      if (lowerInput.includes(key)) {
        response = mockResponses[key][language];
        break;
      }
    }

    const aiMessage = { text: response, sender: "ai" };
    setTimeout(() => {
      setMessages(prev => [...prev, aiMessage]);
    }, 1000); // Simulate delay

    setInput("");
    setSuggestions([]);
    setSelectedIndex(-1);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setSelectedIndex(-1);

    if (value.trim()) {
      const filtered = disasterOptions.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyPress = (e) => {
    if (suggestions.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % suggestions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : suggestions.length - 1);
      } else if (e.key === 'Enter' && selectedIndex >= 0) {
        e.preventDefault();
        setInput(suggestions[selectedIndex]);
        setSuggestions([]);
        setSelectedIndex(-1);
      } else if (e.key === 'Escape') {
        setSuggestions([]);
        setSelectedIndex(-1);
      } else if (e.key === 'Enter') {
        handleSend();
      }
    } else if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setSuggestions([]);
    setSelectedIndex(-1);
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
              <div style={{ position: 'relative', flex: 1 }}>
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask me about disaster preparedness..."
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                />
                {suggestions.length > 0 && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    maxHeight: '200px',
                    overflowY: 'auto',
                    zIndex: 10
                  }}>
                    {suggestions.map((suggestion, index) => (
                      <div
                        key={suggestion}
                        onClick={() => handleSuggestionClick(suggestion)}
                        style={{
                          padding: '10px',
                          cursor: 'pointer',
                          backgroundColor: index === selectedIndex ? '#f0f0f0' : 'white',
                          borderBottom: index < suggestions.length - 1 ? '1px solid #eee' : 'none',
                          textTransform: 'capitalize'
                        }}
                      >
                        {suggestion}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => handleSend(input)}
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

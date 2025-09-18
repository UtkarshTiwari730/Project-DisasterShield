import React, { useState, useEffect } from 'react';

const API_KEY = 'b0d38fcc085f7b126f5633d39107044d';

function Weather({ setView }) {
  const [city, setCity] = useState('Lucknow');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const currentResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      if (!currentResponse.ok || !forecastResponse.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const currentData = await currentResponse.json();
      const forecastData = await forecastResponse.json();

      setCurrentWeather(currentData);
      // Group forecast by day
      const dailyForecast = forecastData.list.reduce((acc, item) => {
        const date = new Date(item.dt * 1000).toDateString();
        if (!acc[date]) {
          acc[date] = item;
        }
        return acc;
      }, {});
      setForecast(Object.values(dailyForecast).slice(0, 5));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          color: '#343a40',
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '36px'
        }}>
          Weather Forecasting
        </h1>

        <form onSubmit={handleSubmit} style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            style={{
              padding: '12px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '8px',
              width: '300px',
              marginRight: '10px'
            }}
            required
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 24px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Get Weather
          </button>
        </form>

        {loading && (
          <div style={{ textAlign: 'center', fontSize: '18px' }}>
            Loading weather data...
          </div>
        )}

        {error && (
          <div style={{
            textAlign: 'center',
            color: 'red',
            fontSize: '18px',
            marginBottom: '20px'
          }}>
            Error: {error}
          </div>
        )}

        {currentWeather && (
          <div style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            padding: '40px',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            <h2 style={{
              color: '#343a40',
              marginBottom: '20px'
            }}>
              Current Weather in {currentWeather.name}
            </h2>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <img
                src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                alt={currentWeather.weather[0].description}
                style={{ width: '100px', height: '100px' }}
              />
              <div style={{ marginLeft: '20px' }}>
                <p style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: '#007bff',
                  margin: '0'
                }}>
                  {Math.round(currentWeather.main.temp)}°C
                </p>
                <p style={{
                  fontSize: '20px',
                  color: '#666',
                  margin: '5px 0'
                }}>
                  {currentWeather.weather[0].description}
                </p>
                <p style={{
                  fontSize: '16px',
                  color: '#666'
                }}>
                  Humidity: {currentWeather.main.humidity}% | Wind: {currentWeather.wind.speed} m/s
                </p>
              </div>
            </div>
          </div>
        )}

        {forecast.length > 0 && (
          <div>
            <h2 style={{
              color: '#343a40',
              textAlign: 'center',
              marginBottom: '30px'
            }}>
              5-Day Forecast
            </h2>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              {forecast.map((day, index) => (
                <div key={index} style={{
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                  padding: '20px',
                  textAlign: 'center',
                  minWidth: '150px'
                }}>
                  <p style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#343a40',
                    marginBottom: '10px'
                  }}>
                    {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
                  </p>
                  <img
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                    alt={day.weather[0].description}
                    style={{ width: '50px', height: '50px' }}
                  />
                  <p style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#007bff',
                    margin: '10px 0'
                  }}>
                    {Math.round(day.main.temp)}°C
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: '#666'
                  }}>
                    {day.weather[0].description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;

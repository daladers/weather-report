require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/weather', async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ error: 'City parameter is required.' });
  }

  const apiKey = process.env.WEATHERSTACK_API_KEY;
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${encodeURIComponent(city)}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
  
    if (data.error) {
      return res.status(400).json({ error: data.error.info });
    }
  
    if (!data.current || !data.location) {
      return res.status(500).json({ error: 'Incomplete data received from weather API.' });
    }
  
    const weatherInfo = {
      location: data.location.name,
      region: data.location.region,
      country: data.location.country,
      localtime: data.location.localtime,
      temperature: data.current.temperature,
      weather_descriptions: data.current.weather_descriptions || [],
      wind_speed: data.current.wind_speed,
      pressure: data.current.pressure,
      humidity: data.current.humidity,
      weather_icons: data.current.weather_icons || [],
      feelslike: data.current.feelslike,
    };
    
    res.json(weatherInfo);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    res.status(500).json({ error: 'Failed to fetch weather data.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
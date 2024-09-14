import { useSelector } from 'react-redux';
import {
  Typography,
  Box,
  CircularProgress,
  Alert,
  Card,
  CardContent,
  CardMedia,
  Grid2,
} from '@mui/material';

const WeatherDisplay = () => {
  const { data, status, error } = useSelector((state) => state.weather);

  if (status === 'loading') {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (status === 'failed') {
    return (
      <Alert severity="error" sx={{ marginTop: 2 }}>
        {error}
      </Alert>
    );
  }

  if (status === 'succeeded' && data) {
    return (
      <Card
        sx={{
          marginTop: 2,
          borderRadius: '16px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Weather in {data.location}, {data.region}, {data.country}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Local Time: {data.localtime}
          </Typography>

          <Grid2 container spacing={2} alignItems="center">
            <Grid2 item xs={12} sm={4}>
              <CardMedia
                component="img"
                image={data.weather_icons && data.weather_icons[0]}
                alt={
                  data.weather_descriptions && data.weather_descriptions[0]
                }
                sx={{
                  width: '100%',
                  maxWidth: 128,
                  margin: '0 auto',
                }}
              />
            </Grid2>

            <Grid2 item xs={12} sm={8}>
              <Typography variant="h2" color="primary">
                {data.temperature}°C
              </Typography>
              <Typography variant="h6">
                {data.weather_descriptions &&
                  data.weather_descriptions.join(', ')}
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 container spacing={2} sx={{ marginTop: 2 }}>
            <Grid2 item xs={6}>
              <Typography variant="body1">
                <strong>Wind Speed:</strong> {data.wind_speed} km/h
              </Typography>
            </Grid2>
            <Grid2 item xs={6}>
              <Typography variant="body1">
                <strong>Pressure:</strong> {data.pressure} mb
              </Typography>
            </Grid2>
            <Grid2 item xs={6}>
              <Typography variant="body1">
                <strong>Humidity:</strong> {data.humidity}%
              </Typography>
            </Grid2>
            <Grid2 item xs={6}>
              <Typography variant="body1">
                <strong>Feels Like:</strong> {data.feelslike}°C
              </Typography>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    );
  }

  return null;
};

export default WeatherDisplay;
import { Container, Typography, Paper } from '@mui/material';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';

const App = () => {
  return (
    <Paper
      sx={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
        padding: 2,
      }}
    >
      <Container maxWidth="sm" sx={{ marginTop: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          Weather App
        </Typography>
        <WeatherForm />
        <WeatherDisplay />
      </Container>
    </Paper>
  );
};

export default App;
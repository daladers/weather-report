import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather, clearWeather } from '../store/weatherSlice';
import { TextField, Button, Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const WeatherForm = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleFetchWeather = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      dispatch(fetchWeather(city));
    }
  };

  const handleClear = () => {
    setCity('');
    dispatch(clearWeather());
  };

  return (
    <Box
      component="form"
      onSubmit={handleFetchWeather}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        marginBottom: 2,
        flexWrap: 'wrap',
      }}
    >
      <TextField
        label="Enter City"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
        slotProps={{
          input:{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }
        }}
        sx={{ flexGrow: 1 }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
      >
        Get Weather
      </Button>
      <Button
        type="button"
        variant="outlined"
        color="secondary"
        onClick={handleClear}
        startIcon={<ClearIcon />}
      >
        Clear
      </Button>
    </Box>
  );
};

export default WeatherForm;
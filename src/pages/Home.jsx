import Box from '@mui/material/Box';
import Footer from '../components/Footer';
import CustomButton from '../components/Button';
import backgroundImage from '../assets/images/home-wallpaper.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          width: '100%',
          padding: '2rem'
        }}
      >
        <h1>Peliseries</h1>
        <p>Bienvenido a nuestra página de peliculas y series</p>
        <CustomButton 
          text="Ver Películas" 
          color="secondary"
          onClick={() => navigate('/movies')}
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;

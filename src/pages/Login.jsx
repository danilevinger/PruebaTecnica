import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { useState } from 'react';
import credentialsLogin from '../assets/sample.json'
import { useNavigate } from 'react-router-dom';

export default function SimpleLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [credentials] = useState(credentialsLogin.login);


  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials && email === credentials.username && password === credentials.password) {
      navigate('/home')
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh" 
      bgcolor="background.default"
    >
      <Paper elevation={3} sx={{ padding: 3, width: 300 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Iniciar Sesión
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Usuario"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            size="small"
          />
          <TextField
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            size="small"
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            size="large"
            sx={{ marginTop: 2 }}
          >
            ENTRAR
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

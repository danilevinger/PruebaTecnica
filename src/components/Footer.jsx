import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        width: '100%',
        backgroundColor: (theme) => theme.palette.grey[200],
        textAlign: 'center'
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Peliseries. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;

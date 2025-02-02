import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const SpacingGrid = ({ items }) => {
  return (
    <Box sx={{ flexGrow: 1, p: 3, mt: 8 }}>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={12} sm={4} md={3} lg={2} key={item.title}>
            <Card sx={{ height: '100%', transition: 'all 0.3s ease', '&:hover': { opacity: 0.8, border: '2px solid white', cursor: 'pointer' } }}>
              <CardMedia
                component="img"
                height="400"
                image={item.images['Poster Art'].url}
                alt={item.title}
                sx={{ objectFit: 'contain', backgroundColor: 'transparent' }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

SpacingGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      images: PropTypes.shape({
        'Poster Art': PropTypes.shape({
          url: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    })
  ).isRequired
};

export default SpacingGrid;

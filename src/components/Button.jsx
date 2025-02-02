import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

export default function CustomButton({ text, color, onClick }) {
  return (
    <Button 
      variant="contained" 
      disableElevation
      color={color}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func
};

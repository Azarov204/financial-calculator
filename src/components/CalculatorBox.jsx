import { PropTypes } from "prop-types"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

function CalculatorBox(props) {
  
  return (
    <Button
      color="inherit" 
      component={Link} 
      to={props.link}
      sx={{
        width: 300,
        height: 300,
        borderRadius: 1,
        bgcolor: 'primary.main',
        '&:hover': {
          bgcolor: 'primary.dark',
        },
      }}
    >
      {props.name}
    </Button>
  )
}

CalculatorBox.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.object,
};

export default CalculatorBox
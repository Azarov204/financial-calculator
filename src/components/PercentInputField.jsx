import { InputAdornment, TextField, Typography } from "@mui/material";
import { PropTypes } from "prop-types"

function PercentInputField(props) {

  return (
    <>
      <Typography>
        {props.label}
      </Typography>
      <TextField 
        type={"text"}
        value={props.value}
        variant={"outlined"}
        onChange={(e) => props.onChange(e.target.value)}
        InputProps={{
          endAdornment: <InputAdornment position="start">%</InputAdornment>
        }}
      />
    </>
  );
}

PercentInputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  tooltip: PropTypes.string,
};

export default PercentInputField
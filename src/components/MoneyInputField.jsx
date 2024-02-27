import { InputAdornment, TextField, Tooltip, Typography } from "@mui/material";
import { PropTypes } from "prop-types"

function MoneyInputField(props) {
  
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
          startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}
      />
    </>
  );
}

MoneyInputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  tooltip: PropTypes.string,
};

export default MoneyInputField
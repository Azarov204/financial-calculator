import { TextField } from "@mui/material";
import { PropTypes } from "prop-types"

function TooltipTextbox(props) {

  const onChange = (e) => {
    const value = e.target.value;
    const regex = /^\d+$/;

    console.log(value, regex.test(value))

    if (props.numbersOnly) {
      if (value == '' || regex.test(value)) {
        props.onChange(value)
      }
    } else {
      props.onChange(value)
    }
  }

  return (
    <>
      <TextField 
        label={props.label}
        type={"text"}
        value={props.value}
        onChange={(e) => onChange(e)}
        error
        helperText={"thats a no no"}
      />
    </>
  );
}

TooltipTextbox.defaultProp = {
  numbersOnly: false,
}

TooltipTextbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  numbersOnly: PropTypes.boolean,
  error: PropTypes.string,
  tooltipText: PropTypes.string,
};

export default TooltipTextbox
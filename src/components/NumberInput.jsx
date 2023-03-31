import PropTypes from 'prop-types';

import { TextField } from '@mui/material';

const NumberInput = ({ title, value, onChange, pattern, required = false }) => {
  return (
    <>
      {/* <h2>{title}</h2> */}
      <TextField
        id="outlined-basic"
        label="Number"
        variant="outlined"
        value={value}
        type="tel"
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required={required}
        onChange={onChange}
        inputProps={{ pattern }}
      />
    </>
  );
};

NumberInput.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.string,
  onChange: PropTypes.func,
};
export default NumberInput;

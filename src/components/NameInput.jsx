import PropTypes from 'prop-types';

import { TextField } from '@mui/material';

const NameInput = ({ title, onChange, value, pattern, required = false }) => {
  console.log(value);
  return (
    <>
      <h2>{title}</h2>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={value}
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required={required}
        onChange={onChange}
        inputProps={{ pattern }}
      />
    </>
  );
};
NameInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default NameInput;

import NameInput from './NameInput';
import NumberInput from './NumberInput';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContactThunk } from 'redux/contactsThunks';
import './App.css';

import { Button } from '@mui/material';

export function ContactForm() {
  const dispatch = useDispatch();

  const [contactName, setContactName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeName = evt => {
    setContactName(evt.target.value);
  };
  const onChangePhone = evt => {
    setNumber(evt.target.value);
  };

  return (
    <form
      className="phonebook-form"
      onSubmit={event => {
        event.preventDefault();
        // Validate name and number

        dispatch(addContactThunk({ name: contactName, number }));
        setContactName('');
        setNumber('');
      }}
    >
      <div className="wrapper-contact">
        <NameInput
          title="Add your new contact"
          value={contactName}
          onChange={onChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required={true}
        ></NameInput>
        <NumberInput
          title="Number"
          value={number}
          onChange={onChangePhone}
          pattern="[0-9]{3}-?[0-9]{2}-?[0-9]{2}"
          required={true}
        />
      </div>
      <Button variant="contained" type="submit" sx={{ mt: 2, mb: 2 }}>
        Add Contact
      </Button>
    </form>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func,
};
export default ContactForm;

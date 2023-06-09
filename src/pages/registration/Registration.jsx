import './Registration.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/usersThunks';
import { useUser } from 'redux/useSelectors';

import { Button } from '@mui/material';
const Registration = () => {
  const dispatch = useDispatch();
  const userState = useUser();

  const { error, isLoading } = userState;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onChangeEmail = evt => {
    setEmail(evt.target.value);
  };
  const onChangePassword = evt => {
    setPassword(evt.target.value);
  };

  const onChangeName = evt => {
    setName(evt.target.value);
  };
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      {error ? <h1>{error}</h1> : null}
      <form
        className="form"
        autoComplete="off"
        onSubmit={event => {
          event.preventDefault();
          // Validate name and number

          dispatch(registerThunk({ name, email, password }));
          // setEmail('');
          // setPassword('');
        }}
      >
        <label className="label">
          <h3 className="label-name">Username</h3>
          <input type="text" name="name" onChange={onChangeName} />
        </label>
        <label className="label">
          <h3 className="label-name">Email</h3>
          <input type="email" name="email" onChange={onChangeEmail} />
        </label>
        <label className="label">
          <h3 className="label-name">Password</h3>
          <input type="password" name="password" onChange={onChangePassword} />
        </label>
        <Button variant="contained" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Registration;

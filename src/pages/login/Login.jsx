import './Login.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/usersThunks';
import { useUser } from 'redux/useSelectors';
import { Button } from '@mui/material';
import { cleanup } from 'redux/usersSlice';

const Login = () => {
  const dispatch = useDispatch();
  const userState = useUser();

  const { error, token, name, isLoading } = userState;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = evt => {
    setEmail(evt.target.value);
  };
  const onChangePassword = evt => {
    setPassword(evt.target.value);
  };

  useEffect(() => {
    return () => dispatch(cleanup());
  }, [dispatch]);

  console.log(userState);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      {error ? <h1>{error}</h1> : null}
      {name ? (
        <h1>
          {name}: {token}
        </h1>
      ) : null}
      <form
        className="form"
        autoComplete="off"
        onSubmit={event => {
          event.preventDefault();
          // Validate name and number

          dispatch(loginThunk({ email, password }));
          // setEmail('');
          // setPassword('');
        }}
      >
        <label className="label">
          <h3 className="label-name">Email</h3>
          <input type="email" name="email" onChange={onChangeEmail} />
        </label>
        <label className="label">
          <h3 className="label-name">Password</h3>
          <input type="password" name="password" onChange={onChangePassword} />
        </label>
        <Button variant="contained" type="submit">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default Login;

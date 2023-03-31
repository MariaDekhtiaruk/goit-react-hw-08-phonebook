import './Login.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/usersThunks';
import { useUser } from 'redux/useSelectors';

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
          Email
          <input type="email" name="email" onChange={onChangeEmail} />
        </label>
        <label className="label">
          Password
          <input type="password" name="password" onChange={onChangePassword} />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;

import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../components/Form';
import { authOperations } from '../redux/auth';

const initialState = {
  password: '',
  email: '',
  isRegister: false,
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const [stateLogIn, setLogIn] = useState({ ...initialState });

  const changeInput = ({ currentTarget: { value, name } }) => {
    setLogIn(prev => ({ ...prev, [name]: value }));
  };
  const onChangeSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(authOperations.onLogIn(stateLogIn));
      setLogIn({ ...initialState });
    },
    [dispatch, stateLogIn],
  );

  const { password, email, isRegister } = stateLogIn;
  return (
    <Form
      password={password}
      email={email}
      isRegister={isRegister}
      changeInput={changeInput}
      onChangeSubmit={onChangeSubmit}
    />
  );
};

export default LoginPage;

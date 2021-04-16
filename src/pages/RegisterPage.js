import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../components/Form';
import authOperations from '../redux/auth/auth-operations';

const initialState = {
  name: '',
  email: '',
  password: '',
  isRegister: true,
};

const RegisterPage = () => {
  const [stateRegist, setRegist] = useState({ ...initialState });
  const dispatch = useDispatch();

  const changeInput = ({ currentTarget: { name, value } }) => {
    setRegist(prev => ({ ...prev, [name]: value }));
  };

  const onChangeSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(authOperations.onRegister(stateRegist));
      setRegist({ ...initialState });
    },
    [dispatch, stateRegist],
  );

  const { name, password, email, isRegister } = stateRegist;
  return (
    <Form
      name={name}
      email={email}
      password={password}
      isRegister={isRegister}
      changeInput={changeInput}
      onChangeSubmit={onChangeSubmit}
    />
  );
};
export default RegisterPage;

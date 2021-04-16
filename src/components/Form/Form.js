import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './Form.module.css';

const Form = ({
  email,
  password,
  name,
  isRegister,
  onChangeSubmit,
  changeInput,
}) => {
  const error = useSelector(authSelectors.error);
  return (
    <>
      <form className={styles.form} onSubmit={onChangeSubmit}>
        {isRegister && (
          <label>
            <p className={styles.label}>Name</p>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder=" "
              value={name}
              onChange={changeInput}
            />
          </label>
        )}
        <label>
          <p className={styles.label}>Email</p>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder=" "
            value={email}
            onChange={changeInput}
          />
        </label>
        <label>
          <p className={styles.label}>Password</p>
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder=" "
            value={password}
            onChange={changeInput}
          />
        </label>
        <button className={styles.button} type="submit">
          {isRegister ? 'Register' : 'Log in'}
        </button>
      </form>
      {error && <h4 className={styles.error}>{error}</h4>}
    </>
  );
};

export default Form;

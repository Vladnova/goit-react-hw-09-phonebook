import authActions from './auth-actions';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const resetError = dispatch => {
  setTimeout(() => {
    dispatch(authActions.resetError());
  }, 4000);
};

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const onRegister = options => async dispatch => {
  dispatch(authActions.registerRequest());
  try {
    const { data } = await axios.post('/users/signup', options);
    token.set(data.token);
    dispatch(authActions.registerSuccess(data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
    resetError(dispatch);
  }
};

const onLogIn = logDoc => async dispatch => {
  dispatch(authActions.logInRequest());

  try {
    const { data } = await axios.post('/users/login', logDoc);
    token.set(data.token);
    dispatch(authActions.logInSuccess(data));
  } catch (error) {
    dispatch(authActions.logInError(error.message));
    resetError(dispatch);
  }
};

const onLogOut = () => async dispatch => {
  dispatch(authActions.logOutRequest());

  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(authActions.logOutSuccess());
  } catch (error) {
    dispatch(authActions.logOutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: refreshToken },
  } = getState();

  if (!refreshToken) {
    return;
  }

  token.set(refreshToken);

  dispatch(authActions.getCurrentUserRequest());
  try {
    const { data } = await axios.get('/users/current');
    dispatch(authActions.getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(authActions.getCurrentUserSuccess(error.message));
    resetError(dispatch);
  }
};

export default { onRegister, onLogIn, onLogOut, getCurrentUser };

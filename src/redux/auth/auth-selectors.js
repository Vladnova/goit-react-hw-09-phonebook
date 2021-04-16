const loggerIn = state => state.auth.isLogIn;
const getUserEmail = state => state.auth.user.email;
const error = state => state.auth.error;

export default { loggerIn, getUserEmail, error };

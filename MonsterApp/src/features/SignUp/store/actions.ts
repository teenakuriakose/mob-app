/**
 * Actions Types
 */
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const CLEAR_SIGNUP = 'CLEAR_SIGNUP';

/**
 * @func signUp
 * @param credentials
 * @description credentials for login
 */
export const signUp = user => ({
  type: SIGNUP_REQUEST,
  payload: user,
});

  /**
 * @func signUpSuccess
 * @param userInitials
 */
export const signUpSuccess = user => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

/**
 * @func signUpFailure
 * @param error
 * @description user signUp failed
 */
export const signUpFailure = error => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

/**
 * @func signUpFailure
 * @param error
 * @description user signUp failed
 */
export const signUpClear = () => ({
  type: CLEAR_SIGNUP,
});

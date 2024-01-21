/**
 * Actions Types
 */
export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';
export const CLEAR_SIGNIN = 'CLEAR_SIGNIN';

/**
 * @func signIn
 * @param credentials
 * @description credentials for login
 */
export const signIn = user => ({
  type: SIGNIN_REQUEST,
  payload: user,
});

/**
 * @func signInSuccess
 * @param userInitials
 */
export const signInSuccess = user => ({
  type: SIGNIN_SUCCESS,
  payload: user,
});

/**
 * @func signInFailure
 * @param error
 * @description user signIn failed
 */
export const signInFailure = error => ({
  type: SIGNIN_FAILURE,
  payload: error,
});

/**
 * @func signInFailure
 * @param error
 * @description user signIn failed
 */
export const signInClear = () => ({
  type: CLEAR_SIGNIN,
});

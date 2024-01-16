/**
 * Actions Types
 */
export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

/**
 * @func signIn
 * @param credentials
 * @description credentials for login
 */
export const signIn = signInUser => ({
  type: SIGNIN_REQUEST,
  signInUser,
});

/**
 * @func signInSuccess
 * @param userInitials
 * @description userInitials for the logged in user like: entitlements
 */
export const signInSuccess = userInitials => ({
  type: SIGNIN_SUCCESS,
  payload: userInitials,
});

/**
 * @func signInFailure
 * @param error
 * @description user sigin failed
 */
export const signInFailure = error => ({
  type: SIGNIN_FAILURE,
  payload: error,
});

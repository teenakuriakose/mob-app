import * as Actions from './actions';

const initialState: any = {
  loading: false,
  response: null,
  error: null,
};

/**
 * @func Reducer for SignUp
 * @param state
 * @param action
 */
export default function (state = initialState, action: any) {
  switch (action.type) {
    case Actions.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        response: null,
        error: null,
      };
    case Actions.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.payload,
        error: null,
      };
    case Actions.SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        response: null,
        error: action.payload,
      };
    case Actions.CLEAR_SIGNUP:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

import * as Actions from './actions';

const initialState: any = {
  isLoading: false,
  entitlements: {},
};

/**
 * @func Reducer for SignIn
 * @param state
 * @param action
 */
export default function (state = initialState, action: any) {
  switch (action.type) {
    case Actions.SIGNIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Actions.SIGNIN_SUCCESS:
      const {entitlements = {}} = action.payload;
      return {
        ...state,
        entitlements,
        isLoading: false,
      };
    case Actions.SIGNIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

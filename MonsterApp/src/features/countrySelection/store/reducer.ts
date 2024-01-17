import * as Actions from './actions';

export const initialState: any = {
  country: 'AE',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Actions.SELECT_COUNTRY:
      return {...state, country: action.payload};
    default:
      return state;
  }
}

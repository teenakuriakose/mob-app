import * as Actions from './actions';

export const initialState: any = {
  lang: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Actions.SELECT_LANGUAGE:
      return {...state, lang: action.payload};
    default:
      return state;
  }
}

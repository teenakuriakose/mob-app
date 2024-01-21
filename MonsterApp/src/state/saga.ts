import {all} from 'redux-saga/effects';
import {watchSignUpReducer} from '../features/SignUp/store/saga';

export default function* () {
  yield all([watchSignUpReducer()]);
}

import {takeLatest, call, put} from 'redux-saga/effects';
import * as Actions from './actions';
import * as Endpoints from '../../../network/endpoints';
import * as Network from '../../../network/network';
import {COUNTRIES} from '../../../core/constants';

export function* watchSignInReducer() {
  yield takeLatest(Actions.SIGNIN_REQUEST, workerSignInRequest);
}

export function fetchUser() {
  const url = Endpoints.CREATE_USER;
  const config = {
    method: 'GET',
    url,
  };
  return Network.makeNetworkCall(config);
}

type User = {
  username: string;
  password: string;
  country: string;
  id: string;
};

const findUser = (
  username: string,
  password: string,
  country: COUNTRIES,
  users: any,
): User | undefined => {
  return users.find(
    user =>
      user.username === username &&
      user.password === password &&
      user.country === country,
  );
};

/**
 * @func Worker workerSignInRequest
 * @descrption Sign in the user
 */
export function* workerSignInRequest(action: any) {
  try {
    const usersList = yield call(fetchUser);
    const {username, password, country} = action.payload;
    const response = findUser(username, password, country, usersList.data);
    if (!response) {
      throw 'Invalid user';
    }
    yield put(Actions.signInSuccess(response));
  } catch (error) {
    yield put(Actions.signInFailure(error));
  }
}

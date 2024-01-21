import {takeLatest, call, put} from 'redux-saga/effects';
import * as Actions from './actions';
import * as Endpoints from '../../../network/endpoints';
import * as Network from '../../../network/network';

/**
 * @func Entitlement
 * @description
 */
export function* watchSignUpReducer() {
  yield takeLatest(Actions.SIGNUP_REQUEST, workerSignUpRequest);
}

/**
 * @func fetchEntitlement
 **/
export function createUser(payload: any) {
  const url = Endpoints.CREATE_USER;
  const config = {
    method: 'POST',
    url,
    data: {...payload},
  };
  return Network.makeNetworkCall(config);
}

/**
 * @func Worker workerSignUpRequest
 * @descrption Sign up the user
 */
export function* workerSignUpRequest(action: any) {
  try {
    const response = yield call(createUser, action.payload);
    yield put(Actions.signUpSuccess(response?.data));
  } catch (error) {
    yield put(Actions.signUpFailure(error));
  }
}

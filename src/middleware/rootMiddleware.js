
import loginWithFirebaseMiddleware from './loginMiddleware'
import fetchAllTeamMemberMiddleware from './fetchAllTeamMemberMiddleware'
import checkHasTeam from './hasTeamMiddleware'
import checkIsLeader from './isLeaderMiddleware'
import { all } from 'redux-saga/effects'

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    loginWithFirebaseMiddleware(),
    fetchAllTeamMemberMiddleware(),
    checkHasTeam(),
    checkIsLeader()
  ])
}
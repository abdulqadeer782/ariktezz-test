import { all } from "redux-saga/effects";
import userSaga from "./User";
// import User from "./User";
// import Role from "./Role";

export default function* rootSaga(getState) {
    yield all([userSaga() /*User(), Role()*/]);
}

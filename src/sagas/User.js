import { takeLatest, put, call } from "redux-saga/effects";
import {
    getUsersSuccess,
    getUsersFailure,
    addUserSuccess,
    addUserFailure,
    editUserSuccess,
    editUserFailure,
    deleteUserSuccess,
    deleteUserFailure,
    clearStatus,
} from "../reducers/userReducer";
import {
    fetchUsersAPI,
    fetchUserAPI,
    addUserAPI,
    deleteUserAPI,
    editUserAPI,
} from "../endpoints/UserAPI";

// Worker saga for adding a user
function* getUsersSaga() {
    try {
        const response = yield call(fetchUsersAPI);
        yield put(getUsersSuccess(response.data));
    } catch (error) {
        yield put(getUsersFailure());
    }
}

// Worker saga for adding a user
function* addUserSaga(action) {
    try {
        const newUser = yield call(addUserAPI, action.payload); // API call to create a new user
        yield put(addUserSuccess(newUser.data)); // run success action and data to state
    } catch (error) {
        yield put(addUserFailure());
    }
}

// Worker saga for editing a user
function* editUserSaga(action) {
    try {
        const { id, username, email, role } = action.payload;
        const editedUser = yield call(editUserAPI, id, { username, email, role }); // API call to update the user
        yield put(editUserSuccess(editedUser.data));
    } catch (error) {
        yield put(editUserFailure());
    }
}

// Worker saga for deleting a user
function* deleteUserSaga(action) {
    try {
        yield call(deleteUserAPI, action.payload); // API call to delete the user
        yield put(deleteUserSuccess(action.payload));
    } catch (error) {
        yield put(deleteUserFailure("Failed to delete user."));
    }
}

// Watcher saga to listen for dispatched actions
export default function* userSaga() {
    yield takeLatest("user/getUsers", getUsersSaga);
    yield takeLatest("user/addUser", addUserSaga);
    yield takeLatest("user/editUser", editUserSaga);
    yield takeLatest("user/deleteUser", deleteUserSaga);
}

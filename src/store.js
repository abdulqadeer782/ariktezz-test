import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootSaga from "./sagas/index";
import { loginReducer } from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        login: loginReducer,
        user: userReducer,
    },
    middleware: [
        ...getDefaultMiddleware({ thunk: false }),
        sagaMiddleware,
        logger,
    ],
});

sagaMiddleware.run(rootSaga);

export default store;

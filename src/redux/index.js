import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import filmsReducer from "./reducers/filmsReducer";


const rootReducer = combineReducers({
    films: filmsReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
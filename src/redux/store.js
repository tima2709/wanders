import { applyMiddleware, combineReducers, createStore } from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import {userReducers} from "./reducers/userReducer";
import {tourReducers} from './reducers/tourReducer'



const rootReducer = combineReducers({
    user: userReducers,
    tour: tourReducers,
})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export {store}
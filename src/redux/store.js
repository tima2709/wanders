import { applyMiddleware, combineReducers, createStore } from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import {userReducers} from "./reducers/userReducer";



const rootReducer = combineReducers({
    user: userReducers,
})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export {store}
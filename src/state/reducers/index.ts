import { combineReducers } from "redux";
import repositoresReducer from "./repositories.reducer";

const reducers = combineReducers({
    repositories: repositoresReducer
})

export default reducers;
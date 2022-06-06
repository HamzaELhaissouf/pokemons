import { combineReducers } from "redux";

import todoReducer from "./items/reducer";

const rootReducer = combineReducers({
 items: todoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
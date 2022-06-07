import { combineReducers } from "redux";

import itemsReducer from "./items/reducer";

const rootReducer = combineReducers({
 items: itemsReducer,
});

export type AppState = ReturnType<typeof rootReducer> | never;

export default rootReducer;
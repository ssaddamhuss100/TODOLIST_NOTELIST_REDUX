import * as redux from "redux";
import {todoReducer} from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";

const reducers = redux.combineReducers({
              todoReducer,
              noteReducer
})

export const store = redux.createStore(reducers);


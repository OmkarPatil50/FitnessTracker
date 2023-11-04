import { combineReducers } from "redux";
import { exerciseReducer } from "./exerciseReducer";
import { foodReducer } from "./foodReducer";
import { goalReducer } from "./goalReducer";

export const rootReducer = combineReducers({
  exerciseReducer,
  foodReducer,
  goalReducer
});

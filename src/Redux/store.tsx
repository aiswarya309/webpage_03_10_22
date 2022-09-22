import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReduce from "./Reducer";

const store = createStore(rootReduce, applyMiddleware(thunk))
export default store
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReduce from "./Reducer";
import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(rootReduce,composeWithDevTools(applyMiddleware(thunk)) )
export default store
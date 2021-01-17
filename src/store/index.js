import {combineReducers} from "redux";
// import { usersList } from "../API/postlist";
import { userpostReducer } from "../reducer/userposts.reducers";
import fetchuserslistdata from "../reducer/userlist.reducer";



const reducers = combineReducers({post:userpostReducer,users:fetchuserslistdata});



export default reducers;
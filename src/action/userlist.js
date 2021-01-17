import {usersList} from "../API/postlist";
import {USERS} from "./types";

const userAction = (userId)=>{
    return async(dispatch) =>{
        let response =await usersList(userId);
        dispatch({type:USERS,payload:response.data});
    }
};
export default userAction;

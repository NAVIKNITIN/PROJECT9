import {USERS_POST} from "./types";
import {usersPost} from '../API/postlist';

export const usersPostdata= ()=>{
    return async(dispatch) =>{
        let response =  await usersPost();
    console.log(response.data);
    dispatch({type:USERS_POST,payload: response.data})
    }
    
};

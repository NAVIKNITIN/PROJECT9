import {USERS} from "../action/types";

const fetchuserslistdata = (state=[],action)=>{
    switch(action.type){
        case USERS:
            return [...state,action.payload];
            default:
                return state;
    }
};

export default fetchuserslistdata;
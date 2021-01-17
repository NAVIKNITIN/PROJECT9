import axios from 'axios';

export const usersPost = () =>{
    return axios.get('https://jsonplaceholder.typicode.com/posts');

};
export const usersList = (id)=>{
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
};
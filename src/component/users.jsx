import React,{Component} from "react";
import {connect} from "react-redux";
import usersAction from "../action/userlist";



class Users extends Component{ 
    constructor(){
        super();

    };
    
    componentDidMount(){
        this.props.usersAction(this.props.uid);

    }
    render(){
        if(!this.props.user){return <h4>Loading....</h4>}
        return <h4>{this.props.user.name}</h4>
    }
};

const mapStateToProps=(state,ownprops)=>{
    // console.log(state);
    // console.log(ownprops);

    return {user:state.users.find(user=> user.id ===ownprops.uid)}
};



export default connect(mapStateToProps,{usersAction})(Users);

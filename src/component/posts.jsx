import React,{Component} from "react";
import {connect} from "react-redux";
import {usersPostdata} from "../action/posts";
import Users from "./users";
 
class Posts extends Component{
    componentDidMount(){
        this.props.usersPostdata();
    }
    render(){
        if(!this.props.userspost){return <h4>Loading.........</h4>}
        return(
            <div className="ui row">
            {
                this.props.userspost.slice(0,10).map(data=>{
                    return(
                        <div className="ui col-md-4" key={data.id}>
                            <div className="ui card">
                                <div className="ui card-body">
                                    <h4 className="ui card-title">
                                        {data.title}
                                    </h4>
                                    <p className="ui card-text">
                                        {data.body}
                                    </p>
                                    <Users uid={data.id}/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        
        )
        
    }
};



const mapStateToProps = (state)=>{
    // console.log(state);
    return {userspost : state.post};
};

export default connect(mapStateToProps,{usersPostdata})(Posts);

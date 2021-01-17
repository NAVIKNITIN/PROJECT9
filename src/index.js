import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducers from "././store/index"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import thunk from "redux-thunk";


let store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>
    ,document.getElementById("root")
    
)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "././store/index"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


let store = createStore(reducers);


ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>
    ,document.getElementById("root")
    
)
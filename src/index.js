import React from 'react';
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import IndexPage from "./pages/IndexPage";

const refRouter = React.createRef();
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter
            ref={refRouter}
        >
            <Switch>
                <Route path={'/'} >
                    {props => <IndexPage fullscreen {...props}/>}
                </Route>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


console.log("Dev mode: ", process.env.NODE_ENV);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
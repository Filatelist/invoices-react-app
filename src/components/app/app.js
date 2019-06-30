import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './app.css';
import FirstPage from '../first-page';
import SecondPage from '../second-page';

const App = () =>{
    return(
        <Router>
            <Route path="/" exact component={FirstPage} />
            <Route path="/create-invoice" component={SecondPage} />
        </Router>
    );
};
export default App;

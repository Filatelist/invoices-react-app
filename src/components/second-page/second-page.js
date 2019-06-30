import React, {Component} from 'react';
import Header from "../header";
import Post from '../post-component';
import withService from "../hoc";


const SecondPage =()=>{

        return(
            <div className="container ">
                <Header title={'Create invoices'} />
                <Post  />
            </div>
        );
};

export default SecondPage

import React from 'react';
import {Link} from 'react-router-dom'
import './action-component.css'


const Action = () =>{
    return(
        <div className="add-new bg-light">
            <p className="weight">Actions</p>
            <Link to={'/create-invoice'}><button className="btn btn-primary left-right">Add new</button></Link>
        </div>
    );
}
export default Action

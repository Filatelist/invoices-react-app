import React from 'react';
import './header.css';

const Header = ({title}) =>{
    return(
        <nav className="bg-inovice d-row">
            <div className=" title special-font nav-border margines">{title}</div>
            <div className="line">
                <hr/></div>
        </nav>
    );
}
export default Header;

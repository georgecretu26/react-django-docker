import React, { Component } from 'react';
import returnYear from './../../utilities/';
import './style.less';

var year = returnYear();

class Footer extends Component {
    render(){
        console.log(year)
        return(
            <div className="footer" >
                &copy; {year} 
            </div>
        )
    }
}

export default Footer;
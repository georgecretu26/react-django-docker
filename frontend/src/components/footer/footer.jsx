import React, { Component } from 'react';
import returnYear from './../../utilities/';
import './style.less';

var year = returnYear();

class Footer extends Component {
  render(){
    return(
      <footer className="footer" >
        &copy; {year}
      </footer>
    );
  }
}

export default Footer;

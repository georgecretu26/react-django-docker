import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './../../containers/home/';
import Projects from './../../containers/projects/';
import About from './../../containers/about/';
import './style.less';


const navigationJSON = [
  {id: 1, url: '/', name: 'Homepage', emphasize: false},
  {id: 2, url: '/projects/', name: 'Projects', emphasize: false},
  {id: 3, url: '/about/', name: 'About', emphasize: false},
  {id: 4, url: '/contact/', name: 'Contact', emphasize: true},
];

const Navigation = () => {
  return(
    <Router>
      <nav>
        <ul className="nav">
          {navigationJSON.map((navItem, index) => {
            const emphasized = navItem.emphasize ? 'emphasized' : '';
            return(
              <li key={navItem.id}>
                <Link className={emphasized} to={navItem.url}>
                  {navItem.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <NavigationRoute />
    </Router>
  );
};

const NavigationRoute = () => {
  return (
    <Fragment>
      <Route exact path="/" component={Home}/>
      <Route path="/about/" component={About} />
      <Route path="/projects/" component={Projects} />
    </Fragment>
  );
};

export default Navigation;

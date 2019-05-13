import React, { Component } from 'react';

import './App.less';
import Navigation from './components/navigation/navigation';
import Footer from './components/footer/footer';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default App;

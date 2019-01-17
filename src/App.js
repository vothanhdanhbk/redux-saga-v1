import React, { Component } from 'react';
import './App.css';
import ProductsManager from './containers/ProductsManager';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div><h1 style={{textAlign:"center"}}>Hello ! it just test...</h1></div>
        <ProductsManager />
      </React.Fragment>
    );
  }
}

export default App;

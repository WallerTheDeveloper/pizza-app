import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MenuList from './Components/MenuList';
import CartList from './Components/CartList';
import EditOrder from './Components/EditOrder';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/orders' exact={true} component={CartList} />
          <Route path='/orders/:id' exact={true} component={EditOrder}></Route>
          <Route path='/menu' exact={true} component={MenuList} />
        </Switch>
      </Router>
    );
  }
}
export default App;

function Test() {
  return (<p>Megatest</p>)
}

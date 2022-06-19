import React, { Component } from 'react';
import PizzaProduct from './PizzaProduct';
import NavBarComponent from './NavBarComponent';
import OrderComponent from './OrderComponent';
class MenuList extends Component {

    constructor(props) {
        super(props);
        this.state = { pizzas: [] };
    }

    componentDidMount() {
        fetch('/menu')
            .then(response => response.json())
            .then(data => this.setState({ pizzas: data }));
    }

    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <NavBarComponent />
                    <PizzaProduct data={this.state} />
                </header>
            </div >
        );
    }
}
export default MenuList;
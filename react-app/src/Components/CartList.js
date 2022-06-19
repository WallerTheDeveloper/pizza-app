import { Button } from '@mui/material';
import React, { Component } from 'react';
import NavBarComponent from './NavBarComponent';
import OrderComponent from './OrderComponent';

class CartList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }

    componentDidMount() {
        fetch('/orders')
            .then(response => response.json())
            .then(data => this.setState({ orders: data }));
    }

    async handleRemoveAllFromCart() {
        let isConfirmed = window.confirm("Remove all products from cart?")
        if (isConfirmed) {
            await fetch('/deleteAll', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                window.location.reload()
            });
        }
    }

    render() {
        var bgColors = {
            "Red": "#E9573F",
            "Yellow": "#F6BB42",

        };
        return (
            <div className='App'>
                <header className='App-header'>
                    <NavBarComponent />
                    <Button id='show_button' className="btn-sm" style={{ backgroundColor: bgColors.Red, color: "#FFFFFF", display: "flex", marginLeft: "70%", marginBottom: '30px' }} onClick={() => {
                        this.handleRemoveAllFromCart();
                    }}>
                        Cancel All Orders
                    </Button>

                    <OrderComponent data={this.state} />
                    <Button />
                </header>
            </div >
        );
    }
}
export default CartList;
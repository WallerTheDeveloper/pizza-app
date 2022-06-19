import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import { Link } from 'react-router-dom'

import Link from '@mui/material/Link';

class OrderComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentOrder: {}
        };
    }
    async handleRemove(id) {
        let isConfirmed = window.confirm("Remove product from cart?")
        if (isConfirmed) {
            await fetch(`/orders/${id}`, {
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
        const { orders } = this.props.data
        var bgColors = {
            "Red": "#E9573F",
            "Yellow": "#F6BB42",

        };
        const ordersList = orders.map(order => {

            return <Card sx={{ width: 400, marginBottom: 10, borderRadius: 5 }} key={order.orderID} >
                <CardMedia
                    component="img"
                    height="140"
                    image={order.imageUrl}
                    alt="pizza_image"
                />
                <CardContent>

                    <Typography gutterBottom variant="h5" component="div">
                        {order.orderedPizzaName}
                    </Typography>
                    <Typography variant="body2" align="left">
                        Order Time:{order.orderTime}
                    </Typography>
                    <Typography variant="body2" align="left">
                        Dough Type: {order.doughType}
                    </Typography>
                    <Typography variant="body2" align="left">
                        Sauce Type: {order.sauceType}
                    </Typography>
                    <Typography variant="body2" align="left">
                        Size: {order.sizeType}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href={`/orders/${order.orderID}`} sx={{ marginRight: 2 }} style={{ backgroundColor: bgColors.Yellow }} className="btn-sm" color="#FFFFFF" underline="none">
                        Edit Order
                    </Link>
                    <Button className="btn-sm" style={{ backgroundColor: bgColors.Red, color: "#FFFFFF" }} onClick={() => {
                        this.handleRemove(order.orderID);
                    }}>
                        Cancel Order
                    </Button>
                </CardActions>
            </Card >
        });

        return (
            <div>
                {ordersList}

            </div >
        );
    }
}

export default OrderComponent;